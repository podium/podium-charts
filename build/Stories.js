"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _formatters = _interopRequireDefault(require("./formatters"));

var _podiumUi = require("podium-ui");

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = [{
  sms: 200,
  text: 1,
  organic: 2,
  date: '2018-01-15T23:43:32'
}, {
  sms: 3000,
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
  sms: 400,
  text: 2.33,
  organic: 1,
  date: '2018-08-15T23:43:32'
}, {
  sms: 300,
  text: 2.33,
  organic: 0,
  date: '2018-09-15T23:43:32'
}, {
  sms: 400,
  text: 2.33,
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
    tickFormatter: _formatters.default.date
  }), _react.default.createElement(_.Bar, {
    dataKey: "sms",
    color: _podiumUi.colors.cobaltBlue
  }));
}).add('Tooltip', function () {
  return _react.default.createElement(_.Chart, {
    data: data
  }, _react.default.createElement(_.YAxis, null), _react.default.createElement(_.XAxis, {
    dataKey: "date",
    tickFormatter: _formatters.default.date
  }), _react.default.createElement(_.Tooltip, {
    content: _react.default.createElement(_.TooltipBody, {
      summaryType: "total",
      summaryTitle: "Reviews"
    })
  }), _react.default.createElement(_.Bar, {
    dataKey: "organic",
    color: _podiumUi.colors.cobaltBlue
  }));
}).add('Custom Named Data', function () {
  return _react.default.createElement(_.Chart, {
    data: data
  }, _react.default.createElement(_.YAxis, null), _react.default.createElement(_.XAxis, {
    dataKey: "date",
    tickFormatter: _formatters.default.date
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
    tickFormatter: _formatters.default.date
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
    tickFormatter: _formatters.default.date
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
    tickFormatter: _formatters.default.date
  }), _react.default.createElement(_.Line, {
    dataKey: "sms",
    color: _podiumUi.colors.cobaltBlue
  }));
}).add('Tooltip', function () {
  return _react.default.createElement(_.Chart, {
    data: data
  }, _react.default.createElement(_.YAxis, null), _react.default.createElement(_.XAxis, {
    dataKey: "date",
    tickFormatter: _formatters.default.date
  }), _react.default.createElement(_.Tooltip, {
    content: _react.default.createElement(_.TooltipBody, {
      summaryType: "total",
      summaryTitle: "Reviews"
    })
  }), _react.default.createElement(_.Line, {
    dataKey: "text",
    color: _podiumUi.colors.armyGreen
  }));
}).add('Custom Named Data', function () {
  return _react.default.createElement(_.Chart, {
    data: data
  }, _react.default.createElement(_.YAxis, null), _react.default.createElement(_.XAxis, {
    dataKey: "date",
    tickFormatter: _formatters.default.date
  }), _react.default.createElement(_.Tooltip, {
    content: _react.default.createElement(_.TooltipBody, {
      summaryType: "total",
      summaryTitle: "Reviews"
    })
  }), _react.default.createElement(_.Line, {
    name: "My Custom Name!",
    dataKey: "text",
    color: _podiumUi.colors.cobaltBlue
  }));
}).add('Multiple Lines', function () {
  return _react.default.createElement(_.Chart, {
    data: data
  }, _react.default.createElement(_.YAxis, null), _react.default.createElement(_.XAxis, {
    dataKey: "date",
    tickFormatter: _formatters.default.date
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
    tickFormatter: _formatters.default.date
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
(0, _react2.storiesOf)('Tooltip', module).add('Tooltip Primary', function () {
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
    }]
  }));
}, {
  info: {
    excludedPropTypes: ['payload']
  }
});
(0, _react2.storiesOf)('Summary', module).add('Default', function () {
  return _react.default.createElement(_.Summary, {
    data: data,
    summaryType: "total",
    dataKeys: ['text', 'organic']
  });
});
(0, _react2.storiesOf)('Legend', module).add('Default', function () {
  return _react.default.createElement(_.Legend, {
    data: data,
    summaryType: "total",
    config: [{
      dataKey: 'organic',
      color: _podiumUi.colors.cobaltBlue
    }, {
      dataKey: 'text',
      color: _podiumUi.colors.poppyRed
    }]
  });
}).add('Custom Named Data', function () {
  return _react.default.createElement(_.Legend, {
    data: data,
    summaryType: "total",
    config: [{
      name: 'My Custom Name!',
      dataKey: 'organic',
      color: _podiumUi.colors.cobaltBlue
    }, {
      name: 'My Other Custom Name!',
      dataKey: 'text',
      color: _podiumUi.colors.poppyRed
    }]
  });
});
(0, _react2.storiesOf)('formatters', module).add('date', function () {
  return _react.default.createElement("div", null, "formatters.date(\"2018-01-15T23:43:32\")", _react.default.createElement("div", null, "->"), _formatters.default.date('2018-01-15T23:43:32'));
}).add('capitalize', function () {
  return _react.default.createElement("div", null, "formatters.capitalize(\"podium\")", _react.default.createElement("div", null, "->"), _formatters.default.capitalize('podium'));
}).add('abbreviateNumber', function () {
  return _react.default.createElement("div", null, "formatters.abbreviateNumber(100000000)", _react.default.createElement("div", null, "->"), _formatters.default.abbreviateNumber(100000000));
}).add('humanizeDuration', function () {
  return _react.default.createElement("div", null, "formatters.humanizeDuration(86400)", _react.default.createElement("div", null, "->"), _formatters.default.humanizeDuration(86400));
});
(0, _react2.storiesOf)('Report Card', module).add('default', function () {
  return _react.default.createElement(_.ReportCard, {
    title: _react.default.createElement(_.ReportTitle, {
      title: "Total Reviews",
      data: data
    }),
    chart: _react.default.createElement(_.Chart, {
      data: data
    }, _react.default.createElement(_.YAxis, null), _react.default.createElement(_.XAxis, {
      dataKey: "date",
      tickFormatter: _formatters.default.date
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
    })),
    summary: _react.default.createElement(_.Summary, {
      data: data,
      summaryType: "total",
      dataKeys: ['text', 'organic']
    }),
    legend: _react.default.createElement(_.Legend, {
      data: data,
      summaryType: "total",
      config: [{
        dataKey: 'organic',
        color: _podiumUi.colors.cobaltBlue
      }, {
        dataKey: 'text',
        color: _podiumUi.colors.poppyRed
      }]
    })
  });
}).add('summary', function () {
  return _react.default.createElement(_.ReportCard, {
    width: "270px",
    title: _react.default.createElement(_.ReportSummaryTitle, {
      formatter: _formatters.default.humanizeDuration,
      summaryType: "total",
      dataKeys: ['sms'],
      title: "Median Response Time",
      data: data
    }),
    chart: _react.default.createElement(_.Chart, {
      data: data,
      height: 100
    }, _react.default.createElement(_.SummaryLine, {
      dataKey: "sms",
      color: _podiumUi.colors.cobaltBlue
    }))
  });
});