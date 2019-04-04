import React from 'react';
import { storiesOf } from '@storybook/react';
import formatters from '../Charts/utils/formatters';
import colors from '../Colors';
import { Chart, SummaryLine, ReportCard, ReportSummaryTitle } from '../';
import { WindowWidthMonitor, data, weightedAvgData, weightedAvgDataPrev, currData, prevData } from './storyHelpers';
import { DefaultNotes } from './ReportCardSummaryHelpers';
storiesOf('Report Card Summary', module).add('Default', function () {
  return React.createElement("div", {
    style: {
      width: '270px'
    }
  }, React.createElement(ReportCard, {
    width: "270px"
  }, React.createElement(ReportSummaryTitle, {
    formatter: formatters.abbreviateNumber,
    dataKeys: ['sms'],
    title: "Inbound Leads",
    data: data,
    trendData: [prevData, currData],
    aggregationOptions: {
      type: 'total',
      dataKeys: ['value']
    }
  }), React.createElement(Chart, {
    data: data,
    height: 100,
    hideGrid: true
  }, React.createElement(SummaryLine, {
    connectNulls: true,
    dataKey: "sms",
    color: colors.cobaltBlue
  }))));
}, {
  notes: DefaultNotes
}).add('Average Trend', function () {
  return React.createElement("div", {
    style: {
      width: '270px'
    }
  }, React.createElement(ReportCard, {
    width: "270px"
  }, React.createElement(ReportSummaryTitle, {
    formatter: formatters.humanizeDuration,
    dataKeys: ['sms'],
    title: "Median Response Time",
    data: data,
    trendData: [currData, prevData],
    aggregationOptions: {
      type: 'avg',
      dataKeys: ['value']
    }
  }), React.createElement(Chart, {
    data: data,
    height: 100,
    hideGrid: true
  }, React.createElement(SummaryLine, {
    connectNulls: true,
    dataKey: "sms",
    color: colors.cobaltBlue
  }))));
}).add('Weighted Average Trend', function () {
  return React.createElement("div", {
    style: {
      width: '270px'
    }
  }, React.createElement(ReportCard, {
    width: "270px"
  }, React.createElement(ReportSummaryTitle, {
    formatter: formatters.roundToPlaces(1),
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
  }), React.createElement(Chart, {
    data: weightedAvgData,
    height: 100,
    hideGrid: true
  }, React.createElement(SummaryLine, {
    connectNulls: true,
    dataKey: "dogs.cuteness",
    color: colors.cobaltBlue
  }))));
}).add('Prefer Downward Trend', function () {
  return React.createElement("div", {
    style: {
      width: '270px'
    }
  }, React.createElement(ReportCard, null, React.createElement(ReportSummaryTitle, {
    formatter: formatters.humanizeDuration,
    dataKeys: ['sms'],
    title: "Median Response Time",
    data: data,
    preferDown: true,
    trendData: [prevData, currData],
    aggregationOptions: {
      type: 'avg',
      dataKeys: ['value']
    }
  }), React.createElement(Chart, {
    data: data,
    height: 100,
    hideGrid: true
  }, React.createElement(SummaryLine, {
    connectNulls: true,
    dataKey: "sms",
    color: colors.cobaltBlue
  }))));
}).add('No change trend', function () {
  return React.createElement("div", {
    style: {
      width: '270px'
    }
  }, React.createElement(ReportCard, null, React.createElement(ReportSummaryTitle, {
    formatter: formatters.humanizeDuration,
    dataKeys: ['sms'],
    title: "Median Response Time",
    data: data,
    preferDown: true,
    trendData: [prevData, prevData],
    aggregationOptions: {
      type: 'avg',
      dataKeys: ['value']
    }
  }), React.createElement(Chart, {
    data: data,
    height: 100,
    hideGrid: true
  }, React.createElement(SummaryLine, {
    connectNulls: true,
    dataKey: "sms",
    color: colors.cobaltBlue
  }))));
}).add('Loading', function () {
  return React.createElement("div", {
    style: {
      width: '270px'
    }
  }, React.createElement(ReportCard, {
    loading: true
  }, React.createElement(ReportSummaryTitle, {
    formatter: formatters.humanizeDuration,
    dataKeys: ['sms'],
    title: "Median Response Time",
    data: data,
    trendData: [prevData, currData],
    aggregationOptions: {
      type: 'total',
      dataKeys: ['value']
    }
  }), React.createElement(Chart, {
    data: data,
    height: 100,
    hideGrid: true
  }, React.createElement(SummaryLine, {
    connectNulls: true,
    dataKey: "sms",
    color: colors.cobaltBlue
  }))));
}).add('Long title', function () {
  return React.createElement("div", {
    style: {
      width: '270px'
    }
  }, React.createElement(ReportCard, {
    width: "270px"
  }, React.createElement(ReportSummaryTitle, {
    formatter: formatters.abbreviateNumber,
    dataKeys: ['sms'],
    title: "This title is very long, yes indeed",
    data: data,
    trendData: [prevData, currData],
    aggregationOptions: {
      type: 'total',
      dataKeys: ['value']
    }
  }), React.createElement(Chart, {
    data: data,
    height: 100,
    hideGrid: true
  }, React.createElement(SummaryLine, {
    connectNulls: true,
    dataKey: "sms",
    color: colors.cobaltBlue
  }))));
}).add('Responsive metric size', function () {
  return React.createElement("div", null, React.createElement(WindowWidthMonitor, null), React.createElement("div", {
    style: {
      width: '270px'
    }
  }, React.createElement("h3", null, "This will shrink at 1000px:"), React.createElement(ReportCard, {
    width: "270px"
  }, React.createElement(ReportSummaryTitle, {
    formatter: formatters.abbreviateNumber,
    dataKeys: ['sms'],
    title: "This title is very long, yes indeed",
    data: data,
    trendData: [prevData, currData],
    aggregationOptions: {
      type: 'total',
      dataKeys: ['value']
    },
    smallWidth: 1000
  }), React.createElement(Chart, {
    data: data,
    height: 100,
    hideGrid: true
  }, React.createElement(SummaryLine, {
    connectNulls: true,
    dataKey: "sms",
    color: colors.cobaltBlue
  }))), React.createElement("h3", null, "This will not shrink:"), React.createElement(ReportCard, {
    width: "270px"
  }, React.createElement(ReportSummaryTitle, {
    formatter: formatters.abbreviateNumber,
    dataKeys: ['sms'],
    title: "This title is very long, yes indeed",
    data: data,
    trendData: [prevData, currData],
    aggregationOptions: {
      type: 'total',
      dataKeys: ['value']
    }
  }), React.createElement(Chart, {
    data: data,
    height: 100,
    hideGrid: true
  }, React.createElement(SummaryLine, {
    connectNulls: true,
    dataKey: "sms",
    color: colors.cobaltBlue
  })))));
});