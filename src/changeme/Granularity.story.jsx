import React from 'react';
import { storiesOf } from '@storybook/react';
import { Granularity } from '../';

storiesOf('Granularity Dropdown', module)
  .add('Last Year', () => (
    <Granularity
      timeRange="lastYear"
      onChange={res => {
        console.log(`You picked ${res}`);
      }}
    />
  ))
  .add('Last Week', () => (
    <Granularity
      timeRange="lastWeek"
      onChange={res => {
        console.log(`You picked ${res}`);
      }}
    />
  ))
  .add('Restricted Options', () => (
    <Granularity
      timeRange="lastWeek"
      exclude={['hour']}
      onChange={res => {
        console.log(`You picked ${res}`);
      }}
    />
  ));
