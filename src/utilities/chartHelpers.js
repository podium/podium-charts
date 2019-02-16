import React from 'react';
import groupBy from 'lodash.groupby';
import {
  BarChart as RechartsBarChart,
  ComposedChart as RechartsComposedChart,
  LineChart as RechartsLineChart
} from 'recharts';
import moment from 'moment';
import { Line, Bar } from '../components/skeletonComponents';
import { colors } from '@podiumhq/podium-ui';

const DEFAULT_DESELECTED_COLOR = colors.mystic;

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

export const fullDate = (date, monthFormat = 'MMMM') => {
  const momentDate = moment.utc(date);
  if (momentDate.isValid()) return momentDate.format(`${monthFormat} D, YYYY`);
  return date;
};

export const renderRangeLabel = (data, monthFormat = 'MMMM') => {
  if (!data || data.length === 0) return null;
  const start = data[0]['date'];
  const end = data[data.length - 1]['date'];
  return `${fullDate(start, monthFormat)} - ${fullDate(end, monthFormat)}`;
};

export const getDeselectedColor = color => {
  if (color.match(/^#[0-9a-f]{6}$/i)) {
    const r = parseInt(color.substring(1, 3), 16);
    const g = parseInt(color.substring(3, 5), 16);
    const b = parseInt(color.substring(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, 0.3)`;
  } else {
    return DEFAULT_DESELECTED_COLOR;
  }
};
