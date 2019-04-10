import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json'
import SubmitComponent from './submitComponent.js';



describe('SubmitComponent should', () => {
    it ('exist', () => {
        expect(SubmitComponent).toBeDefined()   
    });

    it('have a consistent structure', () => {
        const wrapper = mount(<SubmitComponent />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})