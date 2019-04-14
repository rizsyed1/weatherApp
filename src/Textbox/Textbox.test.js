import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Textbox from './Textbox.js';



describe('Textbox should', () => {
    it ('exist', () => {
        expect(Textbox).toBeDefined()   
    });

    it('have a consistent structure', () => {
        const wrapper = mount(<Textbox />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})