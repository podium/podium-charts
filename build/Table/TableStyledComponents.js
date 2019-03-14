"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableLoadingWhitespace = exports.TableLoadingWrapper = exports.TableBodyWrapper = exports.TableCellWrapper = exports.TableHeaderWrapper = exports.TableRowWrapper = exports.TableWrapper = exports.TableHeaderCellWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _podiumUi = require("@podiumhq/podium-ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  ", ";\n  background-color: ", ";\n  left: ", "px;\n  position: absolute;\n  top: ", "px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  max-width: 100%;\n  overflow: hidden;\n  position: relative;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-weight: normal;\n  padding: 0 32px;\n  height: 56px;\n\n  ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  font-family: ", ";\n  font-size: 12px;\n  border-collapse: collapse;\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  position: relative;\n  font-weight: 500;\n  text-align: left;\n  padding: 8px 32px 8px 32px;\n  height: 56px;\n\n  ", ";\n\n  ", ";\n\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var mystic = _podiumUi.colors.mystic,
    black = _podiumUi.colors.black,
    mineShaft = _podiumUi.colors.mineShaft,
    white = _podiumUi.colors.white;
var activeColumnBackgroundColor = '#F6F7F8';
var GRAPHIK = 'Graphik, Helvetica, sans-serif';

var TableHeaderCellWrapper = _styledComponents.default.th(_templateObject(), black, function (_ref) {
  var active = _ref.active;
  return active && "background-color: ".concat(activeColumnBackgroundColor, ";");
}, function (_ref2) {
  var width = _ref2.width;
  return width && "min-width: ".concat(width, "px");
}, function (_ref3) {
  var sortDirection = _ref3.sortDirection;
  return sortDirection && " cursor: pointer;\n      position: relative;\n      align-items: center;\n      cursor: pointer;\n      user-select: none;\n    ";
});

exports.TableHeaderCellWrapper = TableHeaderCellWrapper;
var borders = "\n  > thead {\n    border-bottom: solid 1px ".concat(mystic, ";\n\n    > tr {\n      :not(:last-child) {\n        border-bottom: 1px solid ").concat(mystic, ";\n      }\n      > th {\n        :first-child {\n          border-right: 1px solid ").concat(mystic, ";\n        }\n      }\n    }\n  }\n\n  > tbody {\n    > tr {\n      :not(:last-child) {\n        border-bottom: 1px solid ").concat(mystic, ";\n      }\n      > td {\n\t\t\t\t:first-child {\n\t\t\t\t\tborder-right: 1px solid ").concat(mystic, ";\n\t\t\t\t}\n      }\n    }\n  }\n");

var TableWrapper = _styledComponents.default.table(_templateObject2(), GRAPHIK, borders);

exports.TableWrapper = TableWrapper;

var TableRowWrapper = _styledComponents.default.tr(_templateObject3());

exports.TableRowWrapper = TableRowWrapper;

var TableHeaderWrapper = _styledComponents.default.thead(_templateObject4());

exports.TableHeaderWrapper = TableHeaderWrapper;

var TableCellWrapper = _styledComponents.default.td(_templateObject5(), mineShaft, function (_ref4) {
  var width = _ref4.width;
  return width && "min-width: ".concat(width);
});

exports.TableCellWrapper = TableCellWrapper;

var TableBodyWrapper = _styledComponents.default.tbody(_templateObject6());

exports.TableBodyWrapper = TableBodyWrapper;

var TableLoadingWrapper = _styledComponents.default.div(_templateObject7());

exports.TableLoadingWrapper = TableLoadingWrapper;

var TableLoadingWhitespace = _styledComponents.default.div(_templateObject8(), function (_ref5) {
  var width = _ref5.width;
  return width && "width: ".concat(width, "px");
}, function (_ref6) {
  var height = _ref6.height;
  return height && "height: ".concat(height, "px");
}, white, function (_ref7) {
  var left = _ref7.left;
  return left ? "".concat(left) : '0';
}, function (_ref8) {
  var top = _ref8.top;
  return top ? "".concat(top) : '0';
});

exports.TableLoadingWhitespace = TableLoadingWhitespace;