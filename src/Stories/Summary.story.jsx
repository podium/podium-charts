import React from 'react';
import { storiesOf } from '@storybook/react';
import formatters from '../Charts/utils/formatters';
import { Summary } from '../';
import { weightedAvgData } from './storyHelpers';

storiesOf('Summary', module)
  .add('WeightedAvg', () => (
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
      overallSummaryMetric={3.5}
    />
  ))
  .add('With To Date', () => (
    <Summary
      formatter={formatters.roundToPlaces(1)}
      data={weightedAvgData}
      aggregationOptions={{
        type: 'weightedAvg',
        dataKeys: ['dogs', 'cats'],
        options: { valueKey: 'cuteness', countKey: 'amount' }
      }}
      overallSummaryMetric={3.5}
      granularity="month"
      timeRange="yearToDate"
    />
  ))
  .add('Without To Date', () => (
    <Summary
      formatter={formatters.roundToPlaces(1)}
      data={weightedAvgData}
      aggregationOptions={{
        type: 'weightedAvg',
        dataKeys: ['dogs', 'cats'],
        options: { valueKey: 'cuteness', countKey: 'amount' }
      }}
      dateEnd="2019-08-10"
      granularity="custom"
      timeRange="lastYear"
    />
  ));
