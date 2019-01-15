"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  height: ", ";\n  width: 100%;\n  justify-content: space-around;\n  flex-flow: column;\n  box-sizing: border-box;\n  padding: 0 24px;\n"]);

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
  var height = _ref.height;
  return "".concat(height, "px");
});

var calculateLines = function calculateLines(height) {
  if (height >= 300) return 5;
  return 3;
};

var GhostChart = function GhostChart(_ref2) {
  var height = _ref2.height;
  var numberOfLines = calculateLines(height);

  var renderLines = function renderLines() {
    return _toConsumableArray(new Array(numberOfLines)).map(function (_, i) {
      return _react.default.createElement(Line, {
        key: i
      });
    });
  };

  return _react.default.createElement(Container, {
    height: height
  }, renderLines());
};

GhostChart.propTypes = {
  height: _propTypes.default.number.isRequired
};
GhostChart.defaultProps = {
  height: 300
};
var _default = GhostChart;
exports.default = _default;