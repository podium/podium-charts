"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Table;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _podiumUi = require("@podiumhq/podium-ui");

var _TableStyledComponents = require("./TableStyledComponents");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Table(_ref) {
  var loading = _ref.loading,
      alternateColors = _ref.alternateColors,
      children = _ref.children;
  return loading ? _react.default.createElement(_podiumUi.TableLoading, null) : _react.default.createElement(_TableStyledComponents.TableWrapper, null, children);
}

Table.propTypes = {
  loading: _propTypes.default.bool,
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node])
};
Table.defaultProps = {
  loading: false,
  children: null
};