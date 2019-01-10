"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  height: 300px;\n  width: 100%;\n  justify-content: space-between;\n  flex-flow: column;\n  box-sizing: border-box;\n  padding: 0 24px;\n  padding-top: 21px;\n  padding-bottom: 48px;\n\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border-bottom: solid 1px #e4e9f0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Line = _styledComponents.default.div(_templateObject());

var Container = _styledComponents.default.div(_templateObject2(), function (_ref) {
  var summary = _ref.summary;
  return summary && "\n\t\theight: 100px;\n\t\tpadding-top: 24px;\n    padding-bottom: 16px;\n\t";
});

var GhostChart = function GhostChart(_ref2) {
  var summary = _ref2.summary;
  return _react.default.createElement(Container, {
    summary: summary
  }, _react.default.createElement(Line, null), _react.default.createElement(Line, null), _react.default.createElement(Line, null), !summary && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(Line, null), _react.default.createElement(Line, null)));
};

GhostChart.propTypes = {
  summary: _propTypes.default.bool
};
GhostChart.defaultProps = {
  summary: false
};
var _default = GhostChart;
exports.default = _default;