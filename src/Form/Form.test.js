import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Form from './Form.js';

describe(('Form'), () => {
    it ('should exist', () => {
        const wrapper = mount(<Form />) 
        expect(wrapper.contains(<form></form>)).to.equal(true)
    });

    it('should have a consistent structure', () => {
        const wrapper = mount(<Form/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    })


})



