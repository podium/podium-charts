function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  height: 40px;\n  border: solid 1px ", ";\n  border-radius: 0 4px 4px 0;\n  border-left: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 8px;\n  box-sizing: border-box;\n  background: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 40px;\n  padding: 4px 8px;\n  font-size: 14px;\n  border: solid 1px ", ";\n  border-radius: 4px 0 0 4px;\n\n  box-sizing: border-box;\n  &:focus {\n    outline: none;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n  display: flex;\n  font-family: Graphik, Helvetica, sans-serif;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IconSearch, colors } from '@podiumhq/podium-ui';
var Container = styled.div(_templateObject(), function (_ref) {
  var width = _ref.width;
  return width;
});
var Input = styled.input(_templateObject2(), colors.iron);
var IconContainer = styled.div(_templateObject3(), colors.iron, colors.whiteSmoke);

var SearchBar = function SearchBar(_ref2) {
  var onChange = _ref2.onChange,
      width = _ref2.width,
      rest = _objectWithoutProperties(_ref2, ["onChange", "width"]);

  return React.createElement(Container, {
    width: width
  }, React.createElement(Input, _extends({
    onChange: onChange
  }, rest)), React.createElement(IconContainer, null, React.createElement(IconSearch, {
    height: "24px",
    width: "24px",
    color: colors.jumbo
  })));
};

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  width: PropTypes.string
};
SearchBar.defaultProps = {
  placeholder: 'Search',
  width: '100%'
};
export default SearchBar;