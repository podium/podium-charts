import React from 'react';
import { storiesOf } from '@storybook/react';
import formatters from './formatters';
import { colors } from '@podiumhq/podium-ui';
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

const data = [
  { sms: 200, text: 1, organic: 2, date: '2018-01-15T23:43:32' },
  { sms: 30000, text: 5, organic: 0, date: '2018-02-15T23:43:32' },
  { sms: 500, text: 3, date: '2018-03-15T23:43:32' },
  { sms: 200, text: 0, organic: 3, date: '2018-04-15T23:43:32' },
  { sms: 300, text: 1, organic: 4, date: '2018-05-15T23:43:32' },
  { sms: 4000, text: 2.33, organic: 8, date: '2018-06-15T23:43:32' },
  { sms: 400, text: 2.33, organic: 9, date: '2018-07-15T23:43:32' },
  { sms: 200, text: 2.33, organic: 15, date: '2018-08-15T23:43:32' },
  { sms: 100, text: 5, organic: 13, date: '2018-09-15T23:43:32' },
  { sms: null, text: null, organic: null, date: '2018-10-15T23:43:32' },
  { sms: 100, text: 2.33, organic: 0, date: '2018-11-15T23:43:32' },
  { sms: 400, text: 2.33, organic: 0, date: '2018-12-15T23:43:32' }
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
        content={<TooltipBody summaryType="total" summaryTitle="Reviews" />}
      />
      <Bar dataKey="organic" color={colors.cobaltBlue} />
      <Bar dataKey="text" color={colors.poppyRed} />
    </Chart>
  ))
  .add('Custom Named Data', () => (
    <Chart data={data}>
      <YAxis />
      <XAxis dataKey="date" tickFormatter={formatters.date()} />
      <Tooltip
        content={<TooltipBody summaryType="total" summaryTitle="Reviews" />}
      />
      <Bar name="My Custom Name!" dataKey="organic" color={colors.cobaltBlue} />
    </Chart>
  ))
  .add('Stacked', () => (
    <Chart data={data}>
      <YAxis />
      <XAxis dataKey="date" tickFormatter={formatters.date()} />
      <Tooltip
        content={<TooltipBody summaryType="total" summaryTitle="Reviews" />}
      />
      <Bar stackId="1" dataKey="organic" color={colors.cobaltBlue} />
      <Bar stackId="1" dataKey="text" color={colors.poppyRed} />
    </Chart>
  ))
  .add('Multiple', () => (
    <Chart data={data}>
      <YAxis />
      <XAxis dataKey="date" tickFormatter={formatters.date()} />
      <Tooltip
        content={<TooltipBody summaryType="total" summaryTitle="Reviews" />}
      />
      <Bar dataKey="organic" color={colors.cobaltBlue} />
      <Bar dataKey="text" color={colors.poppyRed} />
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
  .add('Custom Named Data', () => (
    <Chart data={data}>
      <YAxis />
      <XAxis dataKey="date" tickFormatter={formatters.date()} />
      <Tooltip
        content={<TooltipBody summaryType="total" summaryTitle="Reviews" />}
      />
      <Line
        name="My Custom Name That Is Super Long!"
        dataKey="text"
        color={colors.cobaltBlue}
      />
    </Chart>
  ))
  .add('Multiple Lines', () => (
    <Chart data={data}>
      <YAxis />
      <XAxis dataKey="date" tickFormatter={formatters.date()} />
      <Tooltip
        content={<TooltipBody summaryType="total" summaryTitle="Reviews" />}
      />
      <Line dataKey="organic" color={colors.cobaltBlue} />
      <Line dataKey="text" color={colors.poppyRed} />
    </Chart>
  ));

storiesOf('Mixed Chart', module).add('Mixed', () => (
  <Chart data={data}>
    <YAxis />
    <XAxis dataKey="date" tickFormatter={formatters.date()} />
    <Bar dataKey="organic" color={colors.cobaltBlue} />
    <Tooltip
      content={<TooltipBody summaryType="total" summaryTitle="Reviews" />}
    />
    <Line dataKey="text" color={colors.poppyRed} />
  </Chart>
));

storiesOf('Tooltip', module)
  .add(
    'TooltipBody',
    () => (
      <div style={{ width: 100 }}>
        <TooltipBody
          summaryType="total"
          summaryTitle="Reviews"
          payload={[
            { value: 1, color: colors.cobaltBlue, dataKey: 'google' },
            { value: 2, color: colors.poppyRed, dataKey: 'jooble' }
          ]}
        />
      </div>
    ),
    { info: { excludedPropTypes: ['payload'] } }
  )
  .add(
    'TooltipBodyTime',
    () => (
      <div style={{ width: 100 }}>
        <TooltipBodyTime
          payload={[
            { value: 6000, color: colors.cobaltBlue, dataKey: 'google' },
            { value: 80000, color: colors.poppyRed, dataKey: 'jooble' }
          ]}
        />
      </div>
    ),
    { info: { excludedPropTypes: ['payload'] } }
  );

storiesOf('Report Card Summary', module).add('default', () => (
  <ReportCard width="270px">
    <ReportSummaryTitle
      formatter={formatters.humanizeDuration}
      summaryType="total"
      dataKeys={['sms']}
      title="Median Response Time"
      data={data}
    />
    <Chart data={data} height={100}>
      <SummaryLine connectNulls dataKey="sms" color={colors.cobaltBlue} />
    </Chart>
  </ReportCard>
));

storiesOf('Report Card', module)
  .add('w/Chart,Title', () => (
    <ReportCard>
      <ReportTitle title="Total Reviews" data={data} />
      <Chart data={data}>
        <YAxis tickFormatter={formatters.abbreviateTime} />
        <XAxis dataKey="date" tickFormatter={formatters.date()} />
        <Line dataKey="sms" color={colors.cobaltBlue} />
        <Tooltip content={<TooltipBodyTime />} />
      </Chart>
    </ReportCard>
  ))
  .add('w/Summary', () => (
    <ReportCard>
      <ReportTitle title="Total Reviews" data={data} />
      <Chart data={data}>
        <YAxis tickFormatter={formatters.abbreviateTime} />
        <XAxis dataKey="date" tickFormatter={formatters.date()} />
        <Line dataKey="sms" color={colors.cobaltBlue} />
        <Tooltip content={<TooltipBodyTime />} />
      </Chart>
      <Summary
        formatter={formatters.roundToPlaces(1)}
        data={data}
        summaryType="total"
        dataKeys={['text', 'organic']}
        granularity="week"
      />
    </ReportCard>
  ))
  .add('w/Legend', () => (
    <ReportCard>
      <ReportTitle title="Total Reviews" data={data} />
      <Chart data={data}>
        <YAxis tickFormatter={formatters.abbreviateTime} />
        <XAxis dataKey="date" tickFormatter={formatters.date()} />
        <Line dataKey="sms" color={colors.cobaltBlue} />
        <Tooltip content={<TooltipBodyTime />} />
      </Chart>
      <Summary
        formatter={formatters.roundToPlaces(1)}
        data={data}
        summaryType="total"
        dataKeys={['text', 'organic']}
        granularity="week"
      />
      <Legend
        data={data}
        summaryType="total"
        config={[
          { dataKey: 'organic', color: colors.cobaltBlue },
          { dataKey: 'text', color: colors.poppyRed }
        ]}
      />
    </ReportCard>
  ))
  .add('w/Granularity', () => (
    <ReportCard>
      <ReportTitle title="Total Reviews" data={data} />
      <Granularity
        timeRange="monthToDate"
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
        summaryType="total"
        dataKeys={['text', 'organic']}
        granularity="week"
      />
      <Legend
        data={data}
        summaryType="total"
        config={[
          { dataKey: 'organic', color: colors.cobaltBlue },
          { dataKey: 'text', color: colors.poppyRed }
        ]}
      />
    </ReportCard>
  ));

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
  ));
