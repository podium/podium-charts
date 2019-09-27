import React from 'react';
import { storiesOf } from '@storybook/react';
import formatters from '../Charts/utils/formatters';
import colors from '../Colors';
import {
  Chart,
  XAxis,
  YAxis,
  Bar,
  Granularity,
  Line,
  Legend,
  Summary,
  Tooltip,
  TooltipBody,
  TooltipBodyTime,
  ReportCard,
  ReportTitle
} from '../';
import { CustomLegendNotes } from './ReportCardHelpers';
import {
  data,
  dataLegend,
  powerLevels,
  powerLevelsLegend,
  weightedAvgData,
  weightedAvgDataLegend,
  timeData,
  customFormatter
} from './storyHelpers';

storiesOf('Report Card', module)
  .add('w/Chart,Title', () => (
    <ReportCard>
      <ReportTitle title="Total Reviews" timeRange="last12Months" />
      <Chart data={data}>
        <YAxis tickFormatter={formatters.abbreviateTime} />
        <XAxis dataKey="date" tickFormatter={formatters.date()} />
        <Line dataKey="sms" color={colors.cobaltBlue} />
      </Chart>
    </ReportCard>
  ))
  .add('w/Summary', () => (
    <ReportCard>
      <ReportTitle title="Total Reviews" timeRange="lastYear" />
      <Chart data={data}>
        <YAxis />
        <XAxis dataKey="date" tickFormatter={formatters.date()} />
        <Line dataKey="sms" color={colors.cobaltBlue} />
      </Chart>
      <Summary
        formatter={formatters.roundToPlaces(1)}
        chartData={data}
        aggregationOptions={{
          type: 'total',
          dataKeys: ['sms']
        }}
        overallSummaryMetric={9400}
        granularity="month"
        timeRange="lastYear"
      />
    </ReportCard>
  ))
  .add('w/Legend (weightedAvg)', () => (
    <ReportCard>
      <ReportTitle
        title="Inbound Leads by Source"
        timeRange="custom"
        dateStart="2018-09-15T23:43:32"
        dateEnd="2018-11-15T23:43:32"
      />
      <Chart data={weightedAvgData}>
        <YAxis />
        <XAxis dataKey="date" tickFormatter={formatters.date()} />
        <Line dataKey="dogs.cuteness" name="Dogs" color={colors.cobaltBlue} />
        <Line dataKey="cats.cuteness" name="Cats" color={colors.poppyRed} />
        <Tooltip
          content={
            <TooltipBody
              formatter={formatters.roundToPlaces(1)}
              aggregationOptions={{
                type: 'weightedAvg',
                dataKeys: ['dogs', 'cats'],
                options: { valueKey: 'cuteness', countKey: 'amount' }
              }}
              summaryTitle="Animals"
            />
          }
        />
      </Chart>
      <Summary
        formatter={formatters.roundToPlaces(1)}
        chartData={weightedAvgData}
        aggregationOptions={{
          type: 'weightedAvg',
          dataKeys: ['cats', 'dogs'],
          options: { valueKey: 'cuteness', countKey: 'amount' }
        }}
        overallSummaryMetric={3.5}
        granularity="month"
        timeRange="lastYear"
      />
      <Legend
        formatter={formatters.roundToPlaces(1)}
        legendData={weightedAvgDataLegend}
        aggregationOptions={{
          type: 'weightedAvg',
          dataKeys: ['cats', 'dogs'],
          options: { valueKey: 'cuteness', countKey: 'amount' }
        }}
        displayOptions={[
          { name: 'Dogs', dataKey: 'dogs', color: colors.cobaltBlue },
          { name: 'Cats', dataKey: 'cats', color: colors.poppyRed }
        ]}
      />
    </ReportCard>
  ))
  .add('w/Legend (series with no data)', () => (
    <ReportCard>
      <ReportTitle title="Power Levels" data={powerLevels} />
      <Chart data={powerLevels}>
        <YAxis />
        <XAxis dataKey="date" tickFormatter={formatters.date()} />
        <Line dataKey="goku" name="Goku" color="#FB7326" />
        <Line dataKey="piccolo" name="Piccolo" color="#479919" />
        <Line dataKey="vegeta" name="Vegeta" color="#3756B0" />
        <Line dataKey="turtle" name="Turtle" color="#6A3027" />
      </Chart>
      <Summary
        formatter={formatters.roundToPlaces(1)}
        chartData={powerLevels}
        aggregationOptions={{
          type: 'avg',
          dataKeys: ['goku', 'piccolo', 'vegeta', 'turtle']
        }}
        overallSummaryMetric={11279.2}
        granularity="day"
        timeRange="lastWeek"
      />
      <Legend
        formatter={formatters.nullToValue(
          formatters.roundToPlaces(1),
          '(no data)'
        )}
        legendData={powerLevelsLegend}
        aggregationOptions={{
          type: 'avg',
          dataKeys: ['goku', 'piccolo', 'vegeta', 'turtle']
        }}
        displayOptions={[
          { name: 'Goku', dataKey: 'goku', color: '#FB7326' },
          { name: 'Piccolo', dataKey: 'piccolo', color: '#479919' },
          { name: 'Vegeta', dataKey: 'vegeta', color: '#3756B0' },
          { name: 'Turtle With No Name', dataKey: 'turtle', color: '#6A3027' }
        ]}
      />
    </ReportCard>
  ))
  .add(
    'w/Custom Formatted Legend',
    () => (
      <ReportCard>
        <ReportTitle title="Total Reviews" timeRange="lastYear" />
        <Granularity
          timeRange="lastYear"
          onChange={res => {
            console.log(`You picked ${res}`);
          }}
        />
        <Chart data={data}>
          <YAxis />
          <XAxis dataKey="date" tickFormatter={formatters.date()} />
          <Line dataKey="sms" color={colors.cobaltBlue} />
        </Chart>
        <Summary
          formatter={formatters.roundToPlaces(1)}
          chartData={data}
          aggregationOptions={{
            type: 'total',
            dataKeys: ['text', 'organic']
          }}
          overallSummaryMetric={80.6}
          granularity="month"
          timeRange="lastYear"
        />
        <Legend
          formatter={customFormatter}
          legendData={dataLegend}
          aggregationOptions={{
            type: 'total',
            dataKeys: ['organic', 'text']
          }}
          displayOptions={[
            {
              name: 'Webchat',
              dataKey: 'text',
              color: colors.cobaltBlue,
              disabled: true
            },
            { name: 'Organic', dataKey: 'organic', color: colors.cobaltBlue },
            {
              name: 'Something Else',
              dataKey: 'text',
              color: colors.poppyRed,
              disabled: true
            }
          ]}
        />
      </ReportCard>
    ),
    { notes: CustomLegendNotes }
  )

  .add('w/Legend (multiple bars)', () => (
    <ReportCard>
      <ReportTitle title="Inbound Leads by Source" timeRange="lastYear" />
      <Chart data={data}>
        <YAxis />
        <XAxis dataKey="date" tickFormatter={formatters.date()} />
        <Tooltip
          content={<TooltipBody summaryType="total" summaryTitle="Reviews" />}
        />
        <Bar name="Organic" dataKey="organic" color={colors.cobaltBlue} />
        <Bar name="Text" dataKey="text" color={colors.poppyRed} />
      </Chart>
      <Summary
        formatter={formatters.roundToPlaces(1)}
        chartData={data}
        aggregationOptions={{
          type: 'avg',
          dataKeys: ['organic', 'text']
        }}
        overallSummaryMetric={3.7}
        granularity="month"
        timeRange="lastYear"
      />
      <Legend
        legendData={dataLegend}
        displayOptions={[
          { name: 'Organic', dataKey: 'organic', color: colors.cobaltBlue },
          { name: 'Text', dataKey: 'text', color: colors.poppyRed }
        ]}
      />
    </ReportCard>
  ))
  .add('w/Legend (stacked bars)', () => (
    <ReportCard>
      <ReportTitle title="Inbound Leads by Source" timeRange="lastYear" />
      <Chart data={data}>
        <YAxis />
        <XAxis dataKey="date" tickFormatter={formatters.date()} />
        <Tooltip
          content={<TooltipBody summaryType="total" summaryTitle="Reviews" />}
        />
        <Bar
          name="Organic"
          stackId="1"
          dataKey="organic"
          color={colors.cobaltBlue}
        />
        <Bar name="Text" stackId="1" dataKey="text" color={colors.poppyRed} />
      </Chart>
      <Summary
        formatter={formatters.roundToPlaces(1)}
        chartData={data}
        aggregationOptions={{
          type: 'avg',
          dataKeys: ['organic', 'text']
        }}
        overallSummaryMetric={3.7}
        granularity="month"
        timeRange="lastYear"
      />
      <Legend
        legendData={dataLegend}
        displayOptions={[
          { name: 'Organic', dataKey: 'organic', color: colors.cobaltBlue },
          { name: 'Text', dataKey: 'text', color: colors.poppyRed }
        ]}
      />
    </ReportCard>
  ))
  .add('w/Tooltip', () => (
    <ReportCard>
      <ReportTitle
        title="Cats vs Dogs"
        timeRange="custom"
        dateStart="2018-09-15T23:43:32"
        dateEnd="2018-11-15T23:43:32"
      />
      <Chart data={weightedAvgData}>
        <YAxis />
        <XAxis dataKey="date" tickFormatter={formatters.date()} />
        <Line dataKey="dogs.cuteness" name="Dogs" color={colors.poppyRed} />
        <Line dataKey="cats.cuteness" name="Cats" color={colors.cobaltBlue} />
        <Tooltip
          content={
            <TooltipBody
              aggregationOptions={{
                type: 'weightedAvg',
                dataKeys: ['cats', 'dogs'],
                options: { countKey: 'amount', valueKey: 'cuteness' }
              }}
              summaryTitle="Animals"
              formatter={formatters.roundToPlaces(1)}
            />
          }
        />
      </Chart>
      <Summary
        formatter={formatters.roundToPlaces(1)}
        chartData={weightedAvgData}
        aggregationOptions={{
          type: 'weightedAvg',
          options: { valueKey: 'cuteness', countKey: 'amount' },
          dataKeys: ['dogs', 'cats']
        }}
        overallSummaryMetric={3.5}
        granularity="month"
        timeRange="lastYear"
      />
    </ReportCard>
  ))
  .add('w/TooltipBody (single key)', () => (
    <ReportCard>
      <ReportTitle title="Single Value Tooltip" timeRange="lastYear" />
      <Chart data={data}>
        <YAxis />
        <XAxis dataKey="date" tickFormatter={formatters.date()} />
        <Line dataKey="sms" name="SMS" color={colors.poppyRed} />
        <Tooltip content={<TooltipBody summaryTitle="Minutes" />} />
      </Chart>
      <Summary
        formatter={formatters.commatize}
        chartData={data}
        aggregationOptions={{
          type: 'total',
          dataKeys: ['sms']
        }}
        overallSummaryMetric={9400}
        granularity="month"
        timeRange="lastYear"
      />
    </ReportCard>
  ))
  .add('w/TooltipBodyTime', () => (
    <ReportCard>
      <ReportTitle
        title="Wait Time"
        timeRange="custom"
        dateStart="2018-08-15T23:43:32"
        dateEnd="2018-11-15T23:43:32"
      />
      <Chart data={timeData}>
        <YAxis />
        <XAxis dataKey="date" tickFormatter={formatters.date()} />
        <Line dataKey="waitTime" name="Wait Time" color={colors.poppyRed} />
        <Tooltip content={<TooltipBodyTime />} />
      </Chart>
      <Summary
        formatter={formatters.commatize}
        chartData={timeData}
        aggregationOptions={{
          type: 'total',
          dataKeys: ['waitTime']
        }}
        overallSummaryMetric={3130}
        granularity="month"
        timeRange="custom"
      />
    </ReportCard>
  ))
  .add('Loading', () => (
    <ReportCard loading>
      <ReportTitle title="Total Reviews" timeRange="lastYear" />
      <Granularity
        timeRange="lastYear"
        onChange={res => {
          console.log(`You picked ${res}`);
        }}
      />
      <Chart data={data}>
        <YAxis tickFormatter={formatters.abbreviateTime} />
        <XAxis dataKey="date" tickFormatter={formatters.date()} />
        <Line dataKey="sms" color={colors.cobaltBlue} />
        <Tooltip content={<TooltipBodyTime />} />
      </Chart>
      <Summary
        formatter={formatters.roundToPlaces(1)}
        chartData={data}
        aggregationOptions={{
          type: 'total',
          dataKeys: ['text', 'organic']
        }}
        granularity="month"
        timeRange="lastYear"
      />
      <Legend
        legendData={dataLegend}
        displayOptions={[
          { name: 'Organic', dataKey: 'organic', color: colors.cobaltBlue },
          { name: 'Text', dataKey: 'text', color: colors.poppyRed }
        ]}
      />
    </ReportCard>
  ))

  .add('w/Granularity', () => (
    <ReportCard>
      <ReportTitle title="Total Reviews" timeRange="lastYear" />
      <Granularity
        timeRange="lastYear"
        onChange={res => {
          console.log(`You picked ${res}`);
        }}
      />
      <Chart data={data}>
        <YAxis />
        <XAxis dataKey="date" tickFormatter={formatters.date()} />
        <Line dataKey="sms" color={colors.cobaltBlue} />
      </Chart>
      <Summary
        formatter={formatters.roundToPlaces(1)}
        chartData={data}
        aggregationOptions={{
          type: 'total',
          dataKeys: ['text', 'organic']
        }}
        overallSummaryMetric={80.6}
        granularity="month"
        timeRange="lastYear"
      />
      <Legend
        formatter={formatters.roundToPlaces(1)}
        legendData={dataLegend}
        aggregationOptions={{
          type: 'total',
          dataKeys: ['organic', 'text']
        }}
        displayOptions={[
          { name: 'Organic', dataKey: 'organic', color: colors.cobaltBlue },
          { name: 'Text', dataKey: 'text', color: colors.poppyRed }
        ]}
      />
    </ReportCard>
  ))

  .add('null data', () => (
    <ReportCard>
      <ReportTitle
        title="Cats vs Dogs"
        data={[]}
        timeRange="custom"
        dateStart="2018-12-05"
        dateEnd="2019-01-10"
      />
      <Chart data={[]}>
        <YAxis tickFormatter={formatters.abbreviateNumber} />
        <XAxis dataKey="date" tickFormatter={formatters.date()} />
        <Bar dataKey="dogs.cuteness" name="Dogs" color={colors.poppyRed} />
        <Bar dataKey="cats.cuteness" name="Cats" color={colors.cobaltBlue} />
        <Tooltip
          content={
            <TooltipBody
              aggregationOptions={{
                type: 'weightedAvg',
                dataKeys: ['cats', 'dogs'],
                options: { countKey: 'amount', valueKey: 'cuteness' }
              }}
              summaryTitle="Animals"
              formatter={formatters.roundToPlaces(1)}
            />
          }
        />
      </Chart>
      <Summary
        formatter={formatters.roundToPlaces(1)}
        chartData={[]}
        aggregationOptions={{
          type: 'weightedAvg',
          options: { valueKey: 'cuteness', countKey: 'amount' },
          dataKeys: ['dogs', 'cats']
        }}
        granularity="month"
        timeRange="custom"
        dateStart="2018-12-05"
        dateEnd="2019-01-10"
      />
    </ReportCard>
  ));
