import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SubmitButton from './SubmitButton.js';



describe('SubmitButton should', () => {
    it ('exist', () => {
        expect(SubmitButton).toBeDefined()   
    });

    it('have a consistent structure', () => {
        const wrapper = mount(<SubmitButton />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('trigger the callback function when clicked', () => {
        const callback = jest.fn()
        const wrapper = mount(<SubmitButton onClick={callback} />)
        wrapper.find('input').simulate('click')
        expect(callback).toHaveBeenCalledTimes(1)
        
    })
})