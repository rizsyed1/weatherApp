import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import TextInput from './TextInput.js';



describe('TextInput should', () => {
    it ('exist', () => {
        expect(Textbox).toBeDefined()   
    });

    it('have a consistent structure', () => {
        const wrapper = mount(<TextInput />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})