import React from 'react';
import { storiesOf } from '@storybook/react';
import formatters from '../charts/utils/formatters';
import colors from '../Colors';
import { Chart, XAxis, YAxis, Bar, Line, Tooltip, TooltipBody } from '../';
import { data } from './storyHelpers';

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
