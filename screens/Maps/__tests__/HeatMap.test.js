import React from 'react';
import {shallow} from 'enzyme';
import Heatmap from '../HeatMapView';


describe('Heatmap', () => {
    describe('Rendering', () => {
        it('should match to snapshot', () => {
            const component = shallow(<Heatmap label="test label"/>)
            expect(component).toMatchSnapshot()
        });
    });
});


// test.only('FIRST TEST THAT RUNS', () => {
//     expect(true).toBe(true);
//   });
  
//   test('LAST TEST WILL NOT RUN', () => {
//     expect('A').toBe('A');
//   });



//it renders default elements
//it renders marker1
//it handles valid input submission
//it renders marker2
//it renders polyline