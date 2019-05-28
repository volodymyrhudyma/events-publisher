import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import FormDate from '../FormDate';

storiesOf('FormDate', module).add('default', () => (
  <FormDate
    label="Label"
    placeholder="Placeholder"
    tip="Tip"
    dateValue=""
    timeValue=""
    timeTypeValue=""
    onDateChange={action('Date change')}
    onTimeChange={action('Time change')}
    onTimeTypeChange={action('Time type change')}
  />
));
