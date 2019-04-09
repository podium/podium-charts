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

export const renderRangeLabel = (
  timeRange = 'thisMonth',
  dateStart,
  dateEnd
) => {
  // return given dateStart and dateEnd
  if (timeRange === 'custom' && dateStart && dateEnd) {
    return `${fullDate(dateStart)} - ${fullDate(dateEnd)}`;
  }
  // calculate range label using timeRange
  const now = moment.utc();
  const timeRangeMap = {
    today: [now, now],
    yesterday: [now.clone().subtract(1, 'day'), now.clone().subtract(1, 'day')],
    thisWeek: [
      now
        .clone()
        .startOf('week')
        .add(1, 'day'),
      now
    ],
    weekToDate: [
      now
        .clone()
        .startOf('week')
        .add(1, 'day'),
      now
    ],
    thisMonth: [now.clone().startOf('month'), now],
    monthToDate: [now.clone().startOf('month'), now],
    thisYear: [now.clone().startOf('year'), now],
    yearToDate: [now.clone().startOf('year'), now],
    lastWeek: [
      now
        .clone()
        .subtract(1, 'week')
        .startOf('week')
        .add(1, 'day'),
      now
        .clone()
        .subtract(1, 'week')
        .endOf('week')
        .add(1, 'day')
    ],
    lastMonth: [
      now
        .clone()
        .subtract(1, 'month')
        .startOf('month'),
      now
        .clone()
        .subtract(1, 'month')
        .endOf('month')
    ],
    last12Months: [
      now
        .clone()
        .subtract(12, 'month')
        .startOf('month'),
      now.clone().startOf('month')
    ],
    lastYear: [
      now
        .clone()
        .subtract(1, 'year')
        .startOf('year'),
      now
        .clone()
        .subtract(1, 'year')
        .endOf('year')
    ]
  };

  console.log(timeRangeMap[timeRange]);
  return `${timeRangeMap[timeRange].map(date => fullDate(date)).join(' - ')}`;
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
