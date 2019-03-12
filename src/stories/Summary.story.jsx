import React from 'react';
import { storiesOf } from '@storybook/react';
import formatters from '../utils/formatters';
import { Summary } from '../';
import { weightedAvgData } from './storyHelpers';

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
