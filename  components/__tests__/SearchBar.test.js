import React from 'react';
import {shallow} from 'enzyme';
import SearchBar from '../SearchBar/SearchBar';


describe('SearchBar', () => {
    describe('Rendering', () => {
        it('should match to snapshot', () => {
            const component = shallow(<SearchBar label="test label"/>)
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