import React from 'react';
import { storiesOf } from '@storybook/react';
import formatters from './formatters';
import colors from './colors';
import {
  Chart,
  XAxis,
  YAxis,
  Bar,
  Granularity,
  Line,
  SummaryLine,
  Legend,
  Summary,
  Tooltip,
  TooltipBody,
  TooltipBodyTime,
  ReportCard,
  ReportTitle,
  ReportSummaryTitle
} from './';
import { Palette, WindowWidthMonitor } from './StoryHelpers';

const data = [
  { sms: 200, text: 1, organic: 2, date: '2018-01-01T00:00:00.000Z' },
  { sms: 3000, text: 5, organic: 0, date: '2018-02-01T00:00:00.000Z' },
  { sms: 500, text: 3, date: '2018-03-01T00:00:00.000Z' },
  { sms: 200, text: 0, organic: 3, date: '2018-04-01T00:00:00.000Z' },
  { sms: 300, text: 1, organic: 4, date: '2018-05-01T00:00:00.000Z' },
  { sms: 4000, text: 2.33, organic: 8, date: '2018-06-01T00:00:00.000Z' },
  { sms: 400, text: 2.33, organic: 9, date: '2018-07-01T00:00:00.000Z' },
  { sms: 200, text: 2.33, organic: 15, date: '2018-08-01T00:00:00.000Z' },
  { sms: 100, text: 5, organic: 13, date: '2018-09-01T00:00:00.000Z' },
  { sms: null, text: null, organic: null, date: '2018-10-01T00:00:00.000Z' },
  { sms: 100, text: 2.33, organic: 0, date: '2018-11-01T00:00:00.000Z' },
  { sms: 400, text: 2.33, organic: 0, date: '2018-12-01T00:00:00.000Z' }
];

const currData = [
  { value: 605, granularity: '2018-12-01T00:00:00.000Z' },
  { value: 1000, granularity: '2018-12-02T00:00:00.000Z' },
  { value: 1283, granularity: '2018-12-03T00:00:00.000Z' },
  { value: 4838, granularity: '2018-12-04T00:00:00.000Z' },
  { value: 0, granularity: '2018-12-05T00:00:00.000Z' },
  { value: 492, granularity: '2018-12-06T00:00:00.000Z' },
  { value: 0, granularity: '2018-12-07T00:00:00.000Z' },
  { value: 0, granularity: '2018-12-08T00:00:00.000Z' },
  { value: 0, granularity: '2018-12-09T00:00:00.000Z' },
  { value: 0, granularity: '2018-12-10T00:00:00.000Z' }
];

const prevData = [
  { value: 600, granularity: '2018-11-01T00:00:00.000Z' },
  { value: 223, granularity: '2018-11-02T00:00:00.000Z' },
  { value: 0, granularity: '2018-11-03T00:00:00.000Z' },
  { value: 0, granularity: '2018-11-04T00:00:00.000Z' },
  { value: 0, granularity: '2018-11-05T00:00:00.000Z' },
  { value: 454, granularity: '2018-11-06T00:00:00.000Z' },
  { value: 0, granularity: '2018-11-07T00:00:00.000Z' },
  { value: 0, granularity: '2018-11-08T00:00:00.000Z' },
  { value: 0, granularity: '2018-11-09T00:00:00.000Z' },
  { value: 0, granularity: '2018-11-10T00:00:00.000Z' }
];

const weightedAvgData = [
  {
    dogs: { cuteness: 5, amount: 10 },
    cats: { cuteness: 2.5, amount: 15 },
    date: '2018-09-15T23:43:32'
  },
  {
    dogs: { cuteness: 2, amount: 20 },
    cats: { cuteness: 7, amount: 18 },
    date: '2018-10-15T23:43:32'
  },
  {
    dogs: { cuteness: 1, amount: 5 },
    cats: { cuteness: 0.5, amount: 8 },
    date: '2018-11-15T23:43:32'
  }
];

const weightedAvgDataPrev = [
  {
    dogs: { cuteness: 4, amount: 9 },
    cats: { cuteness: 1.5, amount: 14 },
    date: '2018-06-15T23:43:32'
  },
  {
    dogs: { cuteness: 1, amount: 19 },
    cats: { cuteness: 5, amount: 17 },
    date: '2018-07-15T23:43:32'
  },
  {
    dogs: { cuteness: 2, amount: 6 },
    cats: { cuteness: 2.5, amount: 7 },
    date: '2018-08-15T23:43:32'
  }
];

