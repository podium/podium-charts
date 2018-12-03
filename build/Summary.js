"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Summary;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Summary() {
  return null;
}

Summary.propTypes = {
  data: _propTypes.default.array,
  aggType: _propTypes.default.oneOf(['avg', 'sum'])
};
Summary.defaultProps = {
  aggType: 'sum'
};