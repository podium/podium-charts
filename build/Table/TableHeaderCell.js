"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TableHeaderCell;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("./constants");

var _TableStyledComponents = require("./TableStyledComponents");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TableHeaderCell(_ref) {
  var active = _ref.active,
      onClick = _ref.onClick,
      sortDirection = _ref.sortDirection,
      children = _ref.children,
      width = _ref.width;
  return _react.default.createElement(_TableStyledComponents.TableHeaderCellWrapper, {
    active: active,
    onClick: onClick,
    sortDirection: sortDirection,
    width: width
  }, children);
}

TableHeaderCell.propTypes = {
  active: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  sortDirection: _propTypes.default.oneOf([null, 'asc', 'desc']),
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]),
  width: _propTypes.default.number
};
TableHeaderCell.defaultProps = {
  active: false,
  sortDirection: null,
  children: null,
  width: _constants.defaultCellWidth,
  onClick: function onClick() {
    return null;
  }
};