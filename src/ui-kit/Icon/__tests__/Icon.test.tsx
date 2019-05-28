import React from 'react';
import { shallow } from 'enzyme';
import icons from 'src/constants/icons';
import Icon from '../Icon';

describe('Icon component', () => {
  it('should render correctly', () => {
    const component = shallow(<Icon src={icons.arrow} />);
    expect(component).toMatchSnapshot();
  });
});
