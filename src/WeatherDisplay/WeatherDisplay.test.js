import React from 'react';
import Mount from 'enzyme';
import toJson from 'enzyme-to-json';
import WeatherDisplay from './WeatherDisplay.js'

describe('WeatherDisplay should', () => {
    it('exist', () => {
        expect(WeatherDisplay).toBeDefined();
    })
})