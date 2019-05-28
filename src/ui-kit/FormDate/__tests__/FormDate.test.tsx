import React from 'react';
import { shallow } from 'enzyme';
import FormDate from '../FormDate';

describe('FormDate component', () => {
  it('should render correctly', () => {
    const component = shallow(
      <FormDate
        label="Label"
        placeholder="Placeholder"
        tip="Tip"
        dateValue=""
        timeValue=""
        timeTypeValue=""
        onDateChange={jest.fn()}
        onTimeChange={jest.fn()}
        onTimeTypeChange={jest.fn()}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
