import React from 'react';
import { storiesOf } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import Input from '../Input';

storiesOf('Input', module).add('default', () => (
  <Input placeholder="Placeholder" value="" onChange={action('Change')} />
));
