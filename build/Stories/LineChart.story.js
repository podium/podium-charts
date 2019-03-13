"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _formatters = _interopRequireDefault(require("../Charts/utils/formatters"));

var _Colors = _interopRequireDefault(require("../Colors"));

var _ = require("../");

var _storyHelpers = require("./storyHelpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Line Chart', module).add('Small', function () {
  return _react.default.createElement(_.Chart, {
    data: _storyHelpers.data,
    width: 200,
    height: 100
  }, _react.default.createElement(_.Line, {
    dataKey: "organic",
    color: "#000"
  }));
}).add('Axis', function () {
  return _react.default.createElement(_.Chart, {
    data: _storyHelpers.data
  }, _react.default.createElement(_.YAxis, {
    tickFormatter: _formatters.default.abbreviateNumber
  }), _react.default.createElement(_.XAxis, {
    dataKey: "date",
    tickFormatter: _formatters.default.date()
  }), _react.default.createElement(_.Line, {
    dataKey: "sms",
    color: _Colors.default.cobaltBlue
  }));
}).add('TooltipBodyTime', function () {
  return _react.default.createElement(_.Chart, {
    data: _storyHelpers.data
  }, _react.default.createElement(_.YAxis, {
    tickFormatter: _formatters.default.abbreviateTime
  }), _react.default.createElement(_.XAxis, {
    dataKey: "date",
    tickFormatter: _formatters.default.date()
  }), _react.default.createElement(_.Tooltip, {
    content: _react.default.createElement(_.TooltipBodyTime, null)
  }), _react.default.createElement(_.Line, {
    dataKey: "sms",
    color: _Colors.default.armyGreen
  }));
}).add('Multiple Lines', function () {
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
  }), _react.default.createElement(_.Line, {
    name: "THIS CAN BE ANTYHING",
    dataKey: "organic",
    color: _Colors.default.cobaltBlue
  }), _react.default.createElement(_.Line, {
    name: "SO CAN THIS",
    dataKey: "text",
    color: _Colors.default.poppyRed
  }));
}).add('Customized Axis, Tooltip', function () {
  return _react.default.createElement(_.Chart, {
    data: _storyHelpers.reviewsData
  }, _react.default.createElement(_.YAxis, {
    tickFormatter: _formatters.default.abbreviateNumber,
    ticks: ['0', '1', '2', '3', '4', '5'],
    domain: [0, 5]
  }), _react.default.createElement(_.XAxis, {
    dataKey: "date",
    tickFormatter: _formatters.default.date()
  }), _react.default.createElement(_.Tooltip, {
    content: _react.default.createElement(_.TooltipBody, {
      formatter: _formatters.default.roundToPlaces(1),
      aggregationOptions: {
        type: 'weightedAvg',
        dataKeys: ['facebook', 'google', 'yelp'],
        options: {
          valueKey: 'reviewRating',
          countKey: 'reviewCount'
        }
      },
      summaryTitle: "Avg Star Rating"
    })
  }), _react.default.createElement(_.Line, {
    name: "Facebook",
    dataKey: "facebook.reviewRating",
    color: _Colors.default.siteColors.facebook,
    connectNulls: true
  }), _react.default.createElement(_.Line, {
    name: "Google",
    dataKey: "google.reviewRating",
    color: _Colors.default.siteColors.google,
    connectNulls: true
  }), _react.default.createElement(_.Line, {
    name: "Yelp",
    dataKey: "yelp.reviewRating",
    color: _Colors.default.siteColors.yelp,
    connectNulls: true
  }));
});