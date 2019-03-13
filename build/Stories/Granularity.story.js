"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Granularity Dropdown', module).add('Last Year', function () {
  return _react.default.createElement(_.Granularity, {
    timeRange: "lastYear",
    onChange: function onChange(res) {
      console.log("You picked ".concat(res));
    }
  });
}).add('Last Week', function () {
  return _react.default.createElement(_.Granularity, {
    timeRange: "lastWeek",
    onChange: function onChange(res) {
      console.log("You picked ".concat(res));
    }
  });
}).add('Restricted Options', function () {
  return _react.default.createElement(_.Granularity, {
    timeRange: "lastWeek",
    exclude: ['hour'],
    onChange: function onChange(res) {
      console.log("You picked ".concat(res));
    }
  });
});