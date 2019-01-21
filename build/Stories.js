"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _formatters = _interopRequireDefault(require("./formatters"));

var _colors = _interopRequireDefault(require("./colors"));

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Palette(_ref) {
  var color = _ref.color,
      name = _ref.name;
  var paletteWrapper = {
    width: 150,
    height: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 12,
    flexDirection: 'column'
  };
  var paletteLabel = {
    padding: 8,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white'
  };
  return _react.default.createElement("div", {
    style: _objectSpread({}, paletteWrapper, {
      backgroundColor: color
    })
  }, _react.default.createElement("div", {
    style: paletteLabel
  }, _react.default.createElement("div", null, name), _react.default.createElement("div", null, color)));
}

var data = [{
  sms: 200,
  text: 1,
  organic: 2,
  date: '2018-01-01T00:00:00.000Z'
}, {
  sms: 30000,
  text: 5,
  organic: 0,
  date: '2018-02-01T00:00:00.000Z'
}, {
  sms: 500,
  text: 3,
  date: '2018-03-01T00:00:00.000Z'
}, {
  sms: 200,
  text: 0,
  organic: 3,
  date: '2018-04-01T00:00:00.000Z'
}, {
  sms: 300,
  text: 1,
  organic: 4,
  date: '2018-05-01T00:00:00.000Z'
}, {
  sms: 4000,
  text: 2.33,
  organic: 8,
  date: '2018-06-01T00:00:00.000Z'
}, {
  sms: 400,
  text: 2.33,
  organic: 9,
  date: '2018-07-01T00:00:00.000Z'
}, {
  sms: 200,
  text: 2.33,
  organic: 15,
  date: '2018-08-01T00:00:00.000Z'
}, {
  sms: 100,
  text: 5,
  organic: 13,
  date: '2018-09-01T00:00:00.000Z'
}, {
  sms: null,
  text: null,
  organic: null,
  date: '2018-10-01T00:00:00.000Z'
}, {
  sms: 100,
  text: 2.33,
  organic: 0,
  date: '2018-11-01T00:00:00.000Z'
}, {
  sms: 400,
  text: 2.33,
  organic: 0,
  date: '2018-12-01T00:00:00.000Z'
}];
var weightedAvgData = [{
  dogs: {
    cuteness: 5,
    amount: 10
  },
  cats: {
    cuteness: 2.5,
    amount: 15
  },
  date: '2018-09-15T23:43:32'
}, {
  dogs: {
    cuteness: 2,
    amount: 20
  },
  cats: {
    cuteness: 7,
    amount: 18
  },
  date: '2018-10-15T23:43:32'
}, {
  dogs: {
    cuteness: 1,
    amount: 5
  },
  cats: {
    cuteness: 0.5,
    amount: 8
  },
  date: '2018-11-15T23:43:32'
}];
(0, _react2.storiesOf)('Bar Chart', module).add('Small', function () {
  return _react.default.createElement(_.Chart, {
    data: data,
    width: 200,
    height: 100
  }, _react.default.createElement(_.Bar, {
    dataKey: "organic",
    color: "#000"
  }));
}).add('Axis', function () {
  return _react.default.createElement(_.Chart, {
    data: data
  }, _react.default.createElement(_.YAxis, {
    tickFormatter: _formatters.default.humanizeDuration
  }), _react.default.createElement(_.XAxis, {
    dataKey: "date",
    tickFormatter: _formatters.default.date()
  }), _react.default.createElement(_.Bar, {
    dataKey: "sms",
    color: _colors.default.cobaltBlue
  }));
}).add('Tooltip', function () {
  return _react.default.createElement(_.Chart, {
    data: data
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
    color: _colors.default.cobaltBlue
  }), _react.default.createElement(_.Bar, {
    name: "Text",
    dataKey: "text",
    color: _colors.default.poppyRed
  }));
}).add('Stacked', function () {
  return _react.default.createElement(_.Chart, {
    data: data
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
    color: _colors.default.cobaltBlue
  }), _react.default.createElement(_.Bar, {
    name: "Text",
    stackId: "1",
    dataKey: "text",
    color: _colors.default.poppyRed
  }));
}).add('Multiple', function () {
  return _react.default.createElement(_.Chart, {
    data: data
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
    color: _colors.default.cobaltBlue
  }), _react.default.createElement(_.Bar, {
    name: "Text",
    dataKey: "text",
    color: _colors.default.poppyRed
  }));
});
(0, _react2.storiesOf)('Line Chart', module).add('Small', function () {
  return _react.default.createElement(_.Chart, {
    data: data,
    width: 200,
    height: 100
  }, _react.default.createElement(_.Line, {
    dataKey: "organic",
    color: "#000"
  }));
}).add('Axis', function () {
  return _react.default.createElement(_.Chart, {
    data: data
  }, _react.default.createElement(_.YAxis, {
    tickFormatter: _formatters.default.abbreviateNumber
  }), _react.default.createElement(_.XAxis, {
    dataKey: "date",
    tickFormatter: _formatters.default.date()
  }), _react.default.createElement(_.Line, {
    dataKey: "sms",
    color: _colors.default.cobaltBlue
  }));
}).add('TooltipBodyTime', function () {
  return _react.default.createElement(_.Chart, {
    data: data
  }, _react.default.createElement(_.YAxis, {
    tickFormatter: _formatters.default.abbreviateTime
  }), _react.default.createElement(_.XAxis, {
    dataKey: "date",
    tickFormatter: _formatters.default.date()
  }), _react.default.createElement(_.Tooltip, {
    content: _react.default.createElement(_.TooltipBodyTime, null)
  }), _react.default.createElement(_.Line, {
    dataKey: "sms",
    color: _colors.default.armyGreen
  }));
}).add('Multiple Lines', function () {
  return _react.default.createElement(_.Chart, {
    data: data
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
    color: _colors.default.cobaltBlue
  }), _react.default.createElement(_.Line, {
    name: "SO CAN THIS",
    dataKey: "text",
    color: _colors.default.poppyRed
  }));
});
(0, _react2.storiesOf)('Mixed Chart', module).add('Mixed', function () {
  return _react.default.createElement(_.Chart, {
    data: data
  }, _react.default.createElement(_.YAxis, null), _react.default.createElement(_.XAxis, {
    dataKey: "date",
    tickFormatter: _formatters.default.date()
  }), _react.default.createElement(_.Bar, {
    name: "Organic",
    dataKey: "organic",
    color: _colors.default.cobaltBlue
  }), _react.default.createElement(_.Tooltip, {
    content: _react.default.createElement(_.TooltipBody, {
      summaryType: "total",
      summaryTitle: "Reviews"
    })
  }), _react.default.createElement(_.Line, {
    name: "Text",
    dataKey: "text",
    color: _colors.default.poppyRed
  }));
});
(0, _react2.storiesOf)('Tooltip', module).add('TooltipBody', function () {
  return _react.default.createElement("div", {
    style: {
      width: 100
    }
  }, _react.default.createElement(_.TooltipBody, {
    summaryType: "total",
    summaryTitle: "Reviews",
    payload: [{
      name: 'Google',
      value: 1,
      color: _colors.default.cobaltBlue,
      dataKey: 'google'
    }, {
      name: 'Jooble',
      value: 2,
      color: _colors.default.poppyRed,
      dataKey: 'jooble'
    }]
  }));
}, {
  info: {
    excludedPropTypes: ['payload']
  }
}).add('TooltipBodyTime', function () {
  return _react.default.createElement("div", {
    style: {
      width: 100
    }
  }, _react.default.createElement(_.TooltipBodyTime, {
    payload: [{
      name: 'Google',
      value: 6000,
      color: _colors.default.cobaltBlue,
      dataKey: 'google'
    }, {
      name: 'Jooble',
      value: 80000,
      color: _colors.default.poppyRed,
      dataKey: 'jooble'
    }]
  }));
}, {
  info: {
    excludedPropTypes: ['payload']
  }
});
(0, _react2.storiesOf)('Report Card Summary', module).add('Default', function () {
  return _react.default.createElement("div", {
    style: {
      width: '270px'
    }
  }, _react.default.createElement(_.ReportCard, {
    width: "270px"
  }, _react.default.createElement(_.ReportSummaryTitle, {
    formatter: _formatters.default.humanizeDuration,
    summaryType: "total",
    dataKeys: ['sms'],
    title: "Median Response Time",
    data: data,
    trendDirection: "up",
    tooltip: "This is some data!"
  }), _react.default.createElement(_.Chart, {
    data: data,
    height: 100
  }, _react.default.createElement(_.SummaryLine, {
    connectNulls: true,
    dataKey: "sms",
    color: _colors.default.cobaltBlue
  }))));
}).add('Prefer Downward Trend', function () {
  return _react.default.createElement("div", {
    style: {
      width: '270px'
    }
  }, _react.default.createElement(_.ReportCard, null, _react.default.createElement(_.ReportSummaryTitle, {
    formatter: _formatters.default.humanizeDuration,
    summaryType: "total",
    dataKeys: ['sms'],
    title: "Median Response Time",
    data: data,
    trendDirection: "down",
    preferDown: true,
    tooltip: "This is some data!"
  }), _react.default.createElement(_.Chart, {
    data: data,
    height: 100
  }, _react.default.createElement(_.SummaryLine, {
    connectNulls: true,
    dataKey: "sms",
    color: _colors.default.cobaltBlue
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
    summaryType: "total",
    dataKeys: ['sms'],
    title: "Median Response Time",
    data: data,
    trendDirection: "up",
    tooltip: "This is some data!"
  }), _react.default.createElement(_.Chart, {
    data: data,
    height: 100
  }, _react.default.createElement(_.SummaryLine, {
    connectNulls: true,
    dataKey: "sms",
    color: _colors.default.cobaltBlue
  }))));
});
(0, _react2.storiesOf)('Summary', module).add('WeightedAvg', function () {
  return _react.default.createElement(_.Summary, {
    formatter: _formatters.default.roundToPlaces(1),
    data: weightedAvgData,
    summaryType: "weightedAvg",
    dataKeys: ['dogs', 'cats'],
    granularity: "month",
    timeRange: "lastYear",
    aggregationOptions: {
      weightedAvg: {
        valueKey: 'cuteness',
        countKey: 'amount'
      }
    }
  });
});
(0, _react2.storiesOf)('Report Card', module).add('w/Chart,Title', function () {
  return _react.default.createElement(_.ReportCard, null, _react.default.createElement(_.ReportTitle, {
    title: "Total Reviews",
    data: data
  }), _react.default.createElement(_.Chart, {
    data: data
  }, _react.default.createElement(_.YAxis, {
    tickFormatter: _formatters.default.abbreviateTime
  }), _react.default.createElement(_.XAxis, {
    dataKey: "date",
    tickFormatter: _formatters.default.date()
  }), _react.default.createElement(_.Line, {
    dataKey: "sms",
    color: _colors.default.cobaltBlue
  }), _react.default.createElement(_.Tooltip, {
    content: _react.default.createElement(_.TooltipBodyTime, null)
  })));
}).add('w/Summary', function () {
  return _react.default.createElement(_.ReportCard, null, _react.default.createElement(_.ReportTitle, {
    title: "Total Reviews",
    data: data
  }), _react.default.createElement(_.Chart, {
    data: data
  }, _react.default.createElement(_.YAxis, {
    tickFormatter: _formatters.default.abbreviateTime
  }), _react.default.createElement(_.XAxis, {
    dataKey: "date",
    tickFormatter: _formatters.default.date()
  }), _react.default.createElement(_.Line, {
    dataKey: "sms",
    color: _colors.default.cobaltBlue
  }), _react.default.createElement(_.Tooltip, {
    content: _react.default.createElement(_.TooltipBodyTime, null)
  })), _react.default.createElement(_.Summary, {
    formatter: _formatters.default.roundToPlaces(1),
    data: data,
    summaryType: "total",
    dataKeys: ['text', 'organic'],
    granularity: "month",
    timeRange: "lastYear"
  }));
}).add('w/Legend', function () {
  return _react.default.createElement(_.ReportCard, null, _react.default.createElement(_.ReportTitle, {
    title: "Total Reviews",
    data: data
  }), _react.default.createElement(_.Chart, {
    data: data
  }, _react.default.createElement(_.YAxis, {
    tickFormatter: _formatters.default.abbreviateTime
  }), _react.default.createElement(_.XAxis, {
    dataKey: "date",
    tickFormatter: _formatters.default.date()
  }), _react.default.createElement(_.Line, {
    dataKey: "sms",
    color: _colors.default.cobaltBlue
  }), _react.default.createElement(_.Tooltip, {
    content: _react.default.createElement(_.TooltipBodyTime, null)
  })), _react.default.createElement(_.Summary, {
    formatter: _formatters.default.roundToPlaces(1),
    data: data,
    summaryType: "total",
    dataKeys: ['text', 'organic'],
    granularity: "month",
    timeRange: "lastYear"
  }), _react.default.createElement(_.Legend, {
    data: data,
    summaryType: "total",
    config: [{
      name: 'Organic',
      dataKey: 'organic',
      color: _colors.default.cobaltBlue
    }, {
      name: 'Text',
      dataKey: 'text',
      color: _colors.default.poppyRed
    }]
  }));
}).add('Loading', function () {
  return _react.default.createElement(_.ReportCard, {
    loading: true
  }, _react.default.createElement(_.ReportTitle, {
    title: "Total Reviews",
    data: data
  }), _react.default.createElement(_.Granularity, {
    timeRange: "lastYear",
    onChange: function onChange(res) {
      console.log("You picked ".concat(res));
    }
  }), _react.default.createElement(_.Chart, {
    data: data
  }, _react.default.createElement(_.YAxis, {
    tickFormatter: _formatters.default.abbreviateTime
  }), _react.default.createElement(_.XAxis, {
    dataKey: "date",
    tickFormatter: _formatters.default.date()
  }), _react.default.createElement(_.Line, {
    dataKey: "sms",
    color: _colors.default.cobaltBlue
  }), _react.default.createElement(_.Tooltip, {
    content: _react.default.createElement(_.TooltipBodyTime, null)
  })), _react.default.createElement(_.Summary, {
    formatter: _formatters.default.roundToPlaces(1),
    data: data,
    summaryType: "total",
    dataKeys: ['text', 'organic'],
    granularity: "month",
    timeRange: "lastYear"
  }), _react.default.createElement(_.Legend, {
    data: data,
    summaryType: "total",
    config: [{
      name: 'Organic',
      dataKey: 'organic',
      color: _colors.default.cobaltBlue
    }, {
      name: 'Text',
      dataKey: 'text',
      color: _colors.default.poppyRed
    }]
  }));
}).add('w/Granularity', function () {
  return _react.default.createElement(_.ReportCard, null, _react.default.createElement(_.ReportTitle, {
    title: "Total Reviews",
    data: data
  }), _react.default.createElement(_.Granularity, {
    timeRange: "lastYear",
    onChange: function onChange(res) {
      console.log("You picked ".concat(res));
    }
  }), _react.default.createElement(_.Chart, {
    data: data
  }, _react.default.createElement(_.YAxis, {
    tickFormatter: _formatters.default.abbreviateTime
  }), _react.default.createElement(_.XAxis, {
    dataKey: "date",
    tickFormatter: _formatters.default.date()
  }), _react.default.createElement(_.Line, {
    dataKey: "sms",
    color: _colors.default.cobaltBlue
  }), _react.default.createElement(_.Tooltip, {
    content: _react.default.createElement(_.TooltipBodyTime, null)
  })), _react.default.createElement(_.Summary, {
    formatter: _formatters.default.roundToPlaces(1),
    data: data,
    summaryType: "total",
    dataKeys: ['text', 'organic'],
    granularity: "month",
    timeRange: "custom"
  }), _react.default.createElement(_.Legend, {
    data: data,
    summaryType: "total",
    config: [{
      name: 'Organic',
      dataKey: 'organic',
      color: _colors.default.cobaltBlue
    }, {
      name: 'Text',
      dataKey: 'text',
      color: _colors.default.poppyRed
    }]
  }));
});
(0, _react2.storiesOf)('colors', module).add('default', function () {
  var colorsMap = Object.keys(_colors.default).map(function (color) {
    return {
      value: _colors.default[color],
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
    return _react.default.createElement(Palette, {
      color: color.value,
      name: color.name
    });
  }));
});
(0, _react2.storiesOf)('formatters', module).add('date', function () {
  return _react.default.createElement("div", null, _react.default.createElement("div", null, "formatters.date('hour')", _react.default.createElement("div", null, "->"), _formatters.default.date('hour')('2018-01-15T23:43:32')), _react.default.createElement("br", null), _react.default.createElement("div", null, "formatters.date('day')", _react.default.createElement("div", null, "->"), _formatters.default.date('day')('2018-01-15T23:43:32')), _react.default.createElement("br", null), _react.default.createElement("div", null, "formatters.date('week')", _react.default.createElement("div", null, "->"), _formatters.default.date('week')('2018-01-15T23:43:32')), _react.default.createElement("br", null), _react.default.createElement("div", null, "formatters.date('month')", _react.default.createElement("div", null, "->"), _formatters.default.date('month')('2018-01-15T23:43:32')), _react.default.createElement("br", null), _react.default.createElement("div", null, "formatters.date('year')", _react.default.createElement("div", null, "->"), _formatters.default.date('year')('2018-01-15T23:43:32')));
}).add('capitalize', function () {
  return _react.default.createElement("div", null, "formatters.capitalize(\"podium\")", _react.default.createElement("div", null, "->"), _formatters.default.capitalize('podium'));
}).add('abbreviateNumber', function () {
  return _react.default.createElement("div", null, "formatters.abbreviateNumber(100000000)", _react.default.createElement("div", null, "->"), _formatters.default.abbreviateNumber(100000000));
}).add('humanizeDuration', function () {
  return _react.default.createElement("div", null, "formatters.humanizeDuration(86400)", _react.default.createElement("div", null, "->"), _formatters.default.humanizeDuration(86400));
}).add('commatize', function () {
  return _react.default.createElement("div", null, "formatters.commatize(\"\")", _react.default.createElement("div", null, "->"), _formatters.default.commatize(1000000000));
});