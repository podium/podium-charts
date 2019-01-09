"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = [{
  name: '',
  uv: 0
}, {
  name: '',
  uv: 0
}, {
  name: '',
  uv: 0
}, {
  name: '',
  uv: 0
}, {
  name: '',
  uv: 0
}, {
  name: '',
  uv: 0
}];

var ReportCardSummaryLoading = function ReportCardSummaryLoading(_ref) {
  var title = _ref.title,
      width = _ref.width;
  return _react.default.createElement(_.ReportCard, {
    width: width
  }, _react.default.createElement(_.ReportSummaryTitle, {
    title: title,
    loading: true,
    data: data,
    dataKeys: ['uv']
  }), _react.default.createElement(_.Chart, {
    data: data,
    height: 100
  }, _react.default.createElement(_.YAxis, {
    width: 1,
    tickCount: 3,
    tickFormatter: function tickFormatter() {
      return '';
    },
    dataKey: "uv"
  })));
};

ReportCardSummaryLoading.propTypes = {
  title: _propTypes.default.string.isRequired
};
var _default = ReportCardSummaryLoading;
exports.default = _default;