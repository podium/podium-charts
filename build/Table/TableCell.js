"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TableCell;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("./constants");

var _TableStyledComponents = require("./TableStyledComponents");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TableCell(_ref) {
  var activeColumn = _ref.activeColumn,
      activeRow = _ref.activeRow,
      width = _ref.width,
      children = _ref.children;
  return _react.default.createElement(_TableStyledComponents.TableCellWrapper, {
    width: width,
    "data-active-row": activeRow,
    "data-active-col": activeColumn
  }, children);
}

TableCell.propTypes = {
  activeRow: _propTypes.default.bool,
  activeColumn: _propTypes.default.bool,
  width: _propTypes.default.number,
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node])
};
TableCell.defaultProps = {
  activeRow: false,
  activeColumn: false,
  children: null,
  width: _constants.defaultCellWidth
};