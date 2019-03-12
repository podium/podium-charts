"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _formatters = _interopRequireDefault(require("../utils/formatters"));

var _Colors = _interopRequireDefault(require("../Colors"));

var _ = require("../");

var _storyHelpers = require("./storyHelpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Mixed Chart', module).add('Mixed', function () {
  return _react.default.createElement(_.Chart, {
    data: _storyHelpers.data
  }, _react.default.createElement(_.YAxis, null), _react.default.createElement(_.XAxis, {
    dataKey: "date",
    tickFormatter: _formatters.default.date()
  }), _react.default.createElement(_.Bar, {
    name: "Organic",
    dataKey: "organic",
    color: _Colors.default.cobaltBlue
  }), _react.default.createElement(_.Tooltip, {
    content: _react.default.createElement(_.TooltipBody, {
      summaryTitle: "Reviews",
      aggregationOptions: {
        type: 'total',
        dataKeys: ['organic', 'text']
      }
    })
  }), _react.default.createElement(_.Line, {
    name: "Text",
    dataKey: "text",
    color: _Colors.default.poppyRed
  }));
});