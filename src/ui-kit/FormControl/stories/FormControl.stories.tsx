import React from 'react';
import { storiesOf } from '@storybook/react';

import FormControl from '../FormControl';

storiesOf('FormControl', module).add('default', () => (
  <FormControl label="Label">FormControl</FormControl>
));
