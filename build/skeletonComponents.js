"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bar = Bar;
exports.Line = Line;
exports.SummaryLine = SummaryLine;
exports.Tooltip = Tooltip;
exports.XAxis = XAxis;
exports.YAxis = YAxis;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _formatters = _interopRequireDefault(require("./formatters"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Bar() {
  return null;
}

Bar.propTypes = {
  dataKey: _propTypes.default.string.isRequired,
  stackId: _propTypes.default.string,
  color: _propTypes.default.string,
  name: _propTypes.default.string
};

function Line() {
  return null;
}

Line.propTypes = {
  dataKey: _propTypes.default.string.isRequired,
  color: _propTypes.default.string,
  name: _propTypes.default.string,
  connectNulls: _propTypes.default.bool
};

function SummaryLine() {
  return null;
}

SummaryLine.propTypes = {
  dataKey: _propTypes.default.string.isRequired,
  color: _propTypes.default.string,
  name: _propTypes.default.string
};

function Tooltip() {
  return null;
}

Tooltip.propTypes = {
  content: _propTypes.default.element.isRequired,
  formatter: _propTypes.default.func
};

function XAxis() {
  return null;
}

XAxis.propTypes = {
  dataKey: _propTypes.default.string.isRequired,
  tickFormatter: _propTypes.default.func
};
XAxis.defaultProps = {
  tickFormatter: _formatters.default.capitalizeFormatter
};

function YAxis() {
  return null;
}

YAxis.propTypes = {
  tickFormatter: _propTypes.default.func
};
YAxis.defaultProps = {
  tickFormatter: function tickFormatter(tick) {
    return tick;
  }
};