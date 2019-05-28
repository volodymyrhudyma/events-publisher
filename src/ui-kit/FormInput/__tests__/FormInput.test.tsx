import React from 'react';
import { shallow } from 'enzyme';
import FormInput from '../FormInput';

describe('FormInput component', () => {
  it('should render correctly', () => {
    const component = shallow(
      <FormInput
        label="Label"
        placeholder="Placeholder"
        value=""
        onChange={jest.fn()}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
