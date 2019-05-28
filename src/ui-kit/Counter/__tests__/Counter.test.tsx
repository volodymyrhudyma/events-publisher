import React from 'react';
import { shallow } from 'enzyme';
import Counter from '../Counter';

describe('Counter component', () => {
  it('should render correctly', () => {
    const component = shallow(<Counter maxLength={100} currentLength={0} />);
    expect(component).toMatchSnapshot();
  });
});
