import React from 'react';
import {shallow} from 'enzyme';
import LocalMap from '../LocalMapView';


describe('LocalMap', () => {
    describe('Rendering', () => {
        it('should match to snapshot', () => {
            const component = shallow(<LocalMap label="test label"/>)
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