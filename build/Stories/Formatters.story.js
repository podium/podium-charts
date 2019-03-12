"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _formatters = _interopRequireDefault(require("../Charts/utils/formatters"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Formatters', module).add('date', function () {
  return _react.default.createElement("div", null, _react.default.createElement("div", null, "formatters.date('hour')", _react.default.createElement("div", null, "->"), _formatters.default.date('hour')('2018-01-15T23:43:32')), _react.default.createElement("br", null), _react.default.createElement("div", null, "formatters.date('day')", _react.default.createElement("div", null, "->"), _formatters.default.date('day')('2018-01-15T23:43:32')), _react.default.createElement("br", null), _react.default.createElement("div", null, "formatters.date('week')", _react.default.createElement("div", null, "->"), _formatters.default.date('week')('2018-01-15T23:43:32')), _react.default.createElement("br", null), _react.default.createElement("div", null, "formatters.date('month')", _react.default.createElement("div", null, "->"), _formatters.default.date('month')('2018-01-15T23:43:32')), _react.default.createElement("br", null), _react.default.createElement("div", null, "formatters.date('year')", _react.default.createElement("div", null, "->"), _formatters.default.date('year')('2018-01-15T23:43:32')));
}).add('capitalize', function () {
  return _react.default.createElement("div", null, "formatters.capitalize(\"podium\")", _react.default.createElement("div", null, "->"), _formatters.default.capitalize('podium'));
}).add('abbreviateNumber', function () {
  return _react.default.createElement("div", null, "formatters.abbreviateNumber(100000000)", _react.default.createElement("div", null, "->"), _formatters.default.abbreviateNumber(100000000));
}).add('humanizeDuration', function () {
  return _react.default.createElement("div", null, "formatters.humanizeDuration(86400)", _react.default.createElement("div", null, "->"), _formatters.default.humanizeDuration(86400));
}).add('commatize', function () {
  return _react.default.createElement("div", null, "formatters.commatize(\"\")", _react.default.createElement("div", null, "->"), _formatters.default.commatize(1000000000));
}).add('nullToValue', function () {
  return _react.default.createElement("div", null, _react.default.createElement("div", null, "formatters.nullToValue(formatters.commatize, 'N/A')(5000)", _react.default.createElement("div", null, "->"), _formatters.default.nullToValue(_formatters.default.commatize, 'N/A')(5000)), _react.default.createElement("br", null), _react.default.createElement("div", null, "formatters.nullToValue(formatters.commatize, 'N/A')(null)", _react.default.createElement("div", null, "->"), _formatters.default.nullToValue(_formatters.default.commatize, 'N/A')(null)));
});