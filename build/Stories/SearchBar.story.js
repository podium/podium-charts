"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _SearchBar = _interopRequireDefault(require("../SearchBar"));

var _SearchBarHelpers = require("./SearchBarHelpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Search', module).add('default', function () {
  return _react.default.createElement("div", {
    style: {
      width: '400px'
    }
  }, _react.default.createElement(_SearchBar.default, {
    onChange: function onChange(e) {
      return console.log(e.target.value);
    }
  }));
}, {
  notes: _SearchBarHelpers.DefaultNotes
});