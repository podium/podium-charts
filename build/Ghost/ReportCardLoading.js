"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ = require("../");

var _GhostChart = _interopRequireDefault(require("./GhostChart"));

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

var ReportCardLoading = function ReportCardLoading(_ref) {
  var title = _ref.title;
  return _react.default.createElement(_.ReportCard, null, _react.default.createElement(_.ReportTitle, {
    title: title,
    data: data
  }), _react.default.createElement(_GhostChart.default, null), _react.default.createElement(_.Summary, {
    loading: true,
    data: data,
    dataKeys: ['uv']
  }), _react.default.createElement(_.Legend, {
    loading: true,
    data: data,
    config: []
  }));
};

ReportCardLoading.propTypes = {
  title: _propTypes.default.string.isRequired
};
var _default = ReportCardLoading;
exports.default = _default;