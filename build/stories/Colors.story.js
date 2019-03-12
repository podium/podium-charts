"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Colors = _interopRequireDefault(require("../Colors"));

var _storyHelpers = require("./storyHelpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Colors', module).add('default', function () {
  var colorsMap = Object.keys(_Colors.default).map(function (color) {
    return {
      value: _Colors.default[color],
      name: color
    };
  });
  var podiumColors = colorsMap.filter(function (color) {
    return typeof color.value === 'string';
  });
  return _react.default.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap'
    }
  }, podiumColors.map(function (color) {
    return _react.default.createElement(_storyHelpers.Palette, {
      color: color.value,
      name: color.name
    });
  }));
});