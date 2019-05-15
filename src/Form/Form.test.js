import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form.js';

describe(('Form component'), () => {
    it ('should exist', () => {
        const wrapper = shallow(<Form />) 
        expect(wrapper).toBeDefined()
    });
})