const timeData = [
  { waitTime: 150, date: '2018-08-15T23:43:32' },
  { waitTime: 1500, date: '2018-09-15T23:43:32' },
  { waitTime: 500, date: '2018-10-15T23:43:32' },
  { waitTime: 980, date: '2018-11-15T23:43:32' }
];

storiesOf('Bar Chart', module)
  .add('Small', () => (
    <Chart data={data} width={200} height={100}>
      <Bar dataKey="organic" color="#000" />
    </Chart>
  ))
  .add('Axis', () => (
    <Chart data={data}>
      <YAxis tickFormatter={formatters.humanizeDuration} />
      <XAxis dataKey="date" tickFormatter={formatters.date()} />
      <Bar dataKey="sms" color={colors.cobaltBlue} />
    </Chart>
  ))
  .add('Tooltip', () => (
    <Chart data={data}>
      <YAxis />
      <XAxis dataKey="date" tickFormatter={formatters.date()} />
      <Tooltip
        content={
          <TooltipBody
            summaryTitle="Reviews"
            aggregationOptions={{
              type: 'total',
              dataKeys: ['organic', 'text']
            }}
          />
        }
      />
      <Bar name="Organic" dataKey="organic" color={colors.cobaltBlue} />
      <Bar name="Text" dataKey="text" color={colors.poppyRed} />
    </Chart>
  ))
  .add('Stacked', () => (
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
  ))
  .add('Multiple', () => (
    <Chart data={data}>
      <YAxis />
      <XAxis dataKey="date" tickFormatter={formatters.date()} />
      <Tooltip
        content={<TooltipBody summaryType="total" summaryTitle="Reviews" />}
      />
      <Bar name="Organic" dataKey="organic" color={colors.cobaltBlue} />
      <Bar name="Text" dataKey="text" color={colors.poppyRed} />
    </Chart>
  ));

storiesOf('Line Chart', module)
  .add('Small', () => (
    <Chart data={data} width={200} height={100}>
      <Line dataKey="organic" color="#000" />
    </Chart>
  ))
  .add('Axis', () => (
    <Chart data={data}>
      <YAxis tickFormatter={formatters.abbreviateNumber} />
      <XAxis dataKey="date" tickFormatter={formatters.date()} />
      <Line dataKey="sms" color={colors.cobaltBlue} />
    </Chart>
  ))
  .add('TooltipBodyTime', () => (
    <Chart data={data}>
      <YAxis tickFormatter={formatters.abbreviateTime} />
      <XAxis dataKey="date" tickFormatter={formatters.date()} />
      <Tooltip content={<TooltipBodyTime />} />
      <Line dataKey="sms" color={colors.armyGreen} />
    </Chart>
  ))
  .add('Multiple Lines', () => (
    <Chart data={data}>
      <YAxis />
      <XAxis dataKey="date" tickFormatter={formatters.date()} />
      <Tooltip
        content={<TooltipBody summaryType="total" summaryTitle="Reviews" />}
      />
      <Line
        name="THIS CAN BE ANTYHING"
        dataKey="organic"
        color={colors.cobaltBlue}
      />
      <Line name="SO CAN THIS" dataKey="text" color={colors.poppyRed} />
    </Chart>
  ));

storiesOf('Mixed Chart', module).add('Mixed', () => (
  <Chart data={data}>
    <YAxis />
    <XAxis dataKey="date" tickFormatter={formatters.date()} />
    <Bar name="Organic" dataKey="organic" color={colors.cobaltBlue} />
    <Tooltip
      content={
        <TooltipBody
          summaryTitle="Reviews"
          aggregationOptions={{
            type: 'total',
            dataKeys: ['organic', 'text']
          }}
        />
      }
    />
    <Line name="Text" dataKey="text" color={colors.poppyRed} />
  </Chart>
));

