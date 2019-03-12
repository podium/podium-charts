"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _formatters = _interopRequireDefault(require("../charts/utils/formatters"));

var _Colors = _interopRequireDefault(require("../Colors"));

var _ = require("../");

var _storyHelpers = require("./storyHelpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Report Card', module).add('w/Chart,Title', function () {
  return _react.default.createElement(_.ReportCard, null, _react.default.createElement(_.ReportTitle, {
    title: "Total Reviews",
    data: _storyHelpers.data
  }), _react.default.createElement(_.Chart, {
    data: _storyHelpers.data
  }, _react.default.createElement(_.YAxis, {
    tickFormatter: _formatters.default.abbreviateTime
  }), _react.default.createElement(_.XAxis, {
    dataKey: "date",
    tickFormatter: _formatters.default.date()
  }), _react.default.createElement(_.Line, {
    dataKey: "sms",
    color: _Colors.default.cobaltBlue
  })));
}).add('w/Summary', function () {
  return _react.default.createElement(_.ReportCard, null, _react.default.createElement(_.ReportTitle, {
    title: "Total Reviews",
    data: _storyHelpers.data
  }), _react.default.createElement(_.Chart, {
    data: _storyHelpers.data
  }, _react.default.createElement(_.YAxis, null), _react.default.createElement(_.XAxis, {
    dataKey: "date",
    tickFormatter: _formatters.default.date()
  }), _react.default.createElement(_.Line, {
    dataKey: "sms",
    color: _Colors.default.cobaltBlue
  })), _react.default.createElement(_.Summary, {
    formatter: _formatters.default.roundToPlaces(1),
    data: _storyHelpers.data,
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
    data: _storyHelpers.weightedAvgData
  }), _react.default.createElement(_.Chart, {
    data: _storyHelpers.weightedAvgData
  }, _react.default.createElement(_.YAxis, null), _react.default.createElement(_.XAxis, {
    dataKey: "date",
    tickFormatter: _formatters.default.date()
  }), _react.default.createElement(_.Line, {
    dataKey: "dogs.cuteness",
    name: "Dogs",
    color: _Colors.default.cobaltBlue
  }), _react.default.createElement(_.Line, {
    dataKey: "cats.cuteness",
    name: "Cats",
    color: _Colors.default.poppyRed
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
    data: _storyHelpers.weightedAvgData,
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
    data: _storyHelpers.weightedAvgData,
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
      color: _Colors.default.cobaltBlue
    }, {
      name: 'Cats',
      dataKey: 'cats',
      color: _Colors.default.poppyRed
    }]
  }));
}).add('w/Legend (series with no data)', function () {
  return _react.default.createElement(_.ReportCard, null, _react.default.createElement(_.ReportTitle, {
    title: "Power Levels",
    data: _storyHelpers.powerLevels
  }), _react.default.createElement(_.Chart, {
    data: _storyHelpers.powerLevels
  }, _react.default.createElement(_.YAxis, null), _react.default.createElement(_.XAxis, {
    dataKey: "date",
    tickFormatter: _formatters.default.date()
  }), _react.default.createElement(_.Line, {
    dataKey: "goku",
    name: "Goku",
    color: "#FB7326"
  }), _react.default.createElement(_.Line, {
    dataKey: "piccolo",
    name: "Piccolo",
    color: "#479919"
  }), _react.default.createElement(_.Line, {
    dataKey: "vegeta",
    name: "Vegeta",
    color: "#3756B0"
  }), _react.default.createElement(_.Line, {
    dataKey: "turtle",
    name: "Turtle",
    color: "#6A3027"
  })), _react.default.createElement(_.Summary, {
    formatter: _formatters.default.roundToPlaces(1),
    data: _storyHelpers.powerLevels,
    aggregationOptions: {
      type: 'avg',
      dataKeys: ['goku', 'piccolo', 'vegeta', 'turtle']
    },
    granularity: "day",
    timeRange: "lastWeek"
  }), _react.default.createElement(_.Legend, {
    formatter: _formatters.default.nullToValue(_formatters.default.roundToPlaces(1), '(no data)'),
    data: _storyHelpers.powerLevels,
    aggregationOptions: {
      type: 'avg',
      dataKeys: ['goku', 'piccolo', 'vegeta', 'turtle']
    },
    displayOptions: [{
      name: 'Goku',
      dataKey: 'goku',
      color: '#FB7326'
    }, {
      name: 'Piccolo',
      dataKey: 'piccolo',
      color: '#479919'
    }, {
      name: 'Vegeta',
      dataKey: 'vegeta',
      color: '#3756B0'
    }, {
      name: 'Turtle',
      dataKey: 'turtle',
      color: '#6A3027'
    }]
  }));
}).add('w/Custom Formatted Legend', function () {
  return _react.default.createElement(_.ReportCard, null, _react.default.createElement(_.ReportTitle, {
    title: "Total Reviews",
    data: _storyHelpers.data
  }), _react.default.createElement(_.Granularity, {
    timeRange: "lastYear",
    onChange: function onChange(res) {
      console.log("You picked ".concat(res));
    }
  }), _react.default.createElement(_.Chart, {
    data: _storyHelpers.data
  }, _react.default.createElement(_.YAxis, null), _react.default.createElement(_.XAxis, {
    dataKey: "date",
    tickFormatter: _formatters.default.date()
  }), _react.default.createElement(_.Line, {
    dataKey: "sms",
    color: _Colors.default.cobaltBlue
  })), _react.default.createElement(_.Summary, {
    formatter: _formatters.default.roundToPlaces(1),
    data: _storyHelpers.data,
    aggregationOptions: {
      type: 'total',
      dataKeys: ['text', 'organic']
    },
    granularity: "month",
    timeRange: "custom"
  }), _react.default.createElement(_.Legend, {
    formatter: _storyHelpers.customFormatter,
    data: _storyHelpers.data,
    aggregationOptions: {
      type: 'total',
      dataKeys: ['organic', 'text']
    },
    displayOptions: [{
      name: 'Organic',
      dataKey: 'organic',
      color: _Colors.default.cobaltBlue
    }, {
      name: 'Text',
      dataKey: 'text',
      color: _Colors.default.poppyRed
    }]
  }));
}).add('w/Legend (multiple bars)', function () {
  return _react.default.createElement(_.ReportCard, null, _react.default.createElement(_.ReportTitle, {
    title: "Inbound Leads by Source",
    data: _storyHelpers.data
  }), _react.default.createElement(_.Chart, {
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
  })), _react.default.createElement(_.Summary, {
    formatter: _formatters.default.roundToPlaces(1),
    data: _storyHelpers.data,
    aggregationOptions: {
      type: 'avg',
      dataKeys: ['organic', 'text']
    },
    granularity: "month",
    timeRange: "lastYear"
  }), _react.default.createElement(_.Legend, {
    data: _storyHelpers.weightedAvgData,
    displayOptions: [{
      name: 'Organic',
      dataKey: 'organic',
      color: _Colors.default.cobaltBlue
    }, {
      name: 'Text',
      dataKey: 'text',
      color: _Colors.default.poppyRed
    }]
  }));
}).add('w/Legend (stacked bars)', function () {
  return _react.default.createElement(_.ReportCard, null, _react.default.createElement(_.ReportTitle, {
    title: "Inbound Leads by Source",
    data: _storyHelpers.data
  }), _react.default.createElement(_.Chart, {
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
  })), _react.default.createElement(_.Summary, {
    formatter: _formatters.default.roundToPlaces(1),
    data: _storyHelpers.data,
    aggregationOptions: {
      type: 'avg',
      dataKeys: ['organic', 'text']
    },
    granularity: "month",
    timeRange: "lastYear"
  }), _react.default.createElement(_.Legend, {
    data: _storyHelpers.weightedAvgData,
    displayOptions: [{
      name: 'Organic',
      dataKey: 'organic',
      color: _Colors.default.cobaltBlue
    }, {
      name: 'Text',
      dataKey: 'text',
      color: _Colors.default.poppyRed
    }]
  }));
}).add('w/Tooltip', function () {
  return _react.default.createElement(_.ReportCard, null, _react.default.createElement(_.ReportTitle, {
    title: "Cats vs Dogs",
    data: _storyHelpers.weightedAvgData
  }), _react.default.createElement(_.Chart, {
    data: _storyHelpers.weightedAvgData
  }, _react.default.createElement(_.YAxis, null), _react.default.createElement(_.XAxis, {
    dataKey: "date",
    tickFormatter: _formatters.default.date()
  }), _react.default.createElement(_.Line, {
    dataKey: "dogs.cuteness",
    name: "Dogs",
    color: _Colors.default.poppyRed
  }), _react.default.createElement(_.Line, {
    dataKey: "cats.cuteness",
    name: "Cats",
    color: _Colors.default.cobaltBlue
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
    data: _storyHelpers.weightedAvgData,
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
    data: _storyHelpers.data
  }), _react.default.createElement(_.Chart, {
    data: _storyHelpers.data
  }, _react.default.createElement(_.YAxis, null), _react.default.createElement(_.XAxis, {
    dataKey: "date",
    tickFormatter: _formatters.default.date()
  }), _react.default.createElement(_.Line, {
    dataKey: "sms",
    name: "SMS",
    color: _Colors.default.poppyRed
  }), _react.default.createElement(_.Tooltip, {
    content: _react.default.createElement(_.TooltipBody, {
      summaryTitle: "Minutes"
    })
  })), _react.default.createElement(_.Summary, {
    formatter: _formatters.default.commatize,
    data: _storyHelpers.data,
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
    data: _storyHelpers.timeData
  }), _react.default.createElement(_.Chart, {
    data: _storyHelpers.timeData
  }, _react.default.createElement(_.YAxis, null), _react.default.createElement(_.XAxis, {
    dataKey: "date",
    tickFormatter: _formatters.default.date()
  }), _react.default.createElement(_.Line, {
    dataKey: "waitTime",
    name: "Wait Time",
    color: _Colors.default.poppyRed
  }), _react.default.createElement(_.Tooltip, {
    content: _react.default.createElement(_.TooltipBodyTime, null)
  })), _react.default.createElement(_.Summary, {
    formatter: _formatters.default.commatize,
    data: _storyHelpers.timeData,
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
    data: _storyHelpers.data
  }), _react.default.createElement(_.Granularity, {
    timeRange: "lastYear",
    onChange: function onChange(res) {
      console.log("You picked ".concat(res));
    }
  }), _react.default.createElement(_.Chart, {
    data: _storyHelpers.data
  }, _react.default.createElement(_.YAxis, {
    tickFormatter: _formatters.default.abbreviateTime
  }), _react.default.createElement(_.XAxis, {
    dataKey: "date",
    tickFormatter: _formatters.default.date()
  }), _react.default.createElement(_.Line, {
    dataKey: "sms",
    color: _Colors.default.cobaltBlue
  }), _react.default.createElement(_.Tooltip, {
    content: _react.default.createElement(_.TooltipBodyTime, null)
  })), _react.default.createElement(_.Summary, {
    formatter: _formatters.default.roundToPlaces(1),
    data: _storyHelpers.data,
    aggregationOptions: {
      type: 'total',
      dataKeys: ['text', 'organic']
    },
    granularity: "month",
    timeRange: "lastYear"
  }), _react.default.createElement(_.Legend, {
    data: _storyHelpers.data,
    displayOptions: [{
      name: 'Organic',
      dataKey: 'organic',
      color: _Colors.default.cobaltBlue
    }, {
      name: 'Text',
      dataKey: 'text',
      color: _Colors.default.poppyRed
    }]
  }));
}).add('w/Granularity', function () {
  return _react.default.createElement(_.ReportCard, null, _react.default.createElement(_.ReportTitle, {
    title: "Total Reviews",
    data: _storyHelpers.data
  }), _react.default.createElement(_.Granularity, {
    timeRange: "lastYear",
    onChange: function onChange(res) {
      console.log("You picked ".concat(res));
    }
  }), _react.default.createElement(_.Chart, {
    data: _storyHelpers.data
  }, _react.default.createElement(_.YAxis, null), _react.default.createElement(_.XAxis, {
    dataKey: "date",
    tickFormatter: _formatters.default.date()
  }), _react.default.createElement(_.Line, {
    dataKey: "sms",
    color: _Colors.default.cobaltBlue
  })), _react.default.createElement(_.Summary, {
    formatter: _formatters.default.roundToPlaces(1),
    data: _storyHelpers.data,
    aggregationOptions: {
      type: 'total',
      dataKeys: ['text', 'organic']
    },
    granularity: "month",
    timeRange: "custom"
  }), _react.default.createElement(_.Legend, {
    formatter: _formatters.default.roundToPlaces(1),
    data: _storyHelpers.data,
    aggregationOptions: {
      type: 'total',
      dataKeys: ['organic', 'text']
    },
    displayOptions: [{
      name: 'Organic',
      dataKey: 'organic',
      color: _Colors.default.cobaltBlue
    }, {
      name: 'Text',
      dataKey: 'text',
      color: _Colors.default.poppyRed
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
    color: _Colors.default.poppyRed
  }), _react.default.createElement(_.Bar, {
    dataKey: "cats.cuteness",
    name: "Cats",
    color: _Colors.default.cobaltBlue
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