import React from 'react';
import { storiesOf } from '@storybook/react';
import formatters from '../Charts/utils/formatters';

storiesOf('Formatters', module)
  .add('date', () => (
    <div>
      <div>
        formatters.date('hour')
        <div>-></div>
        {formatters.date('hour')('2018-01-15T23:43:32')}
      </div>
      <br />
      <div>
        formatters.date('day')
        <div>-></div>
        {formatters.date('day')('2018-01-15T23:43:32')}
      </div>
      <br />
      <div>
        formatters.date('week')
        <div>-></div>
        {formatters.date('week')('2018-01-15T23:43:32')}
      </div>
      <br />
      <div>
        formatters.date('month')
        <div>-></div>
        {formatters.date('month')('2018-01-15T23:43:32')}
      </div>
      <br />
      <div>
        formatters.date('year')
        <div>-></div>
        {formatters.date('year')('2018-01-15T23:43:32')}
      </div>
    </div>
  ))
  .add('capitalize', () => (
    <div>
      formatters.capitalize("podium")
      <div>-></div>
      {formatters.capitalize('podium')}
    </div>
  ))
  .add('abbreviateNumber', () => (
    <div>
      formatters.abbreviateNumber(100000000)
      <div>-></div>
      {formatters.abbreviateNumber(100000000)}
    </div>
  ))
  .add('humanizeDuration', () => (
    <div>
      <div>
        formatters.humanizeDuration(86400)
        <div>-></div>
        {formatters.humanizeDuration(86400)}
      </div>
      <div>
        formatters.humanizeDuration(16055)
        <div>-></div>
        {formatters.humanizeDuration(16055)}
      </div>
    </div>
  ))
  .add('commatize', () => (
    <div>
      formatters.commatize("")
      <div>-></div>
      {formatters.commatize(1000000000)}
    </div>
  ))
  .add('currency', () => (
    <div>
      formatters.currency(2457723)
      <div>(pennies as input)-></div>
      {formatters.currency(2457723)}
    </div>
  ))
  .add('currency (rounded)', () => (
    <div>
      formatters.currencyRounded(2457723)
      <div>(pennies as input) -></div>
      {formatters.currencyRounded(2457723)}
    </div>
  ))

  .add('nullToValue', () => (
    <div>
      <div>
        formatters.nullToValue(formatters.commatize, 'N/A')(5000)
        <div>-></div>
        {formatters.nullToValue(formatters.commatize, 'N/A')(5000)}
      </div>
      <br />
      <div>
        formatters.nullToValue(formatters.commatize, 'N/A')(null)
        <div>-></div>
        {formatters.nullToValue(formatters.commatize, 'N/A')(null)}
      </div>
    </div>
  ));
