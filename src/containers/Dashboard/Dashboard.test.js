import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import Dashboard from './Dashboard';
import { SIGNUP } from '../../actionTypes';
import { asyncActions } from '../../util/AsyncUtil';
import { HomeStore } from './mockStore';


const mockStore = configureMockStore([thunk]);
const store = mockStore(HomeStore);

let component;
let myComponent;

describe('<Dashboard/>', () => {
  test('renders homepage', () => {
    component = shallow(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );
    myComponent = component.shallow({ context: { store } }).shallow();
    expect(component.exists()).toBe(true);
  });
  it('should have a div with class summary', () => {
    expect(myComponent.find('div.summary').exists()).toBe(true);
  });
  it('should have an avatar image', () => {
    expect(myComponent.find('img.avatar-image').exists()).toBe(true);
  });
  it('should have a crete entry icon', () => {
    expect(myComponent.find('i.fa-plus-circle').exists()).toBe(true);
  });
  it('should have a list icon', () => {
    expect(myComponent.find('i.fa-list-ul').exists()).toBe(true);
  });
  it('should create an action for signup sucess', () => {
    const payload = true;
    const expectedAction = {
      type: 'SIGNUP_SUCCESS',
      payload
    };
    expect(asyncActions(SIGNUP).success(payload)).toEqual(expectedAction);
  });
  it('should create an action for signup failure', () => {
    const expectedAction = {
      type: 'SIGNUP_FAILING',
      payload: { status: true, error: {} }
    };
    expect(asyncActions(SIGNUP).failure(true, {})).toEqual(expectedAction);
  });
});
