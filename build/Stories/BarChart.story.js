import React from 'react';
import { storiesOf } from '@storybook/react';
import formatters from '../Charts/utils/formatters';
import colors from '../Colors';
import { Chart, XAxis, YAxis, Bar, Tooltip, TooltipBody } from '../';
import { data } from './storyHelpers';
storiesOf('Bar Chart', module).add('Small', function () {
  return React.createElement(Chart, {
    data: data,
    width: 200,
    height: 100
  }, React.createElement(Bar, {
    dataKey: "organic",
    color: "#000"
  }));
}).add('Axis', function () {
  return React.createElement(Chart, {
    data: data
  }, React.createElement(YAxis, {
    tickFormatter: formatters.humanizeDuration
  }), React.createElement(XAxis, {
    dataKey: "date",
    tickFormatter: formatters.date()
  }), React.createElement(Bar, {
    dataKey: "sms",
    onClick: function onClick(item) {
      return console.log(item);
    },
    color: colors.cobaltBlue
  }));
}).add('Tooltip', function () {
  return React.createElement(Chart, {
    data: data
  }, React.createElement(YAxis, null), React.createElement(XAxis, {
    dataKey: "date",
    tickFormatter: formatters.date()
  }), React.createElement(Tooltip, {
    content: React.createElement(TooltipBody, {
      summaryTitle: "Reviews",
      aggregationOptions: {
        type: 'total',
        dataKeys: ['organic', 'text']
      }
    })
  }), React.createElement(Bar, {
    name: "Organic",
    dataKey: "organic",
    color: colors.cobaltBlue,
    onClick: function onClick(item) {
      return console.log('organic', item);
    }
  }), React.createElement(Bar, {
    name: "Text",
    dataKey: "text",
    color: colors.poppyRed,
    onClick: function onClick(item) {
      return console.log('text', item);
    }
  }));
}).add('Tooltip, legend disabled', function () {
  return React.createElement(Chart, {
    data: data
  }, React.createElement(YAxis, null), React.createElement(XAxis, {
    dataKey: "date",
    tickFormatter: formatters.date()
  }), React.createElement(Tooltip, {
    content: React.createElement(TooltipBody, {
      summaryTitle: "Reviews",
      showLegend: false,
      aggregationOptions: {
        type: 'total',
        dataKeys: ['organic', 'text']
      }
    })
  }), React.createElement(Bar, {
    name: "Organic",
    dataKey: "organic",
    color: colors.cobaltBlue
  }), React.createElement(Bar, {
    name: "Text",
    dataKey: "text",
    color: colors.poppyRed
  }));
}).add('Stacked', function () {
  return React.createElement(Chart, {
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
  }));
}).add('Multiple', function () {
  return React.createElement(Chart, {
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
  }));
});