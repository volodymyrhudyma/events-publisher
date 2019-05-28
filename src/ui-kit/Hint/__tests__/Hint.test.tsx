import React from 'react';
import { shallow } from 'enzyme';
import Hint from '../Hint';

describe('Hint component', () => {
  it('should render correctly', () => {
    const component = shallow(<Hint>Hint</Hint>);
    expect(component).toMatchSnapshot();
  });
});
