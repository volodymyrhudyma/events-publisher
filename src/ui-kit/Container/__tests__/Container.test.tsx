import React from 'react';
import { shallow } from 'enzyme';
import Container from '../Container';

describe('Container component', () => {
  it('should render correctly', () => {
    const component = shallow(<Container>Container</Container>);
    expect(component).toMatchSnapshot();
  });
});
