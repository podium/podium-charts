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

import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
var pulsate = keyframes(_templateObject());
var GhostState = styled.div(_templateObject2(), function (_ref) {
  var height = _ref.height;
  return height;
}, function (_ref2) {
  var width = _ref2.width;
  return width;
}, pulsate, pulsate);
var Row = styled.div(_templateObject3());

var Ghost = function Ghost(_ref3) {
  var height = _ref3.height,
      width = _ref3.width,
      row = _ref3.row;

  for (var _len = arguments.length, props = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    props[_key - 1] = arguments[_key];
  }

  return row ? React.createElement(Row, null, React.createElement(GhostState, {
    height: "16px",
    width: "16px",
    style: {
      marginRight: '32px'
    }
  }), React.createElement(GhostState, {
    height: "14px",
    width: "136px",
    style: {
      marginRight: '32px'
    }
  }), React.createElement(GhostState, {
    height: "14px",
    width: "30px"
  })) : React.createElement(GhostState, _extends({
    height: height,
    width: width
  }, props));
};

Ghost.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  row: PropTypes.bool
};
Ghost.defaultProps = {
  height: '20px',
  width: '78px'
};
export default Ghost;