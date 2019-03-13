"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _formatters = _interopRequireDefault(require("../Charts/utils/formatters"));

var _Colors = _interopRequireDefault(require("../Colors"));

var _ = require("../");

var _storyHelpers = require("./storyHelpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Report Card Summary', module).add('Default', function () {
  return _react.default.createElement("div", {
    style: {
      width: '270px'
    }
  }, _react.default.createElement(_.ReportCard, {
    width: "270px"
  }, _react.default.createElement(_.ReportSummaryTitle, {
    formatter: _formatters.default.abbreviateNumber,
    dataKeys: ['sms'],
    title: "Inbound Leads",
    data: _storyHelpers.data,
    trendData: [_storyHelpers.prevData, _storyHelpers.currData],
    aggregationOptions: {
      type: 'total',
      dataKeys: ['value']
    }
  }), _react.default.createElement(_.Chart, {
    data: _storyHelpers.data,
    height: 100
  }, _react.default.createElement(_.SummaryLine, {
    connectNulls: true,
    dataKey: "sms",
    color: _Colors.default.cobaltBlue
  }))));
}).add('Average Trend', function () {
  return _react.default.createElement("div", {
    style: {
      width: '270px'
    }
  }, _react.default.createElement(_.ReportCard, {
    width: "270px"
  }, _react.default.createElement(_.ReportSummaryTitle, {
    formatter: _formatters.default.humanizeDuration,
    dataKeys: ['sms'],
    title: "Median Response Time",
    data: _storyHelpers.data,
    trendData: [_storyHelpers.currData, _storyHelpers.prevData],
    aggregationOptions: {
      type: 'avg',
      dataKeys: ['value']
    }
  }), _react.default.createElement(_.Chart, {
    data: _storyHelpers.data,
    height: 100
  }, _react.default.createElement(_.SummaryLine, {
    connectNulls: true,
    dataKey: "sms",
    color: _Colors.default.cobaltBlue
  }))));
}).add('Weighted Average Trend', function () {
  return _react.default.createElement("div", {
    style: {
      width: '270px'
    }
  }, _react.default.createElement(_.ReportCard, {
    width: "270px"
  }, _react.default.createElement(_.ReportSummaryTitle, {
    formatter: _formatters.default.roundToPlaces(1),
    dataKeys: ['sms'],
    title: "Site Rating",
    data: _storyHelpers.weightedAvgData,
    trendData: [_storyHelpers.weightedAvgData, _storyHelpers.weightedAvgDataPrev],
    aggregationOptions: {
      type: 'weightedAvg',
      dataKeys: ['dogs', 'cats'],
      options: {
        valueKey: 'cuteness',
        countKey: 'amount'
      }
    }
  }), _react.default.createElement(_.Chart, {
    data: _storyHelpers.weightedAvgData,
    height: 100
  }, _react.default.createElement(_.SummaryLine, {
    connectNulls: true,
    dataKey: "dogs.cuteness",
    color: _Colors.default.cobaltBlue
  }))));
}).add('Prefer Downward Trend', function () {
  return _react.default.createElement("div", {
    style: {
      width: '270px'
    }
  }, _react.default.createElement(_.ReportCard, null, _react.default.createElement(_.ReportSummaryTitle, {
    formatter: _formatters.default.humanizeDuration,
    dataKeys: ['sms'],
    title: "Median Response Time",
    data: _storyHelpers.data,
    preferDown: true,
    trendData: [_storyHelpers.prevData, _storyHelpers.currData],
    aggregationOptions: {
      type: 'avg',
      dataKeys: ['value']
    }
  }), _react.default.createElement(_.Chart, {
    data: _storyHelpers.data,
    height: 100
  }, _react.default.createElement(_.SummaryLine, {
    connectNulls: true,
    dataKey: "sms",
    color: _Colors.default.cobaltBlue
  }))));
}).add('Loading', function () {
  return _react.default.createElement("div", {
    style: {
      width: '270px'
    }
  }, _react.default.createElement(_.ReportCard, {
    loading: true
  }, _react.default.createElement(_.ReportSummaryTitle, {
    formatter: _formatters.default.humanizeDuration,
    dataKeys: ['sms'],
    title: "Median Response Time",
    data: _storyHelpers.data,
    trendData: [_storyHelpers.prevData, _storyHelpers.currData],
    aggregationOptions: {
      type: 'total',
      dataKeys: ['value']
    }
  }), _react.default.createElement(_.Chart, {
    data: _storyHelpers.data,
    height: 100
  }, _react.default.createElement(_.SummaryLine, {
    connectNulls: true,
    dataKey: "sms",
    color: _Colors.default.cobaltBlue
  }))));
}).add('Long title', function () {
  return _react.default.createElement("div", {
    style: {
      width: '270px'
    }
  }, _react.default.createElement(_.ReportCard, {
    width: "270px"
  }, _react.default.createElement(_.ReportSummaryTitle, {
    formatter: _formatters.default.abbreviateNumber,
    dataKeys: ['sms'],
    title: "This title is very long, yes indeed",
    data: _storyHelpers.data,
    trendData: [_storyHelpers.prevData, _storyHelpers.currData],
    aggregationOptions: {
      type: 'total',
      dataKeys: ['value']
    }
  }), _react.default.createElement(_.Chart, {
    data: _storyHelpers.data,
    height: 100
  }, _react.default.createElement(_.SummaryLine, {
    connectNulls: true,
    dataKey: "sms",
    color: _Colors.default.cobaltBlue
  }))));
}).add('Responsive metric size', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_storyHelpers.WindowWidthMonitor, null), _react.default.createElement("div", {
    style: {
      width: '270px'
    }
  }, _react.default.createElement("h3", null, "This will shrink at 1000px:"), _react.default.createElement(_.ReportCard, {
    width: "270px"
  }, _react.default.createElement(_.ReportSummaryTitle, {
    formatter: _formatters.default.abbreviateNumber,
    dataKeys: ['sms'],
    title: "This title is very long, yes indeed",
    data: _storyHelpers.data,
    trendData: [_storyHelpers.prevData, _storyHelpers.currData],
    aggregationOptions: {
      type: 'total',
      dataKeys: ['value']
    },
    smallWidth: 1000
  }), _react.default.createElement(_.Chart, {
    data: _storyHelpers.data,
    height: 100
  }, _react.default.createElement(_.SummaryLine, {
    connectNulls: true,
    dataKey: "sms",
    color: _Colors.default.cobaltBlue
  }))), _react.default.createElement("h3", null, "This will not shrink:"), _react.default.createElement(_.ReportCard, {
    width: "270px"
  }, _react.default.createElement(_.ReportSummaryTitle, {
    formatter: _formatters.default.abbreviateNumber,
    dataKeys: ['sms'],
    title: "This title is very long, yes indeed",
    data: _storyHelpers.data,
    trendData: [_storyHelpers.prevData, _storyHelpers.currData],
    aggregationOptions: {
      type: 'total',
      dataKeys: ['value']
    }
  }), _react.default.createElement(_.Chart, {
    data: _storyHelpers.data,
    height: 100
  }, _react.default.createElement(_.SummaryLine, {
    connectNulls: true,
    dataKey: "sms",
    color: _Colors.default.cobaltBlue
  })))));
});