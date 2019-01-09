"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _formatters = _interopRequireDefault(require("./formatters"));

var _podiumUi = require("@podiumhq/podium-ui");

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = [{
  sms: 200,
  text: 1,
  organic: 2,
  date: '2018-01-15T23:43:32'
}, {
  sms: 30000,
  text: 5,
  organic: 0,
  date: '2018-02-15T23:43:32'
}, {
  sms: 500,
  text: 3,
  date: '2018-03-15T23:43:32'
}, {
  sms: 200,
  text: 0,
  organic: 3,
  date: '2018-04-15T23:43:32'
}, {
  sms: 300,
  text: 1,
  organic: 4,
  date: '2018-05-15T23:43:32'
}, {
  sms: 4000,
  text: 2.33,
  organic: 8,
  date: '2018-06-15T23:43:32'
}, {
  sms: 400,
  text: 2.33,
  organic: 9,
  date: '2018-07-15T23:43:32'
}, {
  sms: 200,
  text: 2.33,
  organic: 15,
  date: '2018-08-15T23:43:32'
}, {
  sms: 100,
  text: 5,
  organic: 13,
  date: '2018-09-15T23:43:32'
}, {
  sms: null,
  text: null,
  organic: null,
  date: '2018-10-15T23:43:32'
}, {
  sms: 100,
  text: 2.33,
  organic: 0,
  date: '2018-11-15T23:43:32'
}, {
  sms: 400,
  text: 2.33,
  organic: 0,
  date: '2018-12-15T23:43:32'
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
    color: _podiumUi.colors.cobaltBlue
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
    dataKey: "organic",
    color: _podiumUi.colors.cobaltBlue
  }), _react.default.createElement(_.Bar, {
    dataKey: "text",
    color: _podiumUi.colors.poppyRed
  }));
}).add('Custom Named Data', function () {
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
    name: "My Custom Name!",
    dataKey: "organic",
    color: _podiumUi.colors.cobaltBlue
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
    stackId: "1",
    dataKey: "organic",
    color: _podiumUi.colors.cobaltBlue
  }), _react.default.createElement(_.Bar, {
    stackId: "1",
    dataKey: "text",
    color: _podiumUi.colors.poppyRed
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
    dataKey: "organic",
    color: _podiumUi.colors.cobaltBlue
  }), _react.default.createElement(_.Bar, {
    dataKey: "text",
    color: _podiumUi.colors.poppyRed
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
    color: _podiumUi.colors.cobaltBlue
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
    color: _podiumUi.colors.armyGreen
  }));
}).add('Custom Named Data', function () {
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
    name: "My Custom Name That Is Super Long!",
    dataKey: "text",
    color: _podiumUi.colors.cobaltBlue
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
    dataKey: "organic",
    color: _podiumUi.colors.cobaltBlue
  }), _react.default.createElement(_.Line, {
    dataKey: "text",
    color: _podiumUi.colors.poppyRed
  }));
});
(0, _react2.storiesOf)('Mixed Chart', module).add('Mixed', function () {
  return _react.default.createElement(_.Chart, {
    data: data
  }, _react.default.createElement(_.YAxis, null), _react.default.createElement(_.XAxis, {
    dataKey: "date",
    tickFormatter: _formatters.default.date()
  }), _react.default.createElement(_.Bar, {
    dataKey: "organic",
    color: _podiumUi.colors.cobaltBlue
  }), _react.default.createElement(_.Tooltip, {
    content: _react.default.createElement(_.TooltipBody, {
      summaryType: "total",
      summaryTitle: "Reviews"
    })
  }), _react.default.createElement(_.Line, {
    dataKey: "text",
    color: _podiumUi.colors.poppyRed
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
      value: 1,
      color: _podiumUi.colors.cobaltBlue,
      dataKey: 'google'
    }, {
      value: 2,
      color: _podiumUi.colors.poppyRed,
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
      value: 6000,
      color: _podiumUi.colors.cobaltBlue,
      dataKey: 'google'
    }, {
      value: 80000,
      color: _podiumUi.colors.poppyRed,
      dataKey: 'jooble'
    }]
  }));
}, {
  info: {
    excludedPropTypes: ['payload']
  }
});
(0, _react2.storiesOf)('Report Card Summary', module).add('Default', function () {
  return _react.default.createElement(_.ReportCard, {
    width: "270px"
  }, _react.default.createElement(_.ReportSummaryTitle, {
    formatter: _formatters.default.humanizeDuration,
    summaryType: "total",
    dataKeys: ['sms'],
    title: "Median Response Time",
    data: data,
    trendDirection: "up"
  }), _react.default.createElement(_.Chart, {
    data: data,
    height: 100
  }, _react.default.createElement(_.SummaryLine, {
    connectNulls: true,
    dataKey: "sms",
    color: _podiumUi.colors.cobaltBlue
  })));
}).add('Prefer Downward Trend', function () {
  return _react.default.createElement(_.ReportCard, {
    width: "270px"
  }, _react.default.createElement(_.ReportSummaryTitle, {
    formatter: _formatters.default.humanizeDuration,
    summaryType: "total",
    dataKeys: ['sms'],
    title: "Median Response Time",
    data: data,
    trendDirection: "down",
    preferDown: true
  }), _react.default.createElement(_.Chart, {
    data: data,
    height: 100
  }, _react.default.createElement(_.SummaryLine, {
    connectNulls: true,
    dataKey: "sms",
    color: _podiumUi.colors.cobaltBlue
  })));
}).add('Loading', function () {
  return _react.default.createElement(_.ReportCardSummaryLoading, {
    width: "270px",
    title: "Median Response Time"
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
    color: _podiumUi.colors.cobaltBlue
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
    color: _podiumUi.colors.cobaltBlue
  }), _react.default.createElement(_.Tooltip, {
    content: _react.default.createElement(_.TooltipBodyTime, null)
  })), _react.default.createElement(_.Summary, {
    formatter: _formatters.default.roundToPlaces(1),
    data: data,
    summaryType: "total",
    dataKeys: ['text', 'organic'],
    granularity: "week"
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
    color: _podiumUi.colors.cobaltBlue
  }), _react.default.createElement(_.Tooltip, {
    content: _react.default.createElement(_.TooltipBodyTime, null)
  })), _react.default.createElement(_.Summary, {
    formatter: _formatters.default.roundToPlaces(1),
    data: data,
    summaryType: "total",
    dataKeys: ['text', 'organic'],
    granularity: "week"
  }), _react.default.createElement(_.Legend, {
    data: data,
    summaryType: "total",
    config: [{
      dataKey: 'organic',
      color: _podiumUi.colors.cobaltBlue
    }, {
      dataKey: 'text',
      color: _podiumUi.colors.poppyRed
    }]
  }));
}).add('Loading', function () {
  return _react.default.createElement(_.ReportCardLoading, {
    title: "Median Response Time"
  });
}).add('w/Granularity', function () {
  return _react.default.createElement(_.ReportCard, null, _react.default.createElement(_.ReportTitle, {
    title: "Total Reviews",
    data: data
  }), _react.default.createElement(_.Granularity, {
    timeRange: "monthToDate",
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
    color: _podiumUi.colors.cobaltBlue
  }), _react.default.createElement(_.Tooltip, {
    content: _react.default.createElement(_.TooltipBodyTime, null)
  })), _react.default.createElement(_.Summary, {
    formatter: _formatters.default.roundToPlaces(1),
    data: data,
    summaryType: "total",
    dataKeys: ['text', 'organic'],
    granularity: "week"
  }), _react.default.createElement(_.Legend, {
    data: data,
    summaryType: "total",
    config: [{
      dataKey: 'organic',
      color: _podiumUi.colors.cobaltBlue
    }, {
      dataKey: 'text',
      color: _podiumUi.colors.poppyRed
    }]
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
});