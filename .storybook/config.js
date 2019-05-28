import { configure, addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import theme from 'src/themes/default';
const req = require.context('src', true, /.stories.tsx$/);

addDecorator(withThemesProvider([theme]));

const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);
