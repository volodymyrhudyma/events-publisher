import React from 'react';
import { storiesOf } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import FormInput from '../FormInput';

storiesOf('FormInput', module)
  .add('default', () => (
    <FormInput
      label="Label"
      placeholder="Placeholder"
      value=""
      onChange={action('Change')}
    />
  ))
  .add('required', () => (
    <FormInput
      label="Label"
      required={true}
      placeholder="Placeholder"
      value=""
      onChange={action('Change')}
    />
  ));
