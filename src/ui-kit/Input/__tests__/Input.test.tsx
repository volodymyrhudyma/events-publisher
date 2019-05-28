import React from 'react';
import { shallow } from 'enzyme';
import Input from '../Input';

describe('Input component', () => {
  it('should render correctly', () => {
    const component = shallow(
      <Input placeholder="Placeholder" value="" onChange={jest.fn()} />
    );
    expect(component).toMatchSnapshot();
  });
});
