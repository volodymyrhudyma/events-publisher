import React from 'react';
import { shallow } from 'enzyme';
import FormNumber from '../FormNumber';

describe('FormNumber component', () => {
  it('should render correctly', () => {
    const component = shallow(
      <FormNumber
        label="Label"
        placeholder="Placeholder"
        tip="Tip"
        value=""
        onChange={jest.fn()}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
