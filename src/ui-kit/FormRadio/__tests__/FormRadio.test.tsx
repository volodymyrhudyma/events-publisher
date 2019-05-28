import React from 'react';
import { shallow } from 'enzyme';
import FormRadio from '../FormRadio';

describe('FormRadio component', () => {
  it('should render correctly', () => {
    const component = shallow(
      <FormRadio
        label="Label"
        options={[
          { value: 'free', label: 'Free event' },
          { value: 'paid', label: 'Paid event' },
        ]}
        value=""
        onChange={jest.fn()}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
