function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", " ", " ", " ", " font-family: 'BLOKK';\n  > * {\n    font-family: 'BLOKK';\n  }\n  @supports (-webkit-background-clip: text) {\n    animation: ", " 1.5s linear;\n    -webkit-animation: ", " 1.5s linear;\n    -webkit-animation-iteration-count: infinite;\n\n    background: linear-gradient(\n      to right,\n      #eeeeee 20%,\n      #dddddd 40%,\n      #eeeeee 60%\n    );\n    background-size: 200% auto;\n\n    background-clip: text;\n    text-fill-color: transparent;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    > * {\n      background: linear-gradient(\n        to right,\n        #eeeeee 8%,\n        #dddddd 18%,\n        #eeeeee 33%\n      );\n      background-size: 200% auto;\n      background-clip: text;\n      text-fill-color: transparent;\n      -webkit-background-clip: text;\n      -webkit-text-fill-color: transparent;\n\n      text-overflow: unset;\n      font-family: 'BLOKK';\n      animation: ", " 1.5s linear;\n      -webkit-animation: ", " 1.5s linear;\n      -webkit-animation-iteration-count: infinite;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  to {\n      background-position: -200% center;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled, { keyframes } from 'styled-components';
var pulsate = keyframes(_templateObject());
export var Ghosting = styled.span(_templateObject2(), function (_ref) {
  var color = _ref.color;
  return color && "\n    color: ".concat(color, ";\n      > * {\n        color: ").concat(color, ";\n      }\n  ");
}, function (_ref2) {
  var size = _ref2.size;
  return size && "\n    font-size: ".concat(size, ";\n      > * {\n        font-size: ").concat(size, ";\n      }\n  ");
}, function (_ref3) {
  var wordSpacing = _ref3.wordSpacing;
  return wordSpacing && "\n    word-spacing: ".concat(wordSpacing, ";\n      > * {\n       word-spacing: ").concat(wordSpacing, ";\n      }\n  ");
}, function (_ref4) {
  var letterSpacing = _ref4.letterSpacing;
  return letterSpacing && "\n    letter-spacing: ".concat(letterSpacing, ";\n      > * {\n       letter-spacing: ").concat(letterSpacing, ";\n      }\n  ");
}, pulsate, pulsate, pulsate, pulsate);