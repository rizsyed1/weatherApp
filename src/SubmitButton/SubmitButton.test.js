import React from 'react';
import { mount } from 'enzyme';
import SubmitButton from './SubmitButton.js';



describe('SubmitButton should', () => {
    it ('exist', () => {
        expect(SubmitButton).toBeDefined()   
    });

    it('trigger the callback function when clicked', () => {
        const callback = jest.fn()
        const wrapper = mount(<SubmitButton handleSubmit={callback} />)
        wrapper.find('input').simulate('click')
        expect(callback).toHaveBeenCalledTimes(1)
        
    })
})