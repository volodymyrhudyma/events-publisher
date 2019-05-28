import React from 'react';
import { storiesOf } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import Radio from '../Radio';

storiesOf('Radio', module)
  .add('default', () => (
    <Radio
      value="Value"
      checked={false}
      label="Label"
      onChange={action('Change')}
    />
  ))
  .add('checked', () => (
    <Radio
      value="Value"
      checked={true}
      label="Label"
      onChange={action('Change')}
    />
  ));
