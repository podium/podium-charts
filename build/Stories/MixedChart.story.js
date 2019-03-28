import React from 'react';
import { storiesOf } from '@storybook/react';
import formatters from '../Charts/utils/formatters';
import colors from '../Colors';
import { Chart, XAxis, YAxis, Bar, Line, Tooltip, TooltipBody } from '../';
import { data } from './storyHelpers';
storiesOf('Mixed Chart', module).add('Mixed', function () {
  return React.createElement(Chart, {
    data: data
  }, React.createElement(YAxis, null), React.createElement(XAxis, {
    dataKey: "date",
    tickFormatter: formatters.date()
  }), React.createElement(Bar, {
    name: "Organic",
    dataKey: "organic",
    color: colors.cobaltBlue
  }), React.createElement(Tooltip, {
    content: React.createElement(TooltipBody, {
      summaryTitle: "Reviews",
      aggregationOptions: {
        type: 'total',
        dataKeys: ['organic', 'text']
      }
    })
  }), React.createElement(Line, {
    name: "Text",
    dataKey: "text",
    color: colors.poppyRed
  }));
});