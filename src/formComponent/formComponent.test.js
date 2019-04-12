import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import FormComponent from './formComponent.js';
import TextboxComponent from '../textboxComponent/textboxComponent.js'

describe(('FormComponent'), () => {
    it ('should exist', () => {
        expect(FormComponent).toBeDefined()
    });

    it('should have a consistent structure', () => {
        const wrapper = mount(<FormComponent/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    })


})



