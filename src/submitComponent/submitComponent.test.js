import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SubmitComponent from './submitComponent.js';



describe('SubmitComponent should', () => {
    it ('exist', () => {
        expect(SubmitComponent).toBeDefined()   
    });

    it('have a consistent structure', () => {
        const wrapper = mount(<SubmitComponent />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('trigger the callback function when clicked', () => {
        const callback = jest.fn()
        const wrapper = mount(<SubmitComponent onClick={callback} />)
        wrapper.find('input').simulate('click')
        expect(callback).toHaveBeenCalledTimes(1)
        
    })
})