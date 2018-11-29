import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import ViewEntry from './ViewEntry';
import { HomeStore } from './mockStore';


const mockStore = configureMockStore([thunk]);
const store = mockStore(HomeStore);

let component;
let myComponent;

describe('<ViewEntry/>', () => {
  test('renders view entry', () => {
    component = shallow(
      <Provider store={store}>
        <ViewEntry />
      </Provider>
    );
    myComponent = component.shallow({ context: { store } }).shallow();
    expect(component.exists()).toBe(true);
  });
  it('should have a div with class new entry', () => {
    expect(myComponent.find('div').exists()).toBe(true);
  });
});
