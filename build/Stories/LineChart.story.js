import React from 'react';
import { storiesOf } from '@storybook/react';
import formatters from '../Charts/utils/formatters';
import colors from '../Colors';
import { Chart, XAxis, YAxis, Line, Tooltip, TooltipBody, TooltipBodyTime } from '../';
import { data, reviewsData } from './storyHelpers';
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
    tickFormatter: formatters.date()
  }), React.createElement(Line, {
    dataKey: "sms",
    color: colors.cobaltBlue
  }));
}).add('TooltipBodyTime', function () {
  return React.createElement(Chart, {
    data: data
  }, React.createElement(YAxis, {
    tickFormatter: formatters.abbreviateTime
  }), React.createElement(XAxis, {
    dataKey: "date",
    tickFormatter: formatters.date()
  }), React.createElement(Tooltip, {
    content: React.createElement(TooltipBodyTime, null)
  }), React.createElement(Line, {
    dataKey: "sms",
    color: colors.armyGreen
  }));
}).add('Multiple Lines', function () {
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
  }), React.createElement(Line, {
    name: "THIS CAN BE ANTYHING",
    dataKey: "organic",
    color: colors.cobaltBlue
  }), React.createElement(Line, {
    name: "SO CAN THIS",
    dataKey: "text",
    color: colors.poppyRed
  }));
}).add('Customized Axis, Tooltip', function () {
  return React.createElement(Chart, {
    data: reviewsData
  }, React.createElement(YAxis, {
    tickFormatter: formatters.abbreviateNumber,
    ticks: ['0', '1', '2', '3', '4', '5'],
    domain: [0, 5]
  }), React.createElement(XAxis, {
    dataKey: "date",
    tickFormatter: formatters.date()
  }), React.createElement(Tooltip, {
    content: React.createElement(TooltipBody, {
      formatter: formatters.roundToPlaces(1),
      aggregationOptions: {
        type: 'weightedAvg',
        dataKeys: ['facebook', 'google', 'yelp'],
        options: {
          valueKey: 'reviewRating',
          countKey: 'reviewCount'
        }
      },
      summaryTitle: "Avg Star Rating"
    })
  }), React.createElement(Line, {
    name: "Facebook",
    dataKey: "facebook.reviewRating",
    color: colors.siteColors.facebook,
    connectNulls: true
  }), React.createElement(Line, {
    name: "Google",
    dataKey: "google.reviewRating",
    color: colors.siteColors.google,
    connectNulls: true
  }), React.createElement(Line, {
    name: "Yelp",
    dataKey: "yelp.reviewRating",
    color: colors.siteColors.yelp,
    connectNulls: true
  }));
});