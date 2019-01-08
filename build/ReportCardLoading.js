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

var ReportCardLoading = function ReportCardLoading(_ref) {
  var title = _ref.title;
  return _react.default.createElement(_.ReportCard, null, _react.default.createElement(_.ReportTitle, {
    title: title,
    data: data
  }), _react.default.createElement(_.Chart, {
    data: data
  }, _react.default.createElement(_.YAxis, {
    tickFormatter: function tickFormatter() {
      return '';
    },
    dataKey: "uv"
  }), _react.default.createElement(_.XAxis, {
    dataKey: "name"
  })), _react.default.createElement(_.Summary, {
    loading: true
  }), _react.default.createElement(_.Legend, {
    loading: true
  }));
};

ReportCardLoading.propTypes = {
  title: _propTypes.default.string.isRequired
};
var _default = ReportCardLoading;
exports.default = _default;