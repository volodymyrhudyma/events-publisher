import React from 'react';
import { storiesOf } from '@storybook/react';
import icons from 'src/constants/icons';
import Icon from '../Icon';

storiesOf('Icon', module).add('default', () => <Icon src={icons.arrow} />);
