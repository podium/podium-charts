import React from 'react';
import { storiesOf } from '@storybook/react';
import formatters from '../utils/formatters';
import colors from '../Colors';
import {
  Chart,
  XAxis,
  YAxis,
  Line,
  Tooltip,
  TooltipBody,
  TooltipBodyTime
} from '../';
import { data, reviewsData } from './storyHelpers';

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
  ))
  .add('Customized Axis, Tooltip', () => (
    <Chart data={reviewsData}>
      <YAxis
        tickFormatter={formatters.abbreviateNumber}
        ticks={['0', '1', '2', '3', '4', '5']}
        domain={[0, 5]}
      />
      <XAxis dataKey="date" tickFormatter={formatters.date()} />
      <Tooltip
        content={
          <TooltipBody
            formatter={formatters.roundToPlaces(1)}
            aggregationOptions={{
              type: 'weightedAvg',
              dataKeys: ['facebook', 'google', 'yelp'],
              options: { valueKey: 'reviewRating', countKey: 'reviewCount' }
            }}
            summaryTitle="Avg Star Rating"
          />
        }
      />
      <Line
        name="Facebook"
        dataKey="facebook.reviewRating"
        color={colors.siteColors.facebook}
        connectNulls
      />
      <Line
        name="Google"
        dataKey="google.reviewRating"
        color={colors.siteColors.google}
        connectNulls
      />
      <Line
        name="Yelp"
        dataKey="yelp.reviewRating"
        color={colors.siteColors.yelp}
        connectNulls
      />
    </Chart>
  ));
