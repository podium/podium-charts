import _filter from "lodash/filter";
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
  if (!stackOrder) return React.createElement(RechartsRectangle, Object.assign({}, props, {
    radius: calculateRadius(width)
  }));

  var renderedBars = _filter(stackOrder, function (bar) {
    return !!payload[bar.dataKey];
  });

  var isTopBar = renderedBars[renderedBars.length - 1].dataKey === dataKey;
  if (isTopBar) return React.createElement(RechartsRectangle, Object.assign({}, props, {
    radius: calculateRadius(width)
  }));
  return React.createElement(RechartsRectangle, props);
}