"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _podiumUi = require("@podiumhq/podium-ui");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 18px;\n  height: 18px;\n  border-radius: 2px;\n  background-color: ", ";\n  margin: 2px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  height: 24px;\n  width: 24px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var calculateTrendIconColor = function calculateTrendIconColor(direction, preferDown) {
  switch (direction) {
    case 'up':
      return preferDown ? _podiumUi.colors.poppyRed : _podiumUi.colors.podiumBrand;

    case 'down':
      return preferDown ? _podiumUi.colors.podiumBrand : _podiumUi.colors.poppyRed;

    default:
      return _podiumUi.colors.white;
  }
};

var arrowCss = (0, _styledComponents.css)(_templateObject());
var StyledIconUpArrow = (0, _styledComponents.default)(_podiumUi.IconUploadSquareSolid)(_templateObject2(), arrowCss);
var StyledIconDownArrow = (0, _styledComponents.default)(_podiumUi.IconDownloadSquareSolid)(_templateObject3(), arrowCss);

var NeutralTrendWrapper = _styledComponents.default.div(_templateObject4(), _podiumUi.colors.iron);

var Trend = function Trend(_ref) {
  var direction = _ref.direction,
      preferDown = _ref.preferDown;

  switch (direction) {
    case 'up':
      return _react.default.createElement(StyledIconUpArrow, {
        color: calculateTrendIconColor(direction, preferDown)
      });

    case 'down':
      return _react.default.createElement(StyledIconDownArrow, {
        color: calculateTrendIconColor(direction, preferDown)
      });

    default:
      return _react.default.createElement(NeutralTrendWrapper, null, _react.default.createElement(_podiumUi.IconMinus, {
        color: _podiumUi.colors.white,
        size: "small"
      }));
  }
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