function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
import dateHelpers from './dateHelpers';
var DEFAULT_DESELECTED_COLOR = colors.mystic;
export function detectChartType(children) {
  var filteredChildren = filterChildren(children);
  var allowedTypes = new Set([Line, Bar]);
  var childrenTypes = [];
  React.Children.forEach(filteredChildren, function (child) {
    if (!childrenTypes.includes(child.type) && allowedTypes.has(child.type)) {
      childrenTypes = _toConsumableArray(childrenTypes).concat([child.type]);
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

  if (timeRange === 'custom' && dateStart && dateEnd) {
    return "".concat(fullDate(dateStart), " - ").concat(fullDate(dateEnd));
  }

  var _dateHelpers$timeRang = dateHelpers[timeRange](),
      _dateHelpers$timeRang2 = _slicedToArray(_dateHelpers$timeRang, 2),
      start = _dateHelpers$timeRang2[0],
      end = _dateHelpers$timeRang2[1];

  return "".concat(fullDate(start), " - ").concat(fullDate(end));
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