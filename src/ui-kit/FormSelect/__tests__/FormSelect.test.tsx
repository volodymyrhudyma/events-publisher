import React from 'react';
import { shallow } from 'enzyme';
import FormSelect from '../FormSelect';

describe('FormSelect component', () => {
  it('should render correctly', () => {
    const component = shallow(
      <FormSelect
        label="Label"
        placeholder="Placeholder"
        options={[
          { value: 'chocolate', label: 'Chocolate' },
          { value: 'strawberry', label: 'Strawberry' },
          { value: 'vanilla', label: 'Vanilla' },
        ]}
        value={{
          value: 'chocolate',
          label: 'Chocolate',
        }}
        onChange={jest.fn()}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
