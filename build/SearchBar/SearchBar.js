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

var Container = _styledComponents.default.div(_templateObject(), function (_ref) {
  var width = _ref.width;
  return width;
});

var Input = _styledComponents.default.input(_templateObject2(), _podiumUi.colors.iron);

var IconContainer = _styledComponents.default.div(_templateObject3(), _podiumUi.colors.iron, _podiumUi.colors.whiteSmoke);

var SearchBar = function SearchBar(_ref2) {
  var onChange = _ref2.onChange,
      placeholder = _ref2.placeholder,
      width = _ref2.width;
  return _react.default.createElement(Container, {
    width: width
  }, _react.default.createElement(Input, {
    onChange: onChange,
    placeholder: placeholder
  }), _react.default.createElement(IconContainer, null, _react.default.createElement(_podiumUi.IconSearch, {
    height: "24px",
    width: "24px",
    color: _podiumUi.colors.jumbo
  })));
};

SearchBar.propTypes = {
  onChange: _propTypes.default.func.isRequired,
  placeholder: _propTypes.default.string,
  width: _propTypes.default.string
};
SearchBar.defaultProps = {
  placeholder: 'Search',
  width: '100%'
};
var _default = SearchBar;
exports.default = _default;