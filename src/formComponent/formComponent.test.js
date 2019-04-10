import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import FormComponent from './formComponent.js';

describe(('FormComponent should'), () => {
    it ('exist', () => {
        expect(FormComponent).toBeDefined()
    });

    it('should have a consistent structure', () => {
        const wrapper = mount(<FormComponent/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

})
