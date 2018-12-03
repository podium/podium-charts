import _toConsumableArray from "/Users/gkkirsch/development/podium-charts/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray";
import _groupBy from "lodash/groupBy";
import React from 'react';
import { BarChart as RechartsBarChart, ComposedChart as RechartsComposedChart, LineChart as RechartsLineChart } from 'recharts';
export function detectChartType(children) {
  var allowedTypes = ['Line', 'Bar'];
  var childrenTypes = [];
  React.Children.forEach(children, function (child) {
    if (!childrenTypes.includes(child.type.name) && allowedTypes.includes(child.type.name)) {
      childrenTypes = _toConsumableArray(childrenTypes).concat([child.type.name]);
    }
  });
  if (childrenTypes.length > 1) return RechartsComposedChart;
  if (childrenTypes[0] === 'Bar') return RechartsBarChart;
  if (childrenTypes[0] === 'Line') return RechartsLineChart;
  return RechartsComposedChart;
}
;
export function getStackPositions(children) {
  var stackPosition = [];
  React.Children.forEach(children, function (child) {
    if (child.type.name === 'Bar' && child.props.stackId) {
      stackPosition = stackPosition.concat([{
        stackId: child.props.stackId,
        dataKey: child.props.dataKey
      }]);
    }
  });
  return _groupBy(stackPosition, 'stackId');
}
export function singleLineChart(children) {
  var numberOfLines = 0;
  var lineProps = {};
  React.Children.forEach(children, function (child) {
    if (child.type.name === 'Line') {
      numberOfLines += 1;
      lineProps = child.props;
    }
  });
  return numberOfLines === 1 ? lineProps : false;
}