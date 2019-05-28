import React from 'react';
import { storiesOf } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import Select from '../Select';

storiesOf('Select', module).add('default', () => (
  <Select
    placeholder="Placeholder"
    options={[
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ]}
    value={{
      value: 'chocolate',
      label: 'Chocolate',
    }}
    onChange={action('Change')}
  />
));
