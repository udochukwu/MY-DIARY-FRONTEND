import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import DisplayEntry from './DisplayEntry';
// import { HomeStore } from './mockStore';


const mockStore = configureMockStore([thunk]);
// const store = mockStore(HomeStore);

let component;
let myComponent;

describe('<Dashboard/>', () => {
  test('renders homepage', () => {
    component = shallow(
        <DisplayEntry />
    );
    expect(component.exists()).toBe(true);
  });
  // it('should have a div with class summary', () => {
  //   expect(myComponent.find('div.summary').exists()).toBe(true);
  // });
});
