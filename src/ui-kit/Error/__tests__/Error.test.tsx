import React from 'react';
import { shallow } from 'enzyme';
import Error from '../Error';

describe('Error component', () => {
  it('should render correctly', () => {
    const component = shallow(<Error>Error</Error>);
    expect(component).toMatchSnapshot();
  });
});
