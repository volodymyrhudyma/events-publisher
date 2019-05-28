import React from 'react';
import { shallow } from 'enzyme';
import FormControl from '../FormControl';

describe('FormControl component', () => {
  it('should render correctly', () => {
    const component = shallow(
      <FormControl label="Label">FormControl</FormControl>
    );
    expect(component).toMatchSnapshot();
  });
});
