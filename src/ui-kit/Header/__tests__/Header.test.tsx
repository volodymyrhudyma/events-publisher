import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('Header component', () => {
  it('should render correctly', () => {
    const component = shallow(<Header>Header</Header>);
    expect(component).toMatchSnapshot();
  });
});
