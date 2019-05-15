import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TextInput from './TextInput.js';



describe('TextInput should', () => {
    it ('exist', () => {
        let wrapper = shallow(<TextInput />)
        expect(wrapper).toBeDefined()   
    });
})