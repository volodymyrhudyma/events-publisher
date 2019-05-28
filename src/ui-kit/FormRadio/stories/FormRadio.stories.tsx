import React from 'react';
import { storiesOf } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import FormRadio from '../FormRadio';

storiesOf('FormRadio', module).add('default', () => (
  <FormRadio
    label="Label"
    options={[
      { value: 'free', label: 'Free event' },
      { value: 'paid', label: 'Paid event' },
    ]}
    value=""
    onChange={action('Change')}
  />
));
