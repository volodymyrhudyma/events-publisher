import React from 'react';
import { shallow } from 'enzyme';
import Textarea from '../Textarea';

describe('Textarea component', () => {
  it('should render correctly', () => {
    const component = shallow(
      <Textarea placeholder="Placeholder" value="" onChange={jest.fn()} />
    );
    expect(component).toMatchSnapshot();
  });
});
