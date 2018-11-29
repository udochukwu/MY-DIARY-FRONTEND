import React from 'react';
import { shallow } from 'enzyme';
import LandingHeader from './LandingHeader';

let component;

describe('<Landing Header/>', () => {
  test('renders homepage', () => {
    component = shallow(
        <LandingHeader />
    );
    expect(component.exists()).toBe(true);
  });
});
