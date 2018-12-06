"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Rectangle;

var _filter2 = _interopRequireDefault(require("lodash/filter"));

var _react = _interopRequireDefault(require("react"));

var _recharts = require("recharts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var calculateRadius = function calculateRadius(width) {
  var radius = Math.floor(width / 8);
  return [radius, radius, 0, 0];
};

function Rectangle(props) {
  var stackPosition = props.stackPosition,
      stackId = props.stackId,
      width = props.width,
      payload = props.payload,
      dataKey = props.dataKey;
  var stackOrder = stackPosition[stackId];
  if (!stackOrder) return _react.default.createElement(_recharts.Rectangle, _extends({}, props, {
    radius: calculateRadius(width)
  }));
  var renderedBars = (0, _filter2.default)(stackOrder, function (bar) {
    return !!payload[bar.dataKey];
  });
  if (!renderedBars.length) return _react.default.createElement(_recharts.Rectangle, props);
  var isTopBar = renderedBars[renderedBars.length - 1].dataKey === dataKey;
  if (isTopBar) return _react.default.createElement(_recharts.Rectangle, _extends({}, props, {
    radius: calculateRadius(width)
  }));
  return _react.default.createElement(_recharts.Rectangle, props);
}