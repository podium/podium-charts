"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  justify-content: flex-start;\n  margin: 8px 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  height: ", ";\n  width: ", ";\n  margin: 8px 0;\n  background: linear-gradient(\n    -90deg,\n    rgba(232, 233, 236, 0.3) 0%,\n    #e8e9ec 100%\n  );\n\n  animation: ", " 1.5s linear;\n  -webkit-animation: ", " 1.5s linear;\n  -webkit-animation-iteration-count: infinite;\n\n  background-size: 200% auto;\n  background-clip: text;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tto { background-position: -200% center; }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var pulsate = (0, _styledComponents.keyframes)(_templateObject());

var GhostState = _styledComponents.default.div(_templateObject2(), function (_ref) {
  var height = _ref.height;
  return height;
}, function (_ref2) {
  var width = _ref2.width;
  return width;
}, pulsate, pulsate);

var Row = _styledComponents.default.div(_templateObject3());

var Ghost = function Ghost(_ref3) {
  var height = _ref3.height,
      width = _ref3.width,
      row = _ref3.row;

  for (var _len = arguments.length, props = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    props[_key - 1] = arguments[_key];
  }

  return row ? _react.default.createElement(Row, null, _react.default.createElement(GhostState, {
    height: "16px",
    width: "16px",
    style: {
      marginRight: '32px'
    }
  }), _react.default.createElement(GhostState, {
    height: "14px",
    width: "136px",
    style: {
      marginRight: '32px'
    }
  }), _react.default.createElement(GhostState, {
    height: "14px",
    width: "30px"
  })) : _react.default.createElement(GhostState, _extends({
    height: height,
    width: width
  }, props));
};

Ghost.propTypes = {
  height: _propTypes.default.string,
  width: _propTypes.default.string,
  row: _propTypes.default.bool
};
Ghost.defaultProps = {
  height: '20px',
  width: '78px'
};
var _default = Ghost;
exports.default = _default;