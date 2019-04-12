import React from 'react';
import Mount from 'enzyme';
import toJson from 'enzyme-to-json';
import WeatherComponent from './weatherComponent.js'

describe('WeatherComponent should', () => {
    it('exist', () => {
        expect(WeatherComponent).toBeDefined();
    })
})