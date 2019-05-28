import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import FormSelect from '../FormSelect';

storiesOf('FormSelect', module).add('default', () => (
  <FormSelect
    label="Label"
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
