import React from 'react';
import { storiesOf } from '@storybook/react';
import formatters from './formatters';
import { colors } from 'podium-ui';
import {
  Chart,
  XAxis,
  YAxis,
  Bar,
  Line,
  Legend,
  Summary,
  Tooltip,
  TooltipBodyPrimary
} from './';

const data = [
  { sms: 200, text: 1, organic: 2, date: '2018-01-15T23:43:32' },
  { sms: 3000, text: 5, organic: 3, date: '2018-02-15T23:43:32' },
  { sms: 500, text: 3, date: '2018-03-15T23:43:32' },
  { sms: 200, text: 0, organic: 5, date: '2018-04-15T23:43:32' },
  { sms: 300, text: 1, organic: 8, date: '2018-05-15T23:43:32' },
  { sms: 4000, text: 2.33, organic: 10, date: '2018-06-15T23:43:32' },
  { sms: 400, text: 2.33, organic: 9, date: '2018-07-15T23:43:32' },
  { sms: 400, text: 2.33, organic: 8, date: '2018-08-15T23:43:32' },
  { sms: 300, text: 2.33, organic: 3, date: '2018-09-15T23:43:32' },
  { sms: 400, text: 2.33, organic: 3, date: '2018-10-15T23:43:32' },
  { sms: 100, text: 2.33, organic: 8, date: '2018-11-15T23:43:32' },
  { sms: 400, text: 2.33, organic: 20, date: '2018-12-15T23:43:32' }
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
      <XAxis dataKey="date" tickFormatter={formatters.date} />
      <Bar dataKey="sms" color={colors.cobaltBlue} />
    </Chart>
  ))
  .add('Tooltip', () => (
    <Chart data={data}>
      <YAxis />
      <XAxis dataKey="date" tickFormatter={formatters.date} />
      <Tooltip
        content={
          <TooltipBodyPrimary summaryType="total" summaryTitle="Reviews" />
        }
      />
      <Bar dataKey="organic" color={colors.cobaltBlue} />
    </Chart>
  ))
  .add('Stacked', () => (
    <Chart data={data}>
      <YAxis />
      <XAxis dataKey="date" tickFormatter={formatters.date} />
      <Tooltip
        content={
          <TooltipBodyPrimary summaryType="total" summaryTitle="Reviews" />
        }
      />
      <Bar stackId="1" dataKey="organic" color={colors.cobaltBlue} />
      <Bar stackId="1" dataKey="text" color={colors.poppyRed} />
    </Chart>
  ))
  .add('Multiple', () => (
    <Chart data={data}>
      <YAxis />
      <XAxis dataKey="date" tickFormatter={formatters.date} />
      <Tooltip
        content={
          <TooltipBodyPrimary summaryType="total" summaryTitle="Reviews" />
        }
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
      <XAxis dataKey="date" tickFormatter={formatters.date} />
      <Line dataKey="sms" color={colors.cobaltBlue} />
    </Chart>
  ))
  .add('Tooltip', () => (
    <Chart data={data}>
      <YAxis />
      <XAxis dataKey="date" tickFormatter={formatters.date} />
      <Tooltip
        content={
          <TooltipBodyPrimary summaryType="total" summaryTitle="Reviews" />
        }
      />
      <Line dataKey="text" color={colors.armyGreen} />
    </Chart>
  ))
  .add('Multiple Lines', () => (
    <Chart data={data}>
      <YAxis />
      <XAxis dataKey="date" tickFormatter={formatters.date} />
      <Tooltip
        content={
          <TooltipBodyPrimary summaryType="total" summaryTitle="Reviews" />
        }
      />
      <Line dataKey="organic" color={colors.cobaltBlue} />
      <Line dataKey="text" color={colors.poppyRed} />
    </Chart>
  ));

storiesOf('Mixed Chart', module).add('Mixed', () => (
  <Chart data={data}>
    <YAxis />
    <XAxis dataKey="date" tickFormatter={formatters.date} />
    <Tooltip
      content={
        <TooltipBodyPrimary summaryType="total" summaryTitle="Reviews" />
      }
    />
    <Bar dataKey="organic" color={colors.cobaltBlue} />
    <Line dataKey="text" color={colors.poppyRed} />
  </Chart>
));

storiesOf('Tooltip', module).add(
  'Tooltip Primary',
  () => (
    <div style={{ width: 100 }}>
      <TooltipBodyPrimary
        summaryType="total"
        summaryTitle="Reviews"
        payload={[{ value: 1, color: colors.cobaltBlue, dataKey: 'google' }]}
      />
    </div>
  ),
  { info: { excludedPropTypes: ['payload'] } }
);

storiesOf('Summary', module).add('Default', () => (
  <Summary data={data} aggType="avg" />
));

storiesOf('Legend', module).add('Default', () => (
  <Legend
    data={data}
    aggType="avg"
    config={{ webchat: { color: colors.white, label: 'Web Chat' } }}
  />
));

storiesOf('formatters', module)
  .add('date', () => (
    <div>
      formatters.date("2018-01-15T23:43:32")
      <div>-></div>
      {formatters.date('2018-01-15T23:43:32')}
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
