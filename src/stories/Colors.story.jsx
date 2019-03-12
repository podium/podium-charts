import React from 'react';
import { storiesOf } from '@storybook/react';
import colors from '../Colors';
import { Palette } from './storyHelpers';

storiesOf('Colors', module).add('default', () => {
  const colorsMap = Object.keys(colors).map(color => ({
    value: colors[color],
    name: color
  }));
  const podiumColors = colorsMap.filter(
    color => typeof color.value === 'string'
  );
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {podiumColors.map(color => {
        return <Palette color={color.value} name={color.name} />;
      })}
    </div>
  );
});
