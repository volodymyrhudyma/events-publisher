import React from 'react';
import { shallow } from 'enzyme';
import Title from '../Title';

describe('Title component', () => {
  it('should render correctly', () => {
    const component = shallow(<Title>Card</Title>);
    expect(component).toMatchSnapshot();
  });
});
