import React from 'react';
import groupBy from 'lodash.groupby';
import {
  BarChart as RechartsBarChart,
  ComposedChart as RechartsComposedChart,
  LineChart as RechartsLineChart
} from 'recharts';
import moment from 'moment';
import { Line, Bar } from '../skeletonComponents';
import { colors } from '@podiumhq/podium-ui';
import dateHelpers from './dateHelpers';

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

export const filterChildren = children => {
  return React.Children.toArray(children).filter(child => child);
};

export const fullDate = (date, monthFormat = 'MMMM') => {
  const momentDate = moment.utc(date);
  if (momentDate.isValid()) return momentDate.format(`${monthFormat} D, YYYY`);
  return date;
};

export const renderRangeLabel = (
  timeRange = 'thisMonth',
  dateStart,
  dateEnd
) => {
  if (timeRange === 'custom' && dateStart && dateEnd) {
    return `${fullDate(dateStart)} - ${fullDate(dateEnd)}`;
  }

  const [start, end] = dateHelpers[timeRange]();
  return `${fullDate(start)} - ${fullDate(end)}`;
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
