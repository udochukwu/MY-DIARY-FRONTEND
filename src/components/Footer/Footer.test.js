import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

let component;

describe('<Footer/>', () => {
  test('renders homepage', () => {
    component = shallow(
        <Footer />
    );
    expect(component.exists()).toBe(true);
  });
});
