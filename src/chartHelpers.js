import React from 'react';
import groupBy from 'lodash.groupby';
import {
  BarChart as RechartsBarChart,
  ComposedChart as RechartsComposedChart,
  LineChart as RechartsLineChart
} from 'recharts';

export function detectChartType(children) {
  const filteredChildren = filterChildren(children);
  const allowedTypes = ['Line', 'Bar'];
  let childrenTypes = [];
  React.Children.forEach(filteredChildren, child => {
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
  const filteredChildren = filterChildren(children);
  let stackPosition = [];
  React.Children.forEach(filteredChildren, child => {
    if (child.type.name === 'Bar' && child.props.stackId) {
      stackPosition = stackPosition.concat([
        {
          stackId: child.props.stackId,
          dataKey: child.props.dataKey
        }
      ]);
    }
  });
  return groupBy(stackPosition, 'stackId');
}

export function singleLineChart(children) {
  const filteredChildren = filterChildren(children);
  const graphElements = ['Line', 'Bar'];
  let numberOfLines = 0;
  let lineProps = {};
  React.Children.forEach(filteredChildren, child => {
    if (child.type.name === 'Line') lineProps = child.props;
    if (graphElements.includes(child.type.name)) numberOfLines += 1;
  });
  return numberOfLines === 1 ? lineProps : false;
}

export const filterChildren = children => {
  return React.Children.toArray(children).filter(child => child);
};
