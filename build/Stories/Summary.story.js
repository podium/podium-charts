import React from 'react';
import { storiesOf } from '@storybook/react';
import formatters from '../Charts/utils/formatters';
import { Summary } from '../';
import { weightedAvgData } from './storyHelpers';
storiesOf('Summary', module).add('WeightedAvg', function () {
  return React.createElement(Summary, {
    formatter: formatters.roundToPlaces(1),
    data: weightedAvgData,
    aggregationOptions: {
      type: 'weightedAvg',
      dataKeys: ['dogs', 'cats'],
      options: {
        valueKey: 'cuteness',
        countKey: 'amount'
      }
    },
    overallSummaryMetric: 3.5,
    granularity: "month",
    timeRange: "lastYear"
  });
});