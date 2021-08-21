import React from 'react';
import { shallow } from 'enzyme';
import { findByDataAttr, checkProps } from '../../../Utils'

import ListItem from './index';

describe('ListItem Component', () => {

  describe('Checking PropTypes', () => {
    it('should NOT throw a warning', () => {
      const expProps = {
        title: 'Example Title',
        desc: 'Some Text'
      };
      const propsError = checkProps(ListItem, expProps);
      expect(propsError).toBeUndefined();
    });

  });

  describe('Component Renders', () => {

    let component;
    beforeEach(() => {
      const props = {
        title: 'Example Title',
        desc: 'Some Text'
      };
      component = shallow(<ListItem {...props} />)
    });

    it('Should render without error', () => {
      const wrapper = findByDataAttr(component, 'listItemComponent');
      expect(wrapper.length).toBe(1);
    });

    it('Should render title', () => {
      const wrapper = findByDataAttr(component, 'componentTitle');
      expect(wrapper.length).toBe(1);
    });

    it('Should render desc', () => {
      const wrapper = findByDataAttr(component, 'componentDesc');
      expect(wrapper.length).toBe(1);
    });

  });

  describe('Should NOT render', () => {
    let component;
    beforeEach(() => {
      const props = {
        desc: 'Some Text'
      };
      component = shallow(<ListItem {...props} />)
    });

    it('Component is not rendered', () => {
      const wrapper = findByDataAttr(component, 'listItemComponent');
      expect(wrapper.length).toBe(0);
    })
  })

});