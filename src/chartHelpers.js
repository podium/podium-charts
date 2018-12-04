import React from 'react';
import _ from 'lodash';
import { fullDate } from './formatters';

import {
  BarChart as RechartsBarChart,
  ComposedChart as RechartsComposedChart,
  LineChart as RechartsLineChart
} from 'recharts';

export function detectChartType(children) {
  const allowedTypes = ['Line', 'Bar'];
  let childrenTypes = [];
  React.Children.forEach(children, child => {
    if (
      !childrenTypes.includes(child.type.name) &&
      allowedTypes.includes(child.type.name)
    ) {
      childrenTypes = [...childrenTypes, child.type.name];
    }
  });
  if (childrenTypes.length > 1) return RechartsComposedChart;
  if (childrenTypes[0] === 'Bar') return RechartsBarChart;
  if (childrenTypes[0] === 'Line') return RechartsLineChart;
  return RechartsComposedChart;
}

export function getStackPositions(children) {
  let stackPosition = [];
  React.Children.forEach(children, child => {
    if (child.type.name === 'Bar' && child.props.stackId) {
      stackPosition = stackPosition.concat([
        {
          stackId: child.props.stackId,
          dataKey: child.props.dataKey
        }
      ]);
    }
  });
  return _.groupBy(stackPosition, 'stackId');
}

export function singleLineChart(children) {
  const graphElements = ['Line', 'Bar'];
  let numberOfLines = 0;
  let lineProps = {};
  React.Children.forEach(children, child => {
    if (child.type.name === 'Line') lineProps = child.props;
    if (graphElements.includes(child.type.name)) numberOfLines += 1;
  });
  return numberOfLines === 1 ? lineProps : false;
}

export function extractRangeLabel(data, rangeDataKey) {
  const start = data[0][rangeDataKey];
  const end = data[data.length - 1][rangeDataKey];
  return `${fullDate(start)} - ${fullDate(end)}`;
}
