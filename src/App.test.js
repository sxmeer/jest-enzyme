import App from './App';
import { shallow } from 'enzyme';
import { findByDataAttr, testStore } from './../Utils';
import React from 'react';

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const component = shallow(<App store={store} />).childAt(0).dive();
  return component;
};

describe('App Component', () => {

  let component;
  beforeEach(() => {
    const initialState = {
      posts: [
        { title: "Example title 1", body: 'Some text' },
        { title: "Example title 2", body: 'Some text' },
        { title: "Example title 3", body: 'Some text' }
      ]
    }
    component = setUp(initialState);
  });

  it('Should render without errors', () => {
    const wrapper = findByDataAttr(component, 'appComponent');
    expect(wrapper.length).toBe(1);

  })

});