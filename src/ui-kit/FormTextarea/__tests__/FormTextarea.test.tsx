import React from 'react';
import { shallow } from 'enzyme';
import FormTextarea from '../FormTextarea';

describe('FormTextarea component', () => {
  it('should render correctly', () => {
    const component = shallow(
      <FormTextarea
        label="Label"
        placeholder="Placeholder"
        value=""
        onChange={jest.fn()}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
