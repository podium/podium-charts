function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import formatters from '../Charts/utils/formatters';
import colors from '../Colors';
import { Chart, XAxis, YAxis, Bar, Granularity, Line, Legend, Summary, Tooltip, TooltipBody, TooltipBodyTime, ReportCard, ReportTitle } from '../';
import { CustomLegendNotes } from './ReportCardHelpers';
import { data, dataLegend, powerLevels, powerLevelsLegend, weightedAvgData, weightedAvgDataLegend, timeData, customFormatter } from './storyHelpers';
storiesOf('Report Card', module).add('w/Chart,Title', function () {
  return React.createElement(ReportCard, null, React.createElement(ReportTitle, {
    title: "Total Reviews",
    timeRange: "last12Months"
  }), React.createElement(Chart, {
    data: data
  }, React.createElement(YAxis, {
    tickFormatter: formatters.abbreviateTime
  }), React.createElement(XAxis, {
    dataKey: "date",
    tickFormatter: formatters.date()
  }), React.createElement(Line, {
    dataKey: "sms",
    color: colors.cobaltBlue
  })));
}).add('w/Summary', function () {
  return React.createElement(ReportCard, null, React.createElement(ReportTitle, {
    title: "Total Reviews",
    timeRange: "lastYear"
  }), React.createElement(Chart, {
    data: data
  }, React.createElement(YAxis, null), React.createElement(XAxis, {
    dataKey: "date",
    tickFormatter: formatters.date()
  }), React.createElement(Line, {
    dataKey: "sms",
    color: colors.cobaltBlue
  })), React.createElement(Summary, {
    formatter: formatters.roundToPlaces(1),
    chartData: data,
    aggregationOptions: {
      type: 'total',
      dataKeys: ['sms']
    },
    overallSummaryMetric: 9400,
    granularity: "month",
    timeRange: "lastYear"
  }));
}).add('w/Legend (weightedAvg)', function () {
  return React.createElement(ReportCard, null, React.createElement(ReportTitle, {
    title: "Inbound Leads by Source",
    timeRange: "custom",
    dateStart: "2018-09-15T23:43:32",
    dateEnd: "2018-11-15T23:43:32"
  }), React.createElement(Chart, {
    data: weightedAvgData
  }, React.createElement(YAxis, null), React.createElement(XAxis, {
    dataKey: "date",
    tickFormatter: formatters.date()
  }), React.createElement(Line, {
    dataKey: "dogs.cuteness",
    name: "Dogs",
    color: colors.cobaltBlue
  }), React.createElement(Line, {
    dataKey: "cats.cuteness",
    name: "Cats",
    color: colors.poppyRed
  }), React.createElement(Tooltip, {
    content: React.createElement(TooltipBody, {
      formatter: formatters.roundToPlaces(1),
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
  })), React.createElement(Summary, {
    formatter: formatters.roundToPlaces(1),
    chartData: weightedAvgData,
    aggregationOptions: {
      type: 'weightedAvg',
      dataKeys: ['cats', 'dogs'],
      options: {
        valueKey: 'cuteness',
        countKey: 'amount'
      }
    },
    overallSummaryMetric: 3.5,
    granularity: "month",
    timeRange: "lastYear"
  }), React.createElement(Legend, {
    formatter: formatters.roundToPlaces(1),
    legendData: weightedAvgDataLegend,
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
      color: colors.cobaltBlue
    }, {
      name: 'Cats',
      dataKey: 'cats',
      color: colors.poppyRed
    }]
  }));
}).add('w/Legend (series with no data)', function () {
  return React.createElement(ReportCard, null, React.createElement(ReportTitle, {
    title: "Power Levels",
    data: powerLevels
  }), React.createElement(Chart, {
    data: powerLevels
  }, React.createElement(YAxis, null), React.createElement(XAxis, {
    dataKey: "date",
    tickFormatter: formatters.date()
  }), React.createElement(Line, {
    dataKey: "goku",
    name: "Goku",
    color: "#FB7326"
  }), React.createElement(Line, {
    dataKey: "piccolo",
    name: "Piccolo",
    color: "#479919"
  }), React.createElement(Line, {
    dataKey: "vegeta",
    name: "Vegeta",
    color: "#3756B0"
  }), React.createElement(Line, {
    dataKey: "turtle",
    name: "Turtle",
    color: "#6A3027"
  })), React.createElement(Summary, {
    formatter: formatters.roundToPlaces(1),
    chartData: powerLevels,
    aggregationOptions: {
      type: 'avg',
      dataKeys: ['goku', 'piccolo', 'vegeta', 'turtle']
    },
    overallSummaryMetric: 11279.2,
    granularity: "day",
    timeRange: "lastWeek"
  }), React.createElement(Legend, {
    formatter: formatters.nullToValue(formatters.roundToPlaces(1), '(no data)'),
    legendData: powerLevelsLegend,
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
      name: 'Turtle With No Name',
      dataKey: 'turtle',
      color: '#6A3027'
    }]
  }));
}).add('w/Custom Formatted Legend', function () {
  return React.createElement(ReportCard, null, React.createElement(ReportTitle, {
    title: "Total Reviews",
    timeRange: "lastYear"
  }), React.createElement(Granularity, {
    timeRange: "lastYear",
    onChange: function onChange(res) {
      console.log("You picked ".concat(res));
    }
  }), React.createElement(Chart, {
    data: data
  }, React.createElement(YAxis, null), React.createElement(XAxis, {
    dataKey: "date",
    tickFormatter: formatters.date()
  }), React.createElement(Line, {
    dataKey: "sms",
    color: colors.cobaltBlue
  })), React.createElement(Summary, {
    formatter: formatters.roundToPlaces(1),
    chartData: data,
    aggregationOptions: {
      type: 'total',
      dataKeys: ['text', 'organic']
    },
    overallSummaryMetric: 80.6,
    granularity: "month",
    timeRange: "lastYear"
  }), React.createElement(Legend, {
    formatter: customFormatter,
    legendData: dataLegend,
    aggregationOptions: {
      type: 'total',
      dataKeys: ['organic', 'text']
    },
    displayOptions: [{
      name: 'Webchat',
      dataKey: 'text',
      color: colors.cobaltBlue,
      disabled: true
    }, {
      name: 'Organic',
      dataKey: 'organic',
      color: colors.cobaltBlue
    }, {
      name: 'Something Else',
      dataKey: 'text',
      color: colors.poppyRed,
      disabled: true
    }]
  }));
}, {
  notes: CustomLegendNotes
}).add('w/Legend (multiple bars)', function () {
  return React.createElement(ReportCard, null, React.createElement(ReportTitle, {
    title: "Inbound Leads by Source",
    timeRange: "lastYear"
  }), React.createElement(Chart, {
    data: data
  }, React.createElement(YAxis, null), React.createElement(XAxis, {
    dataKey: "date",
    tickFormatter: formatters.date()
  }), React.createElement(Tooltip, {
    content: React.createElement(TooltipBody, {
      summaryType: "total",
      summaryTitle: "Reviews"
    })
  }), React.createElement(Bar, {
    name: "Organic",
    dataKey: "organic",
    color: colors.cobaltBlue
  }), React.createElement(Bar, {
    name: "Text",
    dataKey: "text",
    color: colors.poppyRed
  })), React.createElement(Summary, {
    formatter: formatters.roundToPlaces(1),
    chartData: data,
    aggregationOptions: {
      type: 'avg',
      dataKeys: ['organic', 'text']
    },
    overallSummaryMetric: 3.7,
    granularity: "month",
    timeRange: "lastYear"
  }), React.createElement(Legend, {
    legendData: dataLegend,
    displayOptions: [{
      name: 'Organic',
      dataKey: 'organic',
      color: colors.cobaltBlue
    }, {
      name: 'Text',
      dataKey: 'text',
      color: colors.poppyRed
    }]
  }));
}).add('w/Legend (stacked bars)', function () {
  return React.createElement(ReportCard, null, React.createElement(ReportTitle, {
    title: "Inbound Leads by Source",
    timeRange: "lastYear"
  }), React.createElement(Chart, {
    data: data
  }, React.createElement(YAxis, null), React.createElement(XAxis, {
    dataKey: "date",
    tickFormatter: formatters.date()
  }), React.createElement(Tooltip, {
    content: React.createElement(TooltipBody, {
      summaryType: "total",
      summaryTitle: "Reviews"
    })
  }), React.createElement(Bar, {
    name: "Organic",
    stackId: "1",
    dataKey: "organic",
    color: colors.cobaltBlue
  }), React.createElement(Bar, {
    name: "Text",
    stackId: "1",
    dataKey: "text",
    color: colors.poppyRed
  })), React.createElement(Summary, {
    formatter: formatters.roundToPlaces(1),
    chartData: data,
    aggregationOptions: {
      type: 'avg',
      dataKeys: ['organic', 'text']
    },
    overallSummaryMetric: 3.7,
    granularity: "month",
    timeRange: "lastYear"
  }), React.createElement(Legend, {
    legendData: dataLegend,
    displayOptions: [{
      name: 'Organic',
      dataKey: 'organic',
      color: colors.cobaltBlue
    }, {
      name: 'Text',
      dataKey: 'text',
      color: colors.poppyRed
    }]
  }));
}).add('w/Tooltip', function () {
  return React.createElement(ReportCard, null, React.createElement(ReportTitle, {
    title: "Cats vs Dogs",
    timeRange: "custom",
    dateStart: "2018-09-15T23:43:32",
    dateEnd: "2018-11-15T23:43:32"
  }), React.createElement(Chart, {
    data: weightedAvgData
  }, React.createElement(YAxis, null), React.createElement(XAxis, {
    dataKey: "date",
    tickFormatter: formatters.date()
  }), React.createElement(Line, {
    dataKey: "dogs.cuteness",
    name: "Dogs",
    color: colors.poppyRed
  }), React.createElement(Line, {
    dataKey: "cats.cuteness",
    name: "Cats",
    color: colors.cobaltBlue
  }), React.createElement(Tooltip, {
    content: React.createElement(TooltipBody, {
      aggregationOptions: {
        type: 'weightedAvg',
        dataKeys: ['cats', 'dogs'],
        options: {
          countKey: 'amount',
          valueKey: 'cuteness'
        }
      },
      summaryTitle: "Animals",
      formatter: formatters.roundToPlaces(1)
    })
  })), React.createElement(Summary, {
    formatter: formatters.roundToPlaces(1),
    chartData: weightedAvgData,
    aggregationOptions: {
      type: 'weightedAvg',
      options: {
        valueKey: 'cuteness',
        countKey: 'amount'
      },
      dataKeys: ['dogs', 'cats']
    },
    overallSummaryMetric: 3.5,
    granularity: "month",
    timeRange: "lastYear"
  }));
}).add('w/TooltipBody (single key)', function () {
  return React.createElement(ReportCard, null, React.createElement(ReportTitle, {
    title: "Single Value Tooltip",
    timeRange: "lastYear"
  }), React.createElement(Chart, {
    data: data
  }, React.createElement(YAxis, null), React.createElement(XAxis, {
    dataKey: "date",
    tickFormatter: formatters.date()
  }), React.createElement(Line, {
    dataKey: "sms",
    name: "SMS",
    color: colors.poppyRed
  }), React.createElement(Tooltip, {
    content: React.createElement(TooltipBody, {
      summaryTitle: "Minutes"
    })
  })), React.createElement(Summary, {
    formatter: formatters.commatize,
    chartData: data,
    aggregationOptions: {
      type: 'total',
      dataKeys: ['sms']
    },
    overallSummaryMetric: 9400,
    granularity: "month",
    timeRange: "lastYear"
  }));
}).add('w/TooltipBodyTime', function () {
  return React.createElement(ReportCard, null, React.createElement(ReportTitle, {
    title: "Wait Time",
    timeRange: "custom",
    dateStart: "2018-08-15T23:43:32",
    dateEnd: "2018-11-15T23:43:32"
  }), React.createElement(Chart, {
    data: timeData
  }, React.createElement(YAxis, null), React.createElement(XAxis, {
    dataKey: "date",
    tickFormatter: formatters.date()
  }), React.createElement(Line, {
    dataKey: "waitTime",
    name: "Wait Time",
    color: colors.poppyRed
  }), React.createElement(Tooltip, {
    content: React.createElement(TooltipBodyTime, null)
  })), React.createElement(Summary, {
    formatter: formatters.commatize,
    chartData: timeData,
    aggregationOptions: {
      type: 'total',
      dataKeys: ['waitTime']
    },
    overallSummaryMetric: 3130,
    granularity: "month",
    timeRange: "custom"
  }));
}).add('Loading', function () {
  return React.createElement(ReportCard, {
    loading: true
  }, React.createElement(ReportTitle, {
    title: "Total Reviews",
    timeRange: "lastYear"
  }), React.createElement(Granularity, {
    timeRange: "lastYear",
    onChange: function onChange(res) {
      console.log("You picked ".concat(res));
    }
  }), React.createElement(Chart, {
    data: data
  }, React.createElement(YAxis, {
    tickFormatter: formatters.abbreviateTime
  }), React.createElement(XAxis, {
    dataKey: "date",
    tickFormatter: formatters.date()
  }), React.createElement(Line, {
    dataKey: "sms",
    color: colors.cobaltBlue
  }), React.createElement(Tooltip, {
    content: React.createElement(TooltipBodyTime, null)
  })), React.createElement(Summary, {
    formatter: formatters.roundToPlaces(1),
    chartData: data,
    aggregationOptions: {
      type: 'total',
      dataKeys: ['text', 'organic']
    },
    granularity: "month",
    timeRange: "lastYear"
  }), React.createElement(Legend, {
    legendData: dataLegend,
    displayOptions: [{
      name: 'Organic',
      dataKey: 'organic',
      color: colors.cobaltBlue
    }, {
      name: 'Text',
      dataKey: 'text',
      color: colors.poppyRed
    }]
  }));
}).add('w/Granularity', function () {
  return React.createElement(ReportCard, null, React.createElement(ReportTitle, {
    title: "Total Reviews",
    timeRange: "lastYear"
  }), React.createElement(Granularity, {
    timeRange: "lastYear",
    onChange: function onChange(res) {
      console.log("You picked ".concat(res));
    }
  }), React.createElement(Chart, {
    data: data
  }, React.createElement(YAxis, null), React.createElement(XAxis, {
    dataKey: "date",
    tickFormatter: formatters.date()
  }), React.createElement(Line, {
    dataKey: "sms",
    color: colors.cobaltBlue
  })), React.createElement(Summary, {
    formatter: formatters.roundToPlaces(1),
    chartData: data,
    aggregationOptions: {
      type: 'total',
      dataKeys: ['text', 'organic']
    },
    overallSummaryMetric: 80.6,
    granularity: "month",
    timeRange: "lastYear"
  }), React.createElement(Legend, {
    formatter: formatters.roundToPlaces(1),
    legendData: dataLegend,
    aggregationOptions: {
      type: 'total',
      dataKeys: ['organic', 'text']
    },
    displayOptions: [{
      name: 'Organic',
      dataKey: 'organic',
      color: colors.cobaltBlue
    }, {
      name: 'Text',
      dataKey: 'text',
      color: colors.poppyRed
    }]
  }));
}).add('null data', function () {
  return React.createElement(ReportCard, null, React.createElement(ReportTitle, {
    title: "Cats vs Dogs",
    data: [],
    timeRange: "custom",
    dateStart: "2018-12-05",
    dateEnd: "2019-01-10"
  }), React.createElement(Chart, {
    data: []
  }, React.createElement(YAxis, {
    tickFormatter: formatters.abbreviateNumber
  }), React.createElement(XAxis, {
    dataKey: "date",
    tickFormatter: formatters.date()
  }), React.createElement(Bar, {
    dataKey: "dogs.cuteness",
    name: "Dogs",
    color: colors.poppyRed
  }), React.createElement(Bar, {
    dataKey: "cats.cuteness",
    name: "Cats",
    color: colors.cobaltBlue
  }), React.createElement(Tooltip, {
    content: React.createElement(TooltipBody, {
      aggregationOptions: {
        type: 'weightedAvg',
        dataKeys: ['cats', 'dogs'],
        options: {
          countKey: 'amount',
          valueKey: 'cuteness'
        }
      },
      summaryTitle: "Animals",
      formatter: formatters.roundToPlaces(1)
    })
  })), React.createElement(Summary, {
    formatter: formatters.roundToPlaces(1),
    chartData: [],
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
}).add('Changing time ranges', function () {
  return React.createElement(Controller, null, function (chartData, legendData, dateRange) {
    return React.createElement(ReportCard, null, React.createElement(ReportTitle, {
      title: "Inbound Leads by Source",
      timeRange: "custom",
      dateStart: dateRange.startDate,
      dateEnd: dateRange.endDate
    }), React.createElement(Chart, {
      data: chartData
    }, React.createElement(YAxis, null), React.createElement(XAxis, {
      dataKey: "date",
      tickFormatter: formatters.date()
    }), React.createElement(Line, {
      dataKey: "dogs.cuteness",
      name: "Dogs",
      color: colors.cobaltBlue
    }), React.createElement(Line, {
      dataKey: "cats.cuteness",
      name: "Cats",
      color: colors.poppyRed
    }), React.createElement(Tooltip, {
      content: React.createElement(TooltipBody, {
        formatter: formatters.roundToPlaces(1),
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
    })), React.createElement(Summary, {
      formatter: formatters.roundToPlaces(1),
      chartData: chartData,
      aggregationOptions: {
        type: 'weightedAvg',
        dataKeys: ['cats', 'dogs'],
        options: {
          valueKey: 'cuteness',
          countKey: 'amount'
        }
      },
      overallSummaryMetric: 3.5,
      granularity: "month",
      timeRange: "custom"
    }), React.createElement(Legend, {
      formatter: formatters.roundToPlaces(1),
      legendData: legendData,
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
        color: colors.cobaltBlue
      }, {
        name: 'Cats',
        dataKey: 'cats',
        color: colors.poppyRed
      }]
    }));
  });
});

function Controller(_ref) {
  var children = _ref.children;
  var legendData = weightedAvgDataLegend;
  var septOctChartData = weightedAvgData.slice(0, 2);
  var octNovChartData = weightedAvgData.slice(1, 3);
  var septOctDateRange = {
    startDate: '2018-09-01T00:00:00',
    endDate: '2018-10-31T23:59:59'
  };
  var octNovDateRange = {
    startDate: '2018-10-01T00:00:00',
    endDate: '2018-11-30T23:59:59'
  };

  var _useState = useState(septOctDateRange),
      _useState2 = _slicedToArray(_useState, 2),
      dateRange = _useState2[0],
      setDateRange = _useState2[1];

  var _useState3 = useState(septOctChartData),
      _useState4 = _slicedToArray(_useState3, 2),
      chartData = _useState4[0],
      setChartData = _useState4[1];

  var updateStates = function updateStates(dateRange, data) {
    setDateRange(dateRange);
    setChartData(data);
  };

  return React.createElement("div", null, React.createElement("p", null, React.createElement("button", {
    onClick: function onClick() {
      updateStates(septOctDateRange, septOctChartData);
    }
  }, "Sep - Oct"), React.createElement("button", {
    onClick: function onClick() {
      updateStates(octNovDateRange, octNovChartData);
    }
  }, "Oct - Nov")), React.createElement("div", null, children(chartData, legendData, dateRange)));
}