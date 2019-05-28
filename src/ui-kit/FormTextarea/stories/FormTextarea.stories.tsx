import React from 'react';
import { storiesOf } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import FormTextarea from '../FormTextarea';

storiesOf('FormTextarea', module).add('default', () => (
  <FormTextarea
    label="Label"
    placeholder="Placeholder"
    value=""
    onChange={action('Change')}
  />
));
