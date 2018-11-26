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
    myComponent = component.shallow({ context: { store } }).shallow();
    expect(component.exists()).toBe(true);
  });
  it('should have a main wrapper', () => {
    expect(myComponent.find('div.main-wrapper').exists()).toBe(true);
  });
  it('should have a section tag with className section-1', () => {
    expect(myComponent.find('section.section-1').exists()).toBe(true);
  });
  it('should have a H1 tag', () => {
    expect(myComponent.find('h1').exists()).toBe(true);
  });
  it('should have a P tag', () => {
    expect(myComponent.find('p').exists()).toBe(true);
  });
});
