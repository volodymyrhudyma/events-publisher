import React from 'react';
import { storiesOf } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import FormNumber from '../FormNumber';

storiesOf('FormNumber', module).add('default', () => (
  <FormNumber
    label="Label"
    placeholder="Placeholder"
    tip="Tip"
    value=""
    onChange={action('Change')}
  />
));
