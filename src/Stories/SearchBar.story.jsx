import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import SearchBar from '../SearchBar';
import { DefaultNotes } from './SearchBarHelpers';

const SearchBarWithState = () => {
  const [value, setValue] = useState('Initial Value');

  return (
    <div style={{ width: '400px' }}>
      <SearchBar onChange={e => setValue(e.target.value)} value={value} />
    </div>
  );
};

storiesOf('Search', module)
  .add(
    'default',
    () => (
      <div style={{ width: '400px' }}>
        <SearchBar onChange={e => console.log(e.target.value)} />
      </div>
    ),
    { notes: DefaultNotes }
  )
  .add('with placeholder', () => (
    <div style={{ width: '400px' }}>
      <SearchBar
        placeholder="Search Here..."
        onChange={e => console.log(e.target.value)}
      />
    </div>
  ))
  .add('with intial value', () => <SearchBarWithState />);
