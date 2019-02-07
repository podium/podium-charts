"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _formatters = _interopRequireDefault(require("./formatters"));

var _colors = _interopRequireDefault(require("./colors"));

var _ = require("./");

var _StoryHelpers = require("./StoryHelpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = [{
  sms: 200,
  text: 1,
  organic: 2,
  date: '2018-01-01T00:00:00.000Z'
}, {
  sms: 3000,
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
var currData = [{
  value: 605,
  granularity: '2018-12-01T00:00:00.000Z'
}, {
  value: 1000,
  granularity: '2018-12-02T00:00:00.000Z'
}, {
  value: 1283,
  granularity: '2018-12-03T00:00:00.000Z'
}, {
  value: 4838,
  granularity: '2018-12-04T00:00:00.000Z'
}, {
  value: 0,
  granularity: '2018-12-05T00:00:00.000Z'
}, {
  value: 492,
  granularity: '2018-12-06T00:00:00.000Z'
}, {
  value: 0,
  granularity: '2018-12-07T00:00:00.000Z'
}, {
  value: 0,
  granularity: '2018-12-08T00:00:00.000Z'
}, {
  value: 0,
  granularity: '2018-12-09T00:00:00.000Z'
}, {
  value: 0,
  granularity: '2018-12-10T00:00:00.000Z'
}];
var prevData = [{
  value: 600,
  granularity: '2018-11-01T00:00:00.000Z'
}, {
  value: 223,
  granularity: '2018-11-02T00:00:00.000Z'
}, {
  value: 0,
  granularity: '2018-11-03T00:00:00.000Z'
}, {
  value: 0,
  granularity: '2018-11-04T00:00:00.000Z'
}, {
  value: 0,
  granularity: '2018-11-05T00:00:00.000Z'
}, {
  value: 454,
  granularity: '2018-11-06T00:00:00.000Z'
}, {
  value: 0,
  granularity: '2018-11-07T00:00:00.000Z'
}, {
  value: 0,
  granularity: '2018-11-08T00:00:00.000Z'
}, {
  value: 0,
  granularity: '2018-11-09T00:00:00.000Z'
}, {
  value: 0,
  granularity: '2018-11-10T00:00:00.000Z'
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
var weightedAvgDataPrev = [{
  dogs: {
    cuteness: 4,
    amount: 9
  },
  cats: {
    cuteness: 1.5,
    amount: 14
  },
  date: '2018-06-15T23:43:32'
}, {
  dogs: {
    cuteness: 1,
    amount: 19
  },
  cats: {
    cuteness: 5,
    amount: 17
  },
  date: '2018-07-15T23:43:32'
}, {
  dogs: {
    cuteness: 2,
    amount: 6
  },
  cats: {
    cuteness: 2.5,
    amount: 7
  },
  date: '2018-08-15T23:43:32'
}];
var timeData = [{
  waitTime: 150,
  date: '2018-08-15T23:43:32'
}, {
  waitTime: 1500,
  date: '2018-09-15T23:43:32'
}, {
  waitTime: 500,
  date: '2018-10-15T23:43:32'
}, {
  waitTime: 980,
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
      summaryTitle: "Reviews",
      aggregationOptions: {
        type: 'total',
        dataKeys: ['organic', 'text']
      }
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
      summaryTitle: "Reviews",
      aggregationOptions: {
        type: 'total',
        dataKeys: ['organic', 'text']
      }
    })
  }), _react.default.createElement(_.Line, {
    name: "Text",
    dataKey: "text",
    color: _colors.default.poppyRed
  }));
});
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
    data: data,
    trendData: [prevData, currData],
    aggregationOptions: {
      type: 'total',
      dataKeys: ['value']
    }
  }), _react.default.createElement(_.Chart, {
    data: data,
    height: 100
  }, _react.default.createElement(_.SummaryLine, {
    connectNulls: true,
    dataKey: "sms",
    color: _colors.default.cobaltBlue
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
    data: data,
    trendData: [currData, prevData],
    aggregationOptions: {
      type: 'avg',
      dataKeys: ['value']
    }
  }), _react.default.createElement(_.Chart, {
    data: data,
    height: 100
  }, _react.default.createElement(_.SummaryLine, {
    connectNulls: true,
    dataKey: "sms",
    color: _colors.default.cobaltBlue
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
    data: weightedAvgData,
    trendData: [weightedAvgData, weightedAvgDataPrev],
    aggregationOptions: {
      type: 'weightedAvg',
      dataKeys: ['dogs', 'cats'],
      options: {
        valueKey: 'cuteness',
        countKey: 'amount'
      }
    }
  }), _react.default.createElement(_.Chart, {
    data: weightedAvgData,
    height: 100
  }, _react.default.createElement(_.SummaryLine, {
    connectNulls: true,
    dataKey: "dogs.cuteness",
    color: _colors.default.cobaltBlue
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
    data: data,
    preferDown: true,
    trendData: [prevData, currData],
    aggregationOptions: {
      type: 'avg',
      dataKeys: ['value']
    }
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
    dataKeys: ['sms'],
    title: "Median Response Time",
    data: data,
    trendData: [prevData, currData],
    aggregationOptions: {
      type: 'total',
      dataKeys: ['value']
    }
  }), _react.default.createElement(_.Chart, {
    data: data,
    height: 100
  }, _react.default.createElement(_.SummaryLine, {
    connectNulls: true,
    dataKey: "sms",
    color: _colors.default.cobaltBlue
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
    data: data,
    trendData: [prevData, currData],
    aggregationOptions: {
      type: 'total',
      dataKeys: ['value']
    }
  }), _react.default.createElement(_.Chart, {
    data: data,
    height: 100
  }, _react.default.createElement(_.SummaryLine, {
    connectNulls: true,
    dataKey: "sms",
    color: _colors.default.cobaltBlue
  }))));
}).add('Responsive metric size', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_StoryHelpers.WindowWidthMonitor, null), _react.default.createElement("div", {
    style: {
      width: '270px'
    }
  }, _react.default.createElement("h3", null, "This will shrink at 1000px:"), _react.default.createElement(_.ReportCard, {
    width: "270px"
  }, _react.default.createElement(_.ReportSummaryTitle, {
    formatter: _formatters.default.abbreviateNumber,
    dataKeys: ['sms'],
    title: "This title is very long, yes indeed",
    data: data,
    trendData: [prevData, currData],
    aggregationOptions: {
      type: 'total',
      dataKeys: ['value']
    },
    smallWidth: 1000
  }), _react.default.createElement(_.Chart, {
    data: data,
    height: 100
  }, _react.default.createElement(_.SummaryLine, {
    connectNulls: true,
    dataKey: "sms",
    color: _colors.default.cobaltBlue
  }))), _react.default.createElement("h3", null, "This will not shrink:"), _react.default.createElement(_.ReportCard, {
    width: "270px"
  }, _react.default.createElement(_.ReportSummaryTitle, {
    formatter: _formatters.default.abbreviateNumber,
    dataKeys: ['sms'],
    title: "This title is very long, yes indeed",
    data: data,
    trendData: [prevData, currData],
    aggregationOptions: {
      type: 'total',
      dataKeys: ['value']
    }
  }), _react.default.createElement(_.Chart, {
    data: data,
    height: 100
  }, _react.default.createElement(_.SummaryLine, {
    connectNulls: true,
    dataKey: "sms",
    color: _colors.default.cobaltBlue
  })))));
});
(0, _react2.storiesOf)('Summary', module).add('WeightedAvg', function () {
  return _react.default.createElement(_.Summary, {
    formatter: _formatters.default.roundToPlaces(1),
    data: weightedAvgData,
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
  })));
}).add('w/Summary', function () {
  return _react.default.createElement(_.ReportCard, null, _react.default.createElement(_.ReportTitle, {
    title: "Total Reviews",
    data: data
  }), _react.default.createElement(_.Chart, {
    data: data
  }, _react.default.createElement(_.YAxis, null), _react.default.createElement(_.XAxis, {
    dataKey: "date",
    tickFormatter: _formatters.default.date()
  }), _react.default.createElement(_.Line, {
    dataKey: "sms",
    color: _colors.default.cobaltBlue
  })), _react.default.createElement(_.Summary, {
    formatter: _formatters.default.roundToPlaces(1),
    data: data,
    aggregationOptions: {
      type: 'total',
      dataKeys: ['sms']
    },
    granularity: "month",
    timeRange: "lastYear"
  }));
}).add('w/Legend (weightedAvg)', function () {
  return _react.default.createElement(_.ReportCard, null, _react.default.createElement(_.ReportTitle, {
    title: "Inbound Leads by Source",
    data: weightedAvgData
  }), _react.default.createElement(_.Chart, {
    data: weightedAvgData
  }, _react.default.createElement(_.YAxis, null), _react.default.createElement(_.XAxis, {
    dataKey: "date",
    tickFormatter: _formatters.default.date()
  }), _react.default.createElement(_.Line, {
    dataKey: "dogs.cuteness",
    name: "Dogs",
    color: _colors.default.cobaltBlue
  }), _react.default.createElement(_.Line, {
    dataKey: "cats.cuteness",
    name: "Cats",
    color: _colors.default.poppyRed
  }), _react.default.createElement(_.Tooltip, {
    content: _react.default.createElement(_.TooltipBody, {
      formatter: _formatters.default.roundToPlaces(1),
      aggregationOptions: {
        type: 'weightedAvg',
        dataKeys: ['dogs', 'cats'],
        options: {
          valueKey: 'cuteness',
          countKey: 'amount'
        }
      },
      summaryTitle: "Animals"
    })
  })), _react.default.createElement(_.Summary, {
    formatter: _formatters.default.roundToPlaces(1),
    data: weightedAvgData,
    aggregationOptions: {
      type: 'weightedAvg',
      dataKeys: ['cats', 'dogs'],
      options: {
        valueKey: 'cuteness',
        countKey: 'amount'
      }
    },
    granularity: "month",
    timeRange: "lastYear"
  }), _react.default.createElement(_.Legend, {
    formatter: _formatters.default.roundToPlaces(1),
    data: weightedAvgData,
    aggregationOptions: {
      type: 'weightedAvg',
      dataKeys: ['cats', 'dogs'],
      options: {
        valueKey: 'cuteness',
        countKey: 'amount'
      }
    },
    displayOptions: [{
      name: 'Dogs',
      dataKey: 'dogs',
      color: _colors.default.cobaltBlue
    }, {
      name: 'Cats',
      dataKey: 'cats',
      color: _colors.default.poppyRed
    }]
  }));
}).add('w/Legend (no agg)', function () {
  return _react.default.createElement(_.ReportCard, null, _react.default.createElement(_.ReportTitle, {
    title: "Inbound Leads by Source",
    data: weightedAvgData
  }), _react.default.createElement(_.Chart, {
    data: weightedAvgData
  }, _react.default.createElement(_.YAxis, null), _react.default.createElement(_.XAxis, {
    dataKey: "date",
    tickFormatter: _formatters.default.date()
  }), _react.default.createElement(_.Line, {
    dataKey: "dogs.cuteness",
    name: "Dogs",
    color: _colors.default.cobaltBlue
  }), _react.default.createElement(_.Line, {
    dataKey: "cats.cuteness",
    name: "Cats",
    color: _colors.default.poppyRed
  }), _react.default.createElement(_.Tooltip, {
    content: _react.default.createElement(_.TooltipBody, {
      formatter: _formatters.default.roundToPlaces(1),
      aggregationOptions: {
        type: 'weightedAvg',
        dataKeys: ['dogs', 'cats'],
        options: {
          valueKey: 'cuteness',
          countKey: 'amount'
        }
      },
      summaryTitle: "Animals"
    })
  })), _react.default.createElement(_.Summary, {
    formatter: _formatters.default.roundToPlaces(1),
    data: weightedAvgData,
    aggregationOptions: {
      type: 'weightedAvg',
      dataKeys: ['cats', 'dogs'],
      options: {
        valueKey: 'cuteness',
        countKey: 'amount'
      }
    },
    granularity: "month",
    timeRange: "lastYear"
  }), _react.default.createElement(_.Legend, {
    data: weightedAvgData,
    displayOptions: [{
      name: 'Dogs',
      dataKey: 'dogs',
      color: _colors.default.cobaltBlue
    }, {
      name: 'Cats',
      dataKey: 'cats',
      color: _colors.default.poppyRed
    }]
  }));
}).add('w/Legend (multiple bars)', function () {
  return _react.default.createElement(_.ReportCard, null, _react.default.createElement(_.ReportTitle, {
    title: "Inbound Leads by Source",
    data: data
  }), _react.default.createElement(_.Chart, {
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
  })), _react.default.createElement(_.Summary, {
    formatter: _formatters.default.roundToPlaces(1),
    data: data,
    aggregationOptions: {
      type: 'avg',
      dataKeys: ['organic', 'text']
    },
    granularity: "month",
    timeRange: "lastYear"
  }), _react.default.createElement(_.Legend, {
    data: weightedAvgData,
    displayOptions: [{
      name: 'Organic',
      dataKey: 'organic',
      color: _colors.default.cobaltBlue
    }, {
      name: 'Text',
      dataKey: 'text',
      color: _colors.default.poppyRed
    }]
  }));
}).add('w/Legend (stacked bars)', function () {
  return _react.default.createElement(_.ReportCard, null, _react.default.createElement(_.ReportTitle, {
    title: "Inbound Leads by Source",
    data: data
  }), _react.default.createElement(_.Chart, {
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
  })), _react.default.createElement(_.Summary, {
    formatter: _formatters.default.roundToPlaces(1),
    data: data,
    aggregationOptions: {
      type: 'avg',
      dataKeys: ['organic', 'text']
    },
    granularity: "month",
    timeRange: "lastYear"
  }), _react.default.createElement(_.Legend, {
    data: weightedAvgData,
    displayOptions: [{
      name: 'Organic',
      dataKey: 'organic',
      color: _colors.default.cobaltBlue
    }, {
      name: 'Text',
      dataKey: 'text',
      color: _colors.default.poppyRed
    }]
  }));
}).add('w/Tooltip', function () {
  return _react.default.createElement(_.ReportCard, null, _react.default.createElement(_.ReportTitle, {
    title: "Cats vs Dogs",
    data: weightedAvgData
  }), _react.default.createElement(_.Chart, {
    data: weightedAvgData
  }, _react.default.createElement(_.YAxis, null), _react.default.createElement(_.XAxis, {
    dataKey: "date",
    tickFormatter: _formatters.default.date()
  }), _react.default.createElement(_.Line, {
    dataKey: "dogs.cuteness",
    name: "Dogs",
    color: _colors.default.poppyRed
  }), _react.default.createElement(_.Line, {
    dataKey: "cats.cuteness",
    name: "Cats",
    color: _colors.default.cobaltBlue
  }), _react.default.createElement(_.Tooltip, {
    content: _react.default.createElement(_.TooltipBody, {
      aggregationOptions: {
        type: 'weightedAvg',
        dataKeys: ['cats', 'dogs'],
        options: {
          countKey: 'amount',
          valueKey: 'cuteness'
        }
      },
      summaryTitle: "Animals",
      formatter: _formatters.default.roundToPlaces(1)
    })
  })), _react.default.createElement(_.Summary, {
    formatter: _formatters.default.roundToPlaces(1),
    data: weightedAvgData,
    aggregationOptions: {
      type: 'weightedAvg',
      options: {
        valueKey: 'cuteness',
        countKey: 'amount'
      },
      dataKeys: ['dogs', 'cats']
    },
    granularity: "month",
    timeRange: "lastYear"
  }));
}).add('w/TooltipBody (single key)', function () {
  return _react.default.createElement(_.ReportCard, null, _react.default.createElement(_.ReportTitle, {
    title: "Single Value Tooltip",
    data: data
  }), _react.default.createElement(_.Chart, {
    data: data
  }, _react.default.createElement(_.YAxis, null), _react.default.createElement(_.XAxis, {
    dataKey: "date",
    tickFormatter: _formatters.default.date()
  }), _react.default.createElement(_.Line, {
    dataKey: "sms",
    name: "SMS",
    color: _colors.default.poppyRed
  }), _react.default.createElement(_.Tooltip, {
    content: _react.default.createElement(_.TooltipBody, {
      summaryTitle: "Minutes"
    })
  })), _react.default.createElement(_.Summary, {
    formatter: _formatters.default.commatize,
    data: data,
    aggregationOptions: {
      type: 'total',
      dataKeys: ['sms']
    },
    granularity: "month",
    timeRange: "lastYear"
  }));
}).add('w/TooltipBodyTime', function () {
  return _react.default.createElement(_.ReportCard, null, _react.default.createElement(_.ReportTitle, {
    title: "Wait Time",
    data: timeData
  }), _react.default.createElement(_.Chart, {
    data: timeData
  }, _react.default.createElement(_.YAxis, null), _react.default.createElement(_.XAxis, {
    dataKey: "date",
    tickFormatter: _formatters.default.date()
  }), _react.default.createElement(_.Line, {
    dataKey: "waitTime",
    name: "Wait Time",
    color: _colors.default.poppyRed
  }), _react.default.createElement(_.Tooltip, {
    content: _react.default.createElement(_.TooltipBodyTime, null)
  })), _react.default.createElement(_.Summary, {
    formatter: _formatters.default.commatize,
    data: timeData,
    aggregationOptions: {
      type: 'total',
      dataKeys: ['waitTime']
    },
    granularity: "month",
    timeRange: "lastYear"
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
    aggregationOptions: {
      type: 'total',
      dataKeys: ['text', 'organic']
    },
    granularity: "month",
    timeRange: "lastYear"
  }), _react.default.createElement(_.Legend, {
    data: data,
    displayOptions: [{
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
  }, _react.default.createElement(_.YAxis, null), _react.default.createElement(_.XAxis, {
    dataKey: "date",
    tickFormatter: _formatters.default.date()
  }), _react.default.createElement(_.Line, {
    dataKey: "sms",
    color: _colors.default.cobaltBlue
  })), _react.default.createElement(_.Summary, {
    formatter: _formatters.default.roundToPlaces(1),
    data: data,
    aggregationOptions: {
      type: 'total',
      dataKeys: ['text', 'organic']
    },
    granularity: "month",
    timeRange: "custom"
  }), _react.default.createElement(_.Legend, {
    formatter: _formatters.default.roundToPlaces(1),
    data: data,
    aggregationOptions: {
      type: 'total',
      dataKeys: ['organic', 'text']
    },
    displayOptions: [{
      name: 'Organic',
      dataKey: 'organic',
      color: _colors.default.cobaltBlue
    }, {
      name: 'Text',
      dataKey: 'text',
      color: _colors.default.poppyRed
    }]
  }));
}).add('null data', function () {
  return _react.default.createElement(_.ReportCard, null, _react.default.createElement(_.ReportTitle, {
    title: "Cats vs Dogs",
    data: [],
    timeRange: "custom",
    dateStart: "2018-12-05",
    dateEnd: "2019-01-10"
  }), _react.default.createElement(_.Chart, {
    data: []
  }, _react.default.createElement(_.YAxis, {
    tickFormatter: _formatters.default.abbreviateNumber
  }), _react.default.createElement(_.XAxis, {
    dataKey: "date",
    tickFormatter: _formatters.default.date()
  }), _react.default.createElement(_.Bar, {
    dataKey: "dogs.cuteness",
    name: "Dogs",
    color: _colors.default.poppyRed
  }), _react.default.createElement(_.Bar, {
    dataKey: "cats.cuteness",
    name: "Cats",
    color: _colors.default.cobaltBlue
  }), _react.default.createElement(_.Tooltip, {
    content: _react.default.createElement(_.TooltipBody, {
      aggregationOptions: {
        type: 'weightedAvg',
        dataKeys: ['cats', 'dogs'],
        options: {
          countKey: 'amount',
          valueKey: 'cuteness'
        }
      },
      summaryTitle: "Animals",
      formatter: _formatters.default.roundToPlaces(1)
    })
  })), _react.default.createElement(_.Summary, {
    formatter: _formatters.default.roundToPlaces(1),
    data: [],
    aggregationOptions: {
      type: 'weightedAvg',
      options: {
        valueKey: 'cuteness',
        countKey: 'amount'
      },
      dataKeys: ['dogs', 'cats']
    },
    granularity: "month",
    timeRange: "custom",
    dateStart: "2018-12-05",
    dateEnd: "2019-01-10"
  }));
});
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
    return _react.default.createElement(_StoryHelpers.Palette, {
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