import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import TextboxComponent from './textboxComponent.js';



describe('TextboxComponent should', () => {
    it ('exist', () => {
        expect(TextboxComponent).toBeDefined()   
    });

    it('have a consistent structure', () => {
        const wrapper = mount(<TextboxComponent />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})