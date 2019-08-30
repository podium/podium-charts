import React from 'react';
import { storiesOf } from '@storybook/react';
import formatters from '../Charts/utils/formatters';
storiesOf('Formatters', module).add('date', function () {
  return React.createElement("div", null, React.createElement("div", null, "formatters.date('hour')", React.createElement("div", null, "->"), formatters.date('hour')('2018-01-15T23:43:32')), React.createElement("br", null), React.createElement("div", null, "formatters.date('day')", React.createElement("div", null, "->"), formatters.date('day')('2018-01-15T23:43:32')), React.createElement("br", null), React.createElement("div", null, "formatters.date('week')", React.createElement("div", null, "->"), formatters.date('week')('2018-01-15T23:43:32')), React.createElement("br", null), React.createElement("div", null, "formatters.date('month')", React.createElement("div", null, "->"), formatters.date('month')('2018-01-15T23:43:32')), React.createElement("br", null), React.createElement("div", null, "formatters.date('year')", React.createElement("div", null, "->"), formatters.date('year')('2018-01-15T23:43:32')));
}).add('capitalize', function () {
  return React.createElement("div", null, "formatters.capitalize(\"podium\")", React.createElement("div", null, "->"), formatters.capitalize('podium'));
}).add('abbreviateNumber', function () {
  return React.createElement("div", null, "formatters.abbreviateNumber(100000000)", React.createElement("div", null, "->"), formatters.abbreviateNumber(100000000));
}).add('humanizeDuration', function () {
  return React.createElement("div", null, "formatters.humanizeDuration(86400)", React.createElement("div", null, "->"), formatters.humanizeDuration(86400));
}).add('commatize', function () {
  return React.createElement("div", null, "formatters.commatize(\"\")", React.createElement("div", null, "->"), formatters.commatize(1000000000));
}).add('currency', function () {
  return React.createElement("div", null, "formatters.currency(2457723)", React.createElement("div", null, "(pennies as input)->"), formatters.currency(2457723));
}).add('currency (rounded)', function () {
  return React.createElement("div", null, "formatters.currency(2457723)", React.createElement("div", null, "(pennies as input) ->"), formatters.currencyRounded(2457723));
}).add('nullToValue', function () {
  return React.createElement("div", null, React.createElement("div", null, "formatters.nullToValue(formatters.commatize, 'N/A')(5000)", React.createElement("div", null, "->"), formatters.nullToValue(formatters.commatize, 'N/A')(5000)), React.createElement("br", null), React.createElement("div", null, "formatters.nullToValue(formatters.commatize, 'N/A')(null)", React.createElement("div", null, "->"), formatters.nullToValue(formatters.commatize, 'N/A')(null)));
});