"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _podiumUi = require("@podiumhq/podium-ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 22px;\n  height: 22px;\n  border-radius: 2px;\n  background-color: ", ";\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var calculateTrendColor = function calculateTrendColor(_ref) {
  var direction = _ref.direction,
      preferDown = _ref.preferDown;

  switch (direction) {
    case 'up':
      return preferDown ? _podiumUi.colors.poppyRed : _podiumUi.colors.podiumBrand;

    case 'down':
      return preferDown ? _podiumUi.colors.podiumBrand : _podiumUi.colors.poppyRed;

    default:
      return _podiumUi.colors.iron;
  }
};

var TrendWrapper = _styledComponents.default.div(_templateObject(), function (props) {
  return calculateTrendColor(props);
}, function (_ref2) {
  var direction = _ref2.direction;
  return direction === 'up' && "svg { transform: translate(90deg); } ";
});

var Trend = function Trend(_ref3) {
  var direction = _ref3.direction,
      preferDown = _ref3.preferDown;
  return _react.default.createElement(TrendWrapper, {
    direction: direction,
    preferDown: preferDown
  }, direction === 'neutral' ? _react.default.createElement(_podiumUi.IconMinus, {
    color: _podiumUi.colors.white,
    size: "small"
  }) : _react.default.createElement(_podiumUi.IconArrow, {
    color: _podiumUi.colors.white,
    size: "small",
    direction: direction
  }));
};

Trend.propTypes = {
  direction: _propTypes.default.string.isRequired,
  preferDown: _propTypes.default.bool
};
Trend.defaultProps = {
  direction: 'neutral',
  preferDown: false
};
var _default = Trend;
exports.default = _default;