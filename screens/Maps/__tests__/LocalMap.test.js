import React from 'react';
import {render} from '@testing-library/react-native';
import Maps from "./index.js";

it ('renders default elements', () => {
    const { getAllByText } = render(<Maps />);

    getAllByText('Maps').length(); 

})

//it renders default elements
//it renders marker1
//it handles valid input submission
//it renders marker2
//it renders polyline