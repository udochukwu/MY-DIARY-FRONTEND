import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import Entries from './Entries';
import { HomeStore } from './mockStore';


const mockStore = configureMockStore([thunk]);
const store = mockStore(HomeStore);

let component;
let myComponent;

describe('<Entries/>', () => {
  test('renders homepage', () => {
    component = shallow(
      <Provider store={store}>
        <Entries />
      </Provider>
    );
    myComponent = component.shallow({ context: { store } }).shallow();
    expect(component.exists()).toBe(true);
  });
  it('should have a div with class entries', () => {
    expect(myComponent.find('div.entries').exists()).toBe(true);
  });
  it('should have a table', () => {
    expect(myComponent.find('table.text-left').exists()).toBe(true);
  });
});
