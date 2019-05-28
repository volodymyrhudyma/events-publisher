import React from 'react';
import { storiesOf } from '@storybook/react';

import Container from '../Container';

storiesOf('Container', module).add('default', () => (
  <Container>
    <div>Container</div>
  </Container>
));
