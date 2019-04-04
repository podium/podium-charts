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

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
var Line = styled.div(_templateObject());
var Container = styled.div(_templateObject2(), function (_ref) {
  var height = _ref.height;
  return "".concat(height, "px");
});

var calculateLines = function calculateLines(height) {
  if (height >= 300) return 5;
  return 0;
};

var GhostChart = function GhostChart(_ref2) {
  var height = _ref2.height;
  var numberOfLines = calculateLines(height);

  var renderLines = function renderLines() {
    return _toConsumableArray(new Array(numberOfLines)).map(function (_, i) {
      return React.createElement(Line, {
        key: i
      });
    });
  };

  return React.createElement(Container, {
    height: height
  }, renderLines());
};

GhostChart.propTypes = {
  height: PropTypes.number.isRequired
};
GhostChart.defaultProps = {
  height: 300
};
export default GhostChart;