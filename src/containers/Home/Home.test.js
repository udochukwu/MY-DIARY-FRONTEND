import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import Home from './Home';
import { HomeStore } from './mockStore';


const mockStore = configureMockStore([thunk]);
const store = mockStore(HomeStore);

let component;
let myComponent;

describe('<Home/>', () => {
  test('renders homepage', () => {
    component = shallow(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    myComponent = component.dive({ context: { store } }).dive();
    expect(component.exists()).toBe(true);
  });
  it('should have h1 with theme colour class', () => {
    expect(myComponent.find('h1.theme-color').exists()).toBe(true);
  });
});
