import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import Signup from './Signup';
import { SIGNUP } from '../../actionTypes';
import { asyncActions } from '../../util/AsyncUtil';
import { HomeStore } from './mockStore';


const mockStore = configureMockStore([thunk]);
const store = mockStore(HomeStore);

let component;
let myComponent;

describe('<Signup/>', () => {
  test('renders view entry', () => {
    component = shallow(
      <Provider store={store}>
        <Signup />
      </Provider>
    );
    myComponent = component.shallow({ context: { store } }).shallow();
    expect(component.exists()).toBe(true);
  });
  it('should have a div with class new entry', () => {
    // expect(myComponent.find('div').exists()).toBe(true);
  });
  it('should create an action to signup', () => {
    const payload = {};
    payload.error = {};
    payload.status = false;
    const expectedAction = {
      type: 'SIGNUP_SUCCESS',
      payload
    };
    expect(asyncActions(SIGNUP).success(payload)).toEqual(expectedAction);
  });
});
