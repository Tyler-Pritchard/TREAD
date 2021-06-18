import React from 'react';
import {shallow} from 'enzyme';
import Maps from '../MapsContainer';


describe('Maps', () => {
    describe('Rendering', () => {
        it('should match to snapshot', () => {
            const component = shallow(<Maps label="test label"/>)
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

// Given - some precondition
// When - some action executed by the function that you’re testing
// Then - the expected outcome