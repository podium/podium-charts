import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

addDecorator(
  withInfo({
    inline: true,
    maxPropArrayLength: 1,
    maxPropObjectKeys: 60,
    maxPropsIntoLine: 90,
    maxPropStringLength: 300
  })
);

const req = require.context('../src/Stories', true, /\.story\.jsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
