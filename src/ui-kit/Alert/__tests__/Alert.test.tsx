import React from 'react';
import { shallow } from 'enzyme';
import Alert from '../Alert';

describe('Alert component', () => {
  it('should render correctly', () => {
    const component = shallow(
      <Alert primaryText="Success" secondaryText="Success" />
    );
    expect(component).toMatchSnapshot();
  });
});
