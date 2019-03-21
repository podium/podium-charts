"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _podiumUi = require("@podiumhq/podium-ui");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin: 0 2px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin: 0 2px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  cursor: pointer;\n  margin: 0 2px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-flow: row;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject());

var ChangeLink = _styledComponents.default.div(_templateObject2(), _podiumUi.colors.cobaltBlue);

var Label = _styledComponents.default.div(_templateObject3());

var Page = _styledComponents.default.div(_templateObject4());

var Pagination = function Pagination(_ref) {
  var currentPage = _ref.currentPage,
      totalPages = _ref.totalPages,
      onPageChange = _ref.onPageChange;
  return _react.default.createElement(Container, null, currentPage > 1 && _react.default.createElement(ChangeLink, {
    onClick: function onClick() {
      return onPageChange(currentPage - 1);
    }
  }, "Previous"), _react.default.createElement(Label, null, "Page"), _react.default.createElement(Page, null, currentPage, " /"), _react.default.createElement(Page, null, totalPages), currentPage < totalPages && _react.default.createElement(ChangeLink, {
    onClick: function onClick() {
      return onPageChange(currentPage + 1);
    }
  }, "Next"));
};

Pagination.propTypes = {
  currentPage: _propTypes.default.number,
  totalPages: _propTypes.default.number.isRequired,
  onPageChange: _propTypes.default.func.isRequired
};
Pagination.defaultProps = {
  currentPage: 1
};
var _default = Pagination;
exports.default = _default;