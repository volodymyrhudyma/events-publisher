import React from 'react';
import { shallow } from 'enzyme';
import Radio from '../Radio';

describe('Radio component', () => {
  it('should render correctly', () => {
    const component = shallow(
      <Radio value="Value" checked={false} label="Label" onChange={jest.fn()} />
    );
    expect(component).toMatchSnapshot();
  });
});
