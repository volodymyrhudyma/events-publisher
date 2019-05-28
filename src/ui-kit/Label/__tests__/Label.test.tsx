import React from 'react';
import { shallow } from 'enzyme';
import Label from '../Label';

describe('Label component', () => {
  it('should render correctly', () => {
    const component = shallow(<Label>Label</Label>);
    expect(component).toMatchSnapshot();
  });
});
