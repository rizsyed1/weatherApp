import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import FormComponent from './formComponent.js';

describe(('FormComponent'), () => {
    it ('should exist', () => {
        const wrapper = mount(<FormComponent />) 
        expect(wrapper.contains(<form></form>)).to.equal(true)
    });

    it('should have a consistent structure', () => {
        const wrapper = mount(<FormComponent/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    })


})



