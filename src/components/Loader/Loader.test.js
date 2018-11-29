import React from 'react';
import { shallow } from 'enzyme';
import Loader from './Loader';

let component;

describe('<Dashboard/>', () => {
  test('renders homepage', () => {
    component = shallow(
        <Loader />
    );
    expect(component.exists()).toBe(true);
  });
});
