import React from 'react';
import { storiesOf } from '@storybook/react';
import formatters from '../Charts/utils/formatters';
import colors from '../Colors';
import { Chart, XAxis, YAxis, Bar, Tooltip, TooltipBody } from '../';
import { data } from './storyHelpers';

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
  .add('Tooltip, legend disabled', () => (
    <Chart data={data}>
      <YAxis />
      <XAxis dataKey="date" tickFormatter={formatters.date()} />
      <Tooltip
        content={
          <TooltipBody
            summaryTitle="Reviews"
            showLegend={false}
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
