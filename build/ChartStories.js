import React from 'react';
import { storiesOf } from '@storybook/react';
import formatters from './formatters';
import { colors } from 'podium-ui';
import { Chart, XAxis, YAxis, Bar, Line, Legend, Summary, Tooltip, TooltipBodyPrimary } from './';
var data = [{
  sms: 200,
  text: 1,
  organic: 2,
  date: '2018-01-15T23:43:32'
}, {
  sms: 3000,
  text: 5,
  organic: 3,
  date: '2018-02-15T23:43:32'
}, {
  sms: 500,
  text: 3,
  date: '2018-03-15T23:43:32'
}, {
  sms: 200,
  text: 0,
  organic: 5,
  date: '2018-04-15T23:43:32'
}, {
  sms: 300,
  text: 1,
  organic: 8,
  date: '2018-05-15T23:43:32'
}, {
  sms: 4000,
  text: 2.33,
  organic: 10,
  date: '2018-06-15T23:43:32'
}, {
  sms: 400,
  text: 2.33,
  organic: 9,
  date: '2018-07-15T23:43:32'
}, {
  sms: 400,
  text: 2.33,
  organic: 8,
  date: '2018-08-15T23:43:32'
}, {
  sms: 300,
  text: 2.33,
  organic: 3,
  date: '2018-09-15T23:43:32'
}, {
  sms: 400,
  text: 2.33,
  organic: 3,
  date: '2018-10-15T23:43:32'
}, {
  sms: 100,
  text: 2.33,
  organic: 8,
  date: '2018-11-15T23:43:32'
}, {
  sms: 400,
  text: 2.33,
  organic: 20,
  date: '2018-12-15T23:43:32'
}];
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
    tickFormatter: formatters.date
  }), React.createElement(Bar, {
    dataKey: "sms",
    color: colors.cobaltBlue
  }));
}).add('Tooltip', function () {
  return React.createElement(Chart, {
    data: data
  }, React.createElement(YAxis, null), React.createElement(XAxis, {
    dataKey: "date",
    tickFormatter: formatters.date
  }), React.createElement(Tooltip, {
    content: React.createElement(TooltipBodyPrimary, {
      summaryType: "total",
      summaryTitle: "Reviews"
    })
  }), React.createElement(Bar, {
    dataKey: "organic",
    color: colors.cobaltBlue
  }));
}).add('Stacked', function () {
  return React.createElement(Chart, {
    data: data
  }, React.createElement(YAxis, null), React.createElement(XAxis, {
    dataKey: "date",
    tickFormatter: formatters.date
  }), React.createElement(Tooltip, {
    content: React.createElement(TooltipBodyPrimary, {
      summaryType: "total",
      summaryTitle: "Reviews"
    })
  }), React.createElement(Bar, {
    stackId: "1",
    dataKey: "organic",
    color: colors.cobaltBlue
  }), React.createElement(Bar, {
    stackId: "1",
    dataKey: "text",
    color: colors.poppyRed
  }));
}).add('Multiple', function () {
  return React.createElement(Chart, {
    data: data
  }, React.createElement(YAxis, null), React.createElement(XAxis, {
    dataKey: "date",
    tickFormatter: formatters.date
  }), React.createElement(Tooltip, {
    content: React.createElement(TooltipBodyPrimary, {
      summaryType: "total",
      summaryTitle: "Reviews"
    })
  }), React.createElement(Bar, {
    dataKey: "organic",
    color: colors.cobaltBlue
  }), React.createElement(Bar, {
    dataKey: "text",
    color: colors.poppyRed
  }));
});
storiesOf('Line Chart', module).add('Small', function () {
  return React.createElement(Chart, {
    data: data,
    width: 200,
    height: 100
  }, React.createElement(Line, {
    dataKey: "organic",
    color: "#000"
  }));
}).add('Axis', function () {
  return React.createElement(Chart, {
    data: data
  }, React.createElement(YAxis, {
    tickFormatter: formatters.abbreviateNumber
  }), React.createElement(XAxis, {
    dataKey: "date",
    tickFormatter: formatters.date
  }), React.createElement(Line, {
    dataKey: "sms",
    color: colors.cobaltBlue
  }));
}).add('Tooltip', function () {
  return React.createElement(Chart, {
    data: data
  }, React.createElement(YAxis, null), React.createElement(XAxis, {
    dataKey: "date",
    tickFormatter: formatters.date
  }), React.createElement(Tooltip, {
    content: React.createElement(TooltipBodyPrimary, {
      summaryType: "total",
      summaryTitle: "Reviews"
    })
  }), React.createElement(Line, {
    dataKey: "text",
    color: colors.armyGreen
  }));
}).add('Multiple Lines', function () {
  return React.createElement(Chart, {
    data: data
  }, React.createElement(YAxis, null), React.createElement(XAxis, {
    dataKey: "date",
    tickFormatter: formatters.date
  }), React.createElement(Tooltip, {
    content: React.createElement(TooltipBodyPrimary, {
      summaryType: "total",
      summaryTitle: "Reviews"
    })
  }), React.createElement(Line, {
    dataKey: "organic",
    color: colors.cobaltBlue
  }), React.createElement(Line, {
    dataKey: "text",
    color: colors.poppyRed
  }));
});
storiesOf('Mixed Chart', module).add('Mixed', function () {
  return React.createElement(Chart, {
    data: data
  }, React.createElement(YAxis, null), React.createElement(XAxis, {
    dataKey: "date",
    tickFormatter: formatters.date
  }), React.createElement(Tooltip, {
    content: React.createElement(TooltipBodyPrimary, {
      summaryType: "total",
      summaryTitle: "Reviews"
    })
  }), React.createElement(Bar, {
    dataKey: "organic",
    color: colors.cobaltBlue
  }), React.createElement(Line, {
    dataKey: "text",
    color: colors.poppyRed
  }));
});
storiesOf('Tooltip', module).add('Tooltip Primary', function () {
  return React.createElement("div", {
    style: {
      width: 100
    }
  }, React.createElement(TooltipBodyPrimary, {
    summaryType: "total",
    summaryTitle: "Reviews",
    payload: [{
      value: 1,
      color: colors.cobaltBlue,
      dataKey: 'google'
    }]
  }));
}, {
  info: {
    excludedPropTypes: ['payload']
  }
});
storiesOf('Summary', module).add('Default', function () {
  return React.createElement(Summary, {
    data: data,
    aggType: "avg"
  });
});
storiesOf('Legend', module).add('Default', function () {
  return React.createElement(Legend, {
    data: data,
    aggType: "avg",
    config: {
      webchat: {
        color: colors.white,
        label: 'Web Chat'
      }
    }
  });
});
storiesOf('formatters', module).add('date', function () {
  return React.createElement("div", null, "formatters.date(\"2018-01-15T23:43:32\")", React.createElement("div", null, "->"), formatters.date('2018-01-15T23:43:32'));
}).add('capitalize', function () {
  return React.createElement("div", null, "formatters.capitalize(\"podium\")", React.createElement("div", null, "->"), formatters.capitalize('podium'));
}).add('abbreviateNumber', function () {
  return React.createElement("div", null, "formatters.abbreviateNumber(100000000)", React.createElement("div", null, "->"), formatters.abbreviateNumber(100000000));
}).add('humanizeDuration', function () {
  return React.createElement("div", null, "formatters.humanizeDuration(86400)", React.createElement("div", null, "->"), formatters.humanizeDuration(86400));
});