storiesOf('Report Card Summary', module)
  .add('Default', () => (
    <div style={{ width: '270px' }}>
      <ReportCard width="270px">
        <ReportSummaryTitle
          formatter={formatters.abbreviateNumber}
          dataKeys={['sms']}
          title="Inbound Leads"
          data={data}
          trendData={[prevData, currData]}
          aggregationOptions={{
            type: 'total',
            dataKeys: ['value']
          }}
        />
        <Chart data={data} height={100}>
          <SummaryLine connectNulls dataKey="sms" color={colors.cobaltBlue} />
        </Chart>
      </ReportCard>
    </div>
  ))
  .add('Average Trend', () => (
    <div style={{ width: '270px' }}>
      <ReportCard width="270px">
        <ReportSummaryTitle
          formatter={formatters.humanizeDuration}
          dataKeys={['sms']}
          title="Median Response Time"
          data={data}
          trendData={[currData, prevData]}
          aggregationOptions={{
            type: 'avg',
            dataKeys: ['value']
          }}
        />
        <Chart data={data} height={100}>
          <SummaryLine connectNulls dataKey="sms" color={colors.cobaltBlue} />
        </Chart>
      </ReportCard>
    </div>
  ))
  .add('Weighted Average Trend', () => (
    <div style={{ width: '270px' }}>
      <ReportCard width="270px">
        <ReportSummaryTitle
          formatter={formatters.roundToPlaces(1)}
          dataKeys={['sms']}
          title="Site Rating"
          data={weightedAvgData}
          trendData={[weightedAvgData, weightedAvgDataPrev]}
          aggregationOptions={{
            type: 'weightedAvg',
            dataKeys: ['dogs', 'cats'],
            options: { valueKey: 'cuteness', countKey: 'amount' }
          }}
        />
        <Chart data={weightedAvgData} height={100}>
          <SummaryLine
            connectNulls
            dataKey="dogs.cuteness"
            color={colors.cobaltBlue}
          />
        </Chart>
      </ReportCard>
    </div>
  ))
  .add('Prefer Downward Trend', () => (
    <div style={{ width: '270px' }}>
      <ReportCard>
        <ReportSummaryTitle
          formatter={formatters.humanizeDuration}
          dataKeys={['sms']}
          title="Median Response Time"
          data={data}
          preferDown
          trendData={[prevData, currData]}
          aggregationOptions={{
            type: 'avg',
            dataKeys: ['value']
          }}
        />
        <Chart data={data} height={100}>
          <SummaryLine connectNulls dataKey="sms" color={colors.cobaltBlue} />
        </Chart>
      </ReportCard>
    </div>
  ))
  .add('Loading', () => (
    <div style={{ width: '270px' }}>
      <ReportCard loading>
        <ReportSummaryTitle
          formatter={formatters.humanizeDuration}
          dataKeys={['sms']}
          title="Median Response Time"
          data={data}
          trendData={[prevData, currData]}
          aggregationOptions={{
            type: 'total',
            dataKeys: ['value']
          }}
        />
        <Chart data={data} height={100}>
          <SummaryLine connectNulls dataKey="sms" color={colors.cobaltBlue} />
        </Chart>
      </ReportCard>
    </div>
  ))
  .add('Long title', () => (
    <div style={{ width: '270px' }}>
      <ReportCard width="270px">
        <ReportSummaryTitle
          formatter={formatters.abbreviateNumber}
          dataKeys={['sms']}
          title="This title is very long, yes indeed"
          data={data}
          trendData={[prevData, currData]}
          aggregationOptions={{
            type: 'total',
            dataKeys: ['value']
          }}
        />
        <Chart data={data} height={100}>
          <SummaryLine connectNulls dataKey="sms" color={colors.cobaltBlue} />
        </Chart>
      </ReportCard>
    </div>
  ))
  .add('Responsive metric size', () => (
    <div>
      <WindowWidthMonitor />

      <div style={{ width: '270px' }}>
        <h3>This will shrink at 1000px:</h3>
        <ReportCard width="270px">
          <ReportSummaryTitle
            formatter={formatters.abbreviateNumber}
            dataKeys={['sms']}
            title="This title is very long, yes indeed"
            data={data}
            trendData={[prevData, currData]}
            aggregationOptions={{
              type: 'total',
              dataKeys: ['value']
            }}
            smallWidth={1000}
          />
          <Chart data={data} height={100}>
            <SummaryLine connectNulls dataKey="sms" color={colors.cobaltBlue} />
          </Chart>
        </ReportCard>
        <h3>This will not shrink:</h3>
        <ReportCard width="270px">
          <ReportSummaryTitle
            formatter={formatters.abbreviateNumber}
            dataKeys={['sms']}
            title="This title is very long, yes indeed"
            data={data}
            trendData={[prevData, currData]}
            aggregationOptions={{
              type: 'total',
              dataKeys: ['value']
            }}
          />
          <Chart data={data} height={100}>
            <SummaryLine connectNulls dataKey="sms" color={colors.cobaltBlue} />
          </Chart>
        </ReportCard>
      </div>
    </div>
  ));

