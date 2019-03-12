"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _formatters = _interopRequireDefault(require("../Charts/utils/formatters"));

var _Colors = _interopRequireDefault(require("../Colors"));

var _ = require("../");

var _storyHelpers = require("./storyHelpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Bar Chart', module).add('Small', function () {
  return _react.default.createElement(_.Chart, {
    data: _storyHelpers.data,
    width: 200,
    height: 100
  }, _react.default.createElement(_.Bar, {
    dataKey: "organic",
    color: "#000"
  }));
}).add('Axis', function () {
  return _react.default.createElement(_.Chart, {
    data: _storyHelpers.data
  }, _react.default.createElement(_.YAxis, {
    tickFormatter: _formatters.default.humanizeDuration
  }), _react.default.createElement(_.XAxis, {
    dataKey: "date",
    tickFormatter: _formatters.default.date()
  }), _react.default.createElement(_.Bar, {
    dataKey: "sms",
    color: _Colors.default.cobaltBlue
  }));
}).add('Tooltip', function () {
  return _react.default.createElement(_.Chart, {
    data: _storyHelpers.data
  }, _react.default.createElement(_.YAxis, null), _react.default.createElement(_.XAxis, {
    dataKey: "date",
    tickFormatter: _formatters.default.date()
  }), _react.default.createElement(_.Tooltip, {
    content: _react.default.createElement(_.TooltipBody, {
      summaryTitle: "Reviews",
      aggregationOptions: {
        type: 'total',
        dataKeys: ['organic', 'text']
      }
    })
  }), _react.default.createElement(_.Bar, {
    name: "Organic",
    dataKey: "organic",
    color: _Colors.default.cobaltBlue
  }), _react.default.createElement(_.Bar, {
    name: "Text",
    dataKey: "text",
    color: _Colors.default.poppyRed
  }));
}).add('Tooltip, legend disabled', function () {
  return _react.default.createElement(_.Chart, {
    data: _storyHelpers.data
  }, _react.default.createElement(_.YAxis, null), _react.default.createElement(_.XAxis, {
    dataKey: "date",
    tickFormatter: _formatters.default.date()
  }), _react.default.createElement(_.Tooltip, {
    content: _react.default.createElement(_.TooltipBody, {
      summaryTitle: "Reviews",
      showLegend: false,
      aggregationOptions: {
        type: 'total',
        dataKeys: ['organic', 'text']
      }
    })
  }), _react.default.createElement(_.Bar, {
    name: "Organic",
    dataKey: "organic",
    color: _Colors.default.cobaltBlue
  }), _react.default.createElement(_.Bar, {
    name: "Text",
    dataKey: "text",
    color: _Colors.default.poppyRed
  }));
}).add('Stacked', function () {
  return _react.default.createElement(_.Chart, {
    data: _storyHelpers.data
  }, _react.default.createElement(_.YAxis, null), _react.default.createElement(_.XAxis, {
    dataKey: "date",
    tickFormatter: _formatters.default.date()
  }), _react.default.createElement(_.Tooltip, {
    content: _react.default.createElement(_.TooltipBody, {
      summaryType: "total",
      summaryTitle: "Reviews"
    })
  }), _react.default.createElement(_.Bar, {
    name: "Organic",
    stackId: "1",
    dataKey: "organic",
    color: _Colors.default.cobaltBlue
  }), _react.default.createElement(_.Bar, {
    name: "Text",
    stackId: "1",
    dataKey: "text",
    color: _Colors.default.poppyRed
  }));
}).add('Multiple', function () {
  return _react.default.createElement(_.Chart, {
    data: _storyHelpers.data
  }, _react.default.createElement(_.YAxis, null), _react.default.createElement(_.XAxis, {
    dataKey: "date",
    tickFormatter: _formatters.default.date()
  }), _react.default.createElement(_.Tooltip, {
    content: _react.default.createElement(_.TooltipBody, {
      summaryType: "total",
      summaryTitle: "Reviews"
    })
  }), _react.default.createElement(_.Bar, {
    name: "Organic",
    dataKey: "organic",
    color: _Colors.default.cobaltBlue
  }), _react.default.createElement(_.Bar, {
    name: "Text",
    dataKey: "text",
    color: _Colors.default.poppyRed
  }));
});