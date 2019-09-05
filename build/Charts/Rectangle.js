function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Rectangle as RechartsRectangle } from 'recharts';

var calculateRadius = function calculateRadius(width) {
  var radius = Math.floor(width / 8);
  return [radius, radius, 0, 0];
};

export default function Rectangle(props) {
  var stackPosition = props.stackPosition,
      stackId = props.stackId,
      width = props.width,
      payload = props.payload,
      dataKey = props.dataKey;
  var stackOrder = stackPosition[stackId];
  if (!stackOrder) return React.createElement(RechartsRectangle, _extends({}, props, {
    radius: calculateRadius(width)
  }));
  var renderedBars = stackOrder.filter(function (bar) {
    return !!payload[bar.dataKey];
  });
  if (!renderedBars.length) return React.createElement(RechartsRectangle, props);
  var isTopBar = renderedBars[0].dataKey === dataKey;
  if (isTopBar) return React.createElement(RechartsRectangle, _extends({}, props, {
    radius: calculateRadius(width)
  }));
  return React.createElement(RechartsRectangle, props);
}