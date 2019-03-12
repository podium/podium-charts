"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _formatters = _interopRequireDefault(require("../charts/utils/formatters"));

var _ = require("../");

var _storyHelpers = require("./storyHelpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Summary', module).add('WeightedAvg', function () {
  return _react.default.createElement(_.Summary, {
    formatter: _formatters.default.roundToPlaces(1),
    data: _storyHelpers.weightedAvgData,
    aggregationOptions: {
      type: 'weightedAvg',
      dataKeys: ['dogs', 'cats'],
      options: {
        valueKey: 'cuteness',
        countKey: 'amount'
      }
    },
    granularity: "month",
    timeRange: "lastYear"
  });
});