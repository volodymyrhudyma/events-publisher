import React from 'react';
import { storiesOf } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import Textarea from '../Textarea';

storiesOf('Textarea', module).add('default', () => (
  <Textarea placeholder="Placeholder" value="" onChange={action('Change')} />
));
