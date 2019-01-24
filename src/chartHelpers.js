import React from 'react';
import groupBy from 'lodash.groupby';
import {
  BarChart as RechartsBarChart,
  ComposedChart as RechartsComposedChart,
  LineChart as RechartsLineChart
} from 'recharts';
import moment from 'moment';
import { Line, Bar } from './skeletonComponents';

export function detectChartType(children) {
  const filteredChildren = filterChildren(children);
  const allowedTypes = new Set([Line, Bar]);
  let childrenTypes = [];
  React.Children.forEach(filteredChildren, child => {
    if (!childrenTypes.includes(child.type) && allowedTypes.has(child.type)) {
      childrenTypes = [...childrenTypes, child.type];
    }
  });
  if (childrenTypes.length > 1) return RechartsComposedChart;
  if (childrenTypes[0] === Bar) return RechartsBarChart;
  if (childrenTypes[0] === Line) return RechartsLineChart;
  return RechartsComposedChart;
}

export function getStackPositions(children) {
  const filteredChildren = filterChildren(children);
  let stackPosition = [];
  React.Children.forEach(filteredChildren, child => {
    if (child.type === Bar && child.props.stackId) {
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
  const graphElements = new Set([Line, Bar]);
  let numberOfLines = 0;
  let lineProps = {};
  React.Children.forEach(filteredChildren, child => {
    if (child.type === Line) lineProps = child.props;
    if (graphElements.has(child.type)) numberOfLines += 1;
  });
  return numberOfLines === 1 ? lineProps : false;
}

export const filterChildren = children => {
  return React.Children.toArray(children).filter(child => child);
};

const fullDate = (date, monthFormat) => {
  const momentDate = moment.utc(date);
  if (momentDate.isValid()) return momentDate.format(`${monthFormat} D, YYYY`);
  return date;
};

export const renderRangeLabel = (data, monthFormat = 'MMMM', granularity) => {
  if (!data || data.length === 0) return `Last ${granularity}`;
  const start = data[0]['date'];
  const end = data[data.length - 1]['date'];
  return `${fullDate(start, monthFormat)} - ${fullDate(end, monthFormat)}`;
};
