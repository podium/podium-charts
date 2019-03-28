import React from 'react';
import { storiesOf } from '@storybook/react';
import colors from '../Colors';
import { Palette } from './storyHelpers';
storiesOf('Colors', module).add('default', function () {
  var colorsMap = Object.keys(colors).map(function (color) {
    return {
      value: colors[color],
      name: color
    };
  });
  var podiumColors = colorsMap.filter(function (color) {
    return typeof color.value === 'string';
  });
  return React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap'
    }
  }, podiumColors.map(function (color) {
    return React.createElement(Palette, {
      color: color.value,
      name: color.name
    });
  }));
});