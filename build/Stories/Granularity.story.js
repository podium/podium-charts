import React from 'react';
import { storiesOf } from '@storybook/react';
import { Granularity } from '../';
storiesOf('Granularity Dropdown', module).add('Last Year', function () {
  return React.createElement(Granularity, {
    timeRange: "lastYear",
    onChange: function onChange(res) {
      console.log("You picked ".concat(res));
    }
  });
}).add('Last Week', function () {
  return React.createElement(Granularity, {
    timeRange: "lastWeek",
    onChange: function onChange(res) {
      console.log("You picked ".concat(res));
    }
  });
}).add('Restricted Options', function () {
  return React.createElement(Granularity, {
    timeRange: "lastWeek",
    exclude: ['hour'],
    onChange: function onChange(res) {
      console.log("You picked ".concat(res));
    }
  });
});