import { addParameters, configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
//import { create } from '@storybook/theming';

//const podiumTheme = create({
//base: 'light',
//brandTitle: 'Podium Reporting Toolkit',
//brandImage: 'find img url',
//});

addParameters({
  options: {
    name: 'Podium Reporting Toolkit',
    addonPanelInRight: true
    //theme: themes.light
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
