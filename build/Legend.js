"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Legend;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Legend() {
  return null;
}

Legend.propTypes = {
  data: _propTypes.default.array,
  aggType: _propTypes.default.oneOf(['avg', 'sum'])
};
Legend.defaultProps = {
  aggType: 'sum'
};