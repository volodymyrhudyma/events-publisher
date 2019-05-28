import { shallow } from 'enzyme';
import React from 'react';
import App from '../App';
import i18n from 'i18next';

describe('App with Enzyme and Jest', () => {
  it('should render correctly', () => {
    const component = shallow(
      <App
        fetchCategories={jest.fn()}
        fetchEmployees={jest.fn()}
        categories={[]}
        employees={[]}
        t={jest.fn()}
        i18n={i18n}
        tReady={false}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
