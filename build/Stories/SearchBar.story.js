import React from 'react';
import { storiesOf } from '@storybook/react';
import SearchBar from '../SearchBar';
import { DefaultNotes } from './SearchBarHelpers';
storiesOf('Search', module).add('default', function () {
  return React.createElement("div", {
    style: {
      width: '400px'
    }
  }, React.createElement(SearchBar, {
    onChange: function onChange(e) {
      return console.log(e.target.value);
    }
  }));
}, {
  notes: DefaultNotes
});