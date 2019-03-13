"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReportCardContext = _react.default.createContext({
  selectedKey: null,
  onSelectKey: function onSelectKey() {}
});

var _default = ReportCardContext;
exports.default = _default;