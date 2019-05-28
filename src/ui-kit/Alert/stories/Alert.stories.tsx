import React from 'react';
import { storiesOf } from '@storybook/react';

import Alert from '../Alert';

storiesOf('Alert', module).add('default', () => (
  <Alert primaryText="Success" secondaryText="Success" />
));
