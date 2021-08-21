import React from 'react';
import { shallow } from 'enzyme';
import { findByDataAttr, checkProps } from '../../../Utils';
import SharedButton from './index';

describe('SharedButton Component', () => {

  describe('Checking PropTypes', () => {

    it('should NOT throw a warning', () => {
      const expProps = {
        buttonText: 'Example Button Text',
        emitEvent: () => { }
      };
      const propsError = checkProps(SharedButton, expProps);
      expect(propsError).toBeUndefined();
    });

  });

  describe('Renders', () => {
    let component;
    beforeEach(() => {
      const props = {
        buttonText: 'Example Button Text',
        emitEvent: () => { }
      };
      component = shallow(<SharedButton {...props} />)
    });

    it('should render a button', () => {
      const button = findByDataAttr(component, 'buttonComponent');
      expect(button.length).toBe(1);
    })

  });

});