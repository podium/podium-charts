import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo(
{
  inline: true,
  maxPropArrayLength: 1,
  maxPropObjectKeys: 60,
  maxPropsIntoLine: 90,
  maxPropStringLength: 300
}));

function loadStories() {
  require('../src/ChartStories.jsx');
}

configure(loadStories, module);
