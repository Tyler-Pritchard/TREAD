
test.only('this will be the only test that runs', () => {
    expect(true).toBe(true);
  });
  
  test('this test will not run', () => {
    expect('A').toBe('A');
  });



//it renders default elements
//it renders marker1
//it handles valid input submission
//it renders marker2
//it renders polyline

// Given - some precondition
// When - some action executed by the function that you’re testing
// Then - the expected outcome

//Add detox later for e2e and device simulation testing