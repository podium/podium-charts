import { addParameters, configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { create } from '@storybook/theming';

const podiumTheme = create({
  base: 'light',
  colorSecondary: '#4C76E0',

  // UI
  appBg: 'white',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Text colors
  textColor: '#333333',
  textInverseColor: 'white',

  // Toolbar default and active colors
  barTextColor: 'black',
  barSelectedColor: '#4C76E0',
  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4
});

addParameters({
  options: {
    addonPanelInRight: true,
    name: 'Podium Reporting Toolkit',
    theme: podiumTheme
  }
});

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