storiesOf('Summary', module).add('WeightedAvg', () => (
  <Summary
    formatter={formatters.roundToPlaces(1)}
    data={weightedAvgData}
    aggregationOptions={{
      type: 'weightedAvg',
      dataKeys: ['dogs', 'cats'],
      options: { valueKey: 'cuteness', countKey: 'amount' }
    }}
    granularity="month"
    timeRange="lastYear"
  />
));

storiesOf('Report Card', module)
  .add('w/Chart,Title', () => (
    <ReportCard>
      <ReportTitle title="Total Reviews" data={data} />
      <Chart data={data}>
        <YAxis tickFormatter={formatters.abbreviateTime} />
        <XAxis dataKey="date" tickFormatter={formatters.date()} />
        <Line dataKey="sms" color={colors.cobaltBlue} />
      </Chart>
    </ReportCard>
  ))
  .add('w/Summary', () => (
    <ReportCard>
      <ReportTitle title="Total Reviews" data={data} />
      <Chart data={data}>
        <YAxis />
        <XAxis dataKey="date" tickFormatter={formatters.date()} />
        <Line dataKey="sms" color={colors.cobaltBlue} />
      </Chart>
      <Summary
        formatter={formatters.roundToPlaces(1)}
        data={data}
        aggregationOptions={{
          type: 'total',
          dataKeys: ['sms']
        }}
        granularity="month"
        timeRange="lastYear"
      />
    </ReportCard>
  ))
  .add('w/Legend (weightedAvg)', () => (
    <ReportCard>
      <ReportTitle title="Inbound Leads by Source" data={weightedAvgData} />
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
        data={weightedAvgData}
        aggregationOptions={{
          type: 'weightedAvg',
          dataKeys: ['cats', 'dogs'],
          options: { valueKey: 'cuteness', countKey: 'amount' }
        }}
        granularity="month"
        timeRange="lastYear"
      />
      <Legend
        formatter={formatters.roundToPlaces(1)}
        data={weightedAvgData}
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
  .add('w/Legend (no agg)', () => (
    <ReportCard>
      <ReportTitle title="Inbound Leads by Source" data={weightedAvgData} />
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
        data={weightedAvgData}
        aggregationOptions={{
          type: 'weightedAvg',
          dataKeys: ['cats', 'dogs'],
          options: { valueKey: 'cuteness', countKey: 'amount' }
        }}
        granularity="month"
        timeRange="lastYear"
      />
      <Legend
        data={weightedAvgData}
        displayOptions={[
          { name: 'Dogs', dataKey: 'dogs', color: colors.cobaltBlue },
          { name: 'Cats', dataKey: 'cats', color: colors.poppyRed }
        ]}
      />
    </ReportCard>
  ))
  .add('w/Legend (multiple bars)', () => (
    <ReportCard>
      <ReportTitle title="Inbound Leads by Source" data={data} />
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
        data={data}
        aggregationOptions={{
          type: 'avg',
          dataKeys: ['organic', 'text']
        }}
        granularity="month"
        timeRange="lastYear"
      />
      <Legend
        data={weightedAvgData}
        displayOptions={[
          { name: 'Organic', dataKey: 'organic', color: colors.cobaltBlue },
          { name: 'Text', dataKey: 'text', color: colors.poppyRed }
        ]}
      />
    </ReportCard>
  ))
  .add('w/Legend (stacked bars)', () => (
    <ReportCard>
      <ReportTitle title="Inbound Leads by Source" data={data} />
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
        data={data}
        aggregationOptions={{
          type: 'avg',
          dataKeys: ['organic', 'text']
        }}
        granularity="month"
        timeRange="lastYear"
      />
      <Legend
        data={weightedAvgData}
        displayOptions={[
          { name: 'Organic', dataKey: 'organic', color: colors.cobaltBlue },
          { name: 'Text', dataKey: 'text', color: colors.poppyRed }
        ]}
      />
    </ReportCard>
  ))
  .add('w/Tooltip', () => (
    <ReportCard>
      <ReportTitle title="Cats vs Dogs" data={weightedAvgData} />
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
        data={weightedAvgData}
        aggregationOptions={{
          type: 'weightedAvg',
          options: { valueKey: 'cuteness', countKey: 'amount' },
          dataKeys: ['dogs', 'cats']
        }}
        granularity="month"
        timeRange="lastYear"
      />
    </ReportCard>
  ))
  .add('w/TooltipBody (single key)', () => (
    <ReportCard>
      <ReportTitle title="Single Value Tooltip" data={data} />
      <Chart data={data}>
        <YAxis />
        <XAxis dataKey="date" tickFormatter={formatters.date()} />
        <Line dataKey="sms" name="SMS" color={colors.poppyRed} />
        <Tooltip content={<TooltipBody summaryTitle="Minutes" />} />
      </Chart>
      <Summary
        formatter={formatters.commatize}
        data={data}
        aggregationOptions={{
          type: 'total',
          dataKeys: ['sms']
        }}
        granularity="month"
        timeRange="lastYear"
      />
    </ReportCard>
  ))
  .add('w/TooltipBodyTime', () => (
    <ReportCard>
      <ReportTitle title="Wait Time" data={timeData} />
      <Chart data={timeData}>
        <YAxis />
        <XAxis dataKey="date" tickFormatter={formatters.date()} />
        <Line dataKey="waitTime" name="Wait Time" color={colors.poppyRed} />
        <Tooltip content={<TooltipBodyTime />} />
      </Chart>
      <Summary
        formatter={formatters.commatize}
        data={timeData}
        aggregationOptions={{
          type: 'total',
          dataKeys: ['waitTime']
        }}
        granularity="month"
        timeRange="lastYear"
      />
    </ReportCard>
  ))
  .add('Loading', () => (
    <ReportCard loading>
      <ReportTitle title="Total Reviews" data={data} />
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
        data={data}
        aggregationOptions={{
          type: 'total',
          dataKeys: ['text', 'organic']
        }}
        granularity="month"
        timeRange="lastYear"
      />
      <Legend
        data={data}
        displayOptions={[
          { name: 'Organic', dataKey: 'organic', color: colors.cobaltBlue },
          { name: 'Text', dataKey: 'text', color: colors.poppyRed }
        ]}
      />
    </ReportCard>
  ))

  .add('w/Granularity', () => (
    <ReportCard>
      <ReportTitle title="Total Reviews" data={data} />
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
        data={data}
        aggregationOptions={{
          type: 'total',
          dataKeys: ['text', 'organic']
        }}
        granularity="month"
        timeRange="custom"
      />
      <Legend
        formatter={formatters.roundToPlaces(1)}
        data={data}
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
        data={[]}
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

storiesOf('Granularity Dropdown', module)
  .add('Last Year', () => (
    <Granularity
      timeRange="lastYear"
      onChange={res => {
        console.log(`You picked ${res}`);
      }}
    />
  ))
  .add('Last Week', () => (
    <Granularity
      timeRange="lastWeek"
      onChange={res => {
        console.log(`You picked ${res}`);
      }}
    />
  ))
  .add('Restricted Options', () => (
    <Granularity
      timeRange="lastWeek"
      options={['month', 'week', 'day']}
      onChange={res => {
        console.log(`You picked ${res}`);
      }}
    />
  ));

storiesOf('colors', module).add('default', () => {
  const colorsMap = Object.keys(colors).map(color => ({
    value: colors[color],
    name: color
  }));
  const podiumColors = colorsMap.filter(
    color => typeof color.value === 'string'
  );
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {podiumColors.map(color => {
        return <Palette color={color.value} name={color.name} />;
      })}
    </div>
  );
});

storiesOf('formatters', module)
  .add('date', () => (
    <div>
      <div>
        formatters.date('hour')
        <div>-></div>
        {formatters.date('hour')('2018-01-15T23:43:32')}
      </div>
      <br />
      <div>
        formatters.date('day')
        <div>-></div>
        {formatters.date('day')('2018-01-15T23:43:32')}
      </div>
      <br />
      <div>
        formatters.date('week')
        <div>-></div>
        {formatters.date('week')('2018-01-15T23:43:32')}
      </div>
      <br />
      <div>
        formatters.date('month')
        <div>-></div>
        {formatters.date('month')('2018-01-15T23:43:32')}
      </div>
      <br />
      <div>
        formatters.date('year')
        <div>-></div>
        {formatters.date('year')('2018-01-15T23:43:32')}
      </div>
    </div>
  ))
  .add('capitalize', () => (
    <div>
      formatters.capitalize("podium")
      <div>-></div>
      {formatters.capitalize('podium')}
    </div>
  ))
  .add('abbreviateNumber', () => (
    <div>
      formatters.abbreviateNumber(100000000)
      <div>-></div>
      {formatters.abbreviateNumber(100000000)}
    </div>
  ))
  .add('humanizeDuration', () => (
    <div>
      formatters.humanizeDuration(86400)
      <div>-></div>
      {formatters.humanizeDuration(86400)}
    </div>
  ))
  .add('commatize', () => (
    <div>
      formatters.commatize("")
      <div>-></div>
      {formatters.commatize(1000000000)}
    </div>
  ));
