import React from 'react';
import { storiesOf } from '@storybook/react';
import SearchBar from '../SearchBar';
import { DefaultNotes } from './SearchBarHelpers';

storiesOf('Search', module).add(
  'default',
  () => (
    <div style={{ width: '400px' }}>
      <SearchBar onChange={e => console.log(e.target.value)} />
    </div>
  ),
  { notes: DefaultNotes }
);
