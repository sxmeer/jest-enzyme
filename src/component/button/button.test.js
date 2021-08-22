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
    let mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        buttonText: 'Example Button Text',
        emitEvent: mockFunc
      };
      component = shallow(<SharedButton {...props} />)
    });

    it('should render a button', () => {
      const button = findByDataAttr(component, 'buttonComponent');
      expect(button.length).toBe(1);
    });

    it('Should emit callback on click event', () => {
      const button = findByDataAttr(component, 'buttonComponent');
      button.simulate('click');
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    })

  });

});