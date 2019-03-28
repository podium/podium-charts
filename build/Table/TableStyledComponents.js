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
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-weight: normal;\n  padding: 16px 32px;\n  min-height: 56px;\n\n  ", ";\n"]);

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
  var data = _taggedTemplateLiteral(["\n  min-height: 56px;\n"]);

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

import styled from 'styled-components';
import { colors } from '@podiumhq/podium-ui';
var mystic = colors.mystic,
    black = colors.black,
    mineShaft = colors.mineShaft,
    white = colors.white;
var activeColumnBackgroundColor = '#F6F7F8';
var GRAPHIK = 'Graphik, Helvetica, sans-serif';
export var TableHeaderCellWrapper = styled.th(_templateObject(), black, function (_ref) {
  var active = _ref.active;
  return active && "background-color: ".concat(activeColumnBackgroundColor, ";");
}, function (_ref2) {
  var width = _ref2.width;
  return width && "min-width: ".concat(width, "px");
}, function (_ref3) {
  var sortDirection = _ref3.sortDirection;
  return sortDirection && " cursor: pointer;\n      position: relative;\n      align-items: center;\n      cursor: pointer;\n      user-select: none;\n    ";
});
var borders = "\n  > thead {\n    border-bottom: solid 1px ".concat(mystic, ";\n\n    > tr {\n      :not(:last-child) {\n        border-bottom: 1px solid ").concat(mystic, ";\n      }\n      > th {\n        :first-child {\n          border-right: 1px solid ").concat(mystic, ";\n        }\n      }\n    }\n  }\n\n  > tbody {\n    > tr {\n      :not(:last-child) {\n        border-bottom: 1px solid ").concat(mystic, ";\n      }\n      > td {\n\t\t\t\t:first-child {\n\t\t\t\t\tborder-right: 1px solid ").concat(mystic, ";\n\t\t\t\t}\n      }\n    }\n  }\n");
export var TableWrapper = styled.table(_templateObject2(), GRAPHIK, borders);
export var TableRowWrapper = styled.tr(_templateObject3());
export var TableHeaderWrapper = styled.thead(_templateObject4());
export var TableCellWrapper = styled.td(_templateObject5(), mineShaft, function (_ref4) {
  var width = _ref4.width;
  return width && "min-width: ".concat(width);
});
export var TableBodyWrapper = styled.tbody(_templateObject6());
export var TableLoadingWrapper = styled.div(_templateObject7());
export var TableLoadingWhitespace = styled.div(_templateObject8(), function (_ref5) {
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