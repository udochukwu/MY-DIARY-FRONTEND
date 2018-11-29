import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import Header from './Header';
import { HomeStore } from './mockStore';


const mockStore = configureMockStore([thunk]);
const store = mockStore(HomeStore);

let component;
let myComponent;

describe('<Header/>', () => {
  test('renders homepage', () => {
    component = shallow(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    myComponent = component.shallow({ context: { store } }).shallow();
    expect(component.exists()).toBe(true);
  });
  // it('should have a function  that handles input change event', () => {
  //   expect(myComponent.instance().logout).toBeDefined();
  // });
});
