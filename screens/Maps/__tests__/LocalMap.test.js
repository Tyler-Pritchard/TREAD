import { render } from '@testing-library/react-native';
import Maps from '../index';

test('should verify container renders', () => {
    const {queryMaps} = render(<Maps {...props} />);
    const containerView = queryMaps('View');

    expect(viewContainer).toHaveLength(2)
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

//Add detox later for e2e and device simulation testing