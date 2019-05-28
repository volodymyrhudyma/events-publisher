import React from 'react';
import { shallow } from 'enzyme';
import Card from '../Card';

describe('Card component', () => {
  it('should render correctly', () => {
    const component = shallow(<Card>Card</Card>);
    expect(component).toMatchSnapshot();
  });
});
