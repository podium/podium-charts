function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

import React from 'react';
import groupBy from 'lodash.groupby';
import { BarChart as RechartsBarChart, ComposedChart as RechartsComposedChart, LineChart as RechartsLineChart } from 'recharts';
import moment from 'moment';
import { Line, Bar } from '../skeletonComponents';
import { colors } from '@podiumhq/podium-ui';
var DEFAULT_DESELECTED_COLOR = colors.mystic;
export function detectChartType(children) {
  var filteredChildren = filterChildren(children);
  var allowedTypes = new Set([Line, Bar]);
  var childrenTypes = [];
  React.Children.forEach(filteredChildren, function (child) {
    if (!childrenTypes.includes(child.type) && allowedTypes.has(child.type)) {
      childrenTypes = [].concat(_toConsumableArray(childrenTypes), [child.type]);
    }
  });
  if (childrenTypes.length > 1) return RechartsComposedChart;
  if (childrenTypes[0] === Bar) return RechartsBarChart;
  if (childrenTypes[0] === Line) return RechartsLineChart;
  return RechartsComposedChart;
}
export function getStackPositions(children) {
  var filteredChildren = filterChildren(children);
  var stackPosition = [];
  React.Children.forEach(filteredChildren, function (child) {
    if (child.type === Bar && child.props.stackId) {
      stackPosition = stackPosition.concat([{
        stackId: child.props.stackId,
        dataKey: child.props.dataKey
      }]);
    }
  });
  return groupBy(stackPosition, 'stackId');
}
export function singleLineChart(children) {
  var filteredChildren = filterChildren(children);
  var graphElements = new Set([Line, Bar]);
  var numberOfLines = 0;
  var lineProps = {};
  React.Children.forEach(filteredChildren, function (child) {
    if (child.type === Line) lineProps = child.props;
    if (graphElements.has(child.type)) numberOfLines += 1;
  });
  return numberOfLines === 1 ? lineProps : false;
}
export var filterChildren = function filterChildren(children) {
  return React.Children.toArray(children).filter(function (child) {
    return child;
  });
};
export var fullDate = function fullDate(date) {
  var monthFormat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'MMMM';
  var momentDate = moment.utc(date);
  if (momentDate.isValid()) return momentDate.format("".concat(monthFormat, " D, YYYY"));
  return date;
};
export var renderRangeLabel = function renderRangeLabel() {
  var timeRange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'thisMonth';
  var dateStart = arguments.length > 1 ? arguments[1] : undefined;
  var dateEnd = arguments.length > 2 ? arguments[2] : undefined;

  // return given dateStart and dateEnd
  if (timeRange === 'custom' && dateStart && dateEnd) {
    return "".concat(fullDate(dateStart), " - ").concat(fullDate(dateEnd));
  } // calculate range label using timeRange


  var now = moment.utc();
  var timeRangeMap = {
    today: [now, now],
    yesterday: [now.clone().subtract(1, 'day'), now.clone().subtract(1, 'day')],
    thisWeek: [now.clone().startOf('week').add(1, 'day'), now],
    weekToDate: [now.clone().startOf('week').add(1, 'day'), now],
    thisMonth: [now.clone().startOf('month'), now],
    monthToDate: [now.clone().startOf('month'), now],
    thisYear: [now.clone().startOf('year'), now],
    yearToDate: [now.clone().startOf('year'), now],
    lastWeek: [now.clone().subtract(1, 'week').startOf('week').add(1, 'day'), now.clone().subtract(1, 'week').endOf('week').add(1, 'day')],
    lastMonth: [now.clone().subtract(1, 'month').startOf('month'), now.clone().subtract(1, 'month').endOf('month')],
    last12Months: [now.clone().subtract(12, 'month').startOf('month'), now.clone().startOf('month')],
    lastYear: [now.clone().subtract(1, 'year').startOf('year'), now.clone().subtract(1, 'year').endOf('year')]
  };
  return "".concat(timeRangeMap[timeRange].map(function (date) {
    return fullDate(date);
  }).join(' - '));
};
export var getDeselectedColor = function getDeselectedColor(color) {
  if (color.match(/^#[0-9a-f]{6}$/i)) {
    var r = parseInt(color.substring(1, 3), 16);
    var g = parseInt(color.substring(3, 5), 16);
    var b = parseInt(color.substring(5, 7), 16);
    return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", 0.3)");
  } else {
    return DEFAULT_DESELECTED_COLOR;
  }
};