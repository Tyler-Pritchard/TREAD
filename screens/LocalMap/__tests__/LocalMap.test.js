import React from 'react';
import {render} from '@testing-library/react-native';
import LocalMap from "../../components/LocalMap";

it ('renders default elements', () => {
    const { getAllByText } = render(<LocalMap />);

    getAllByText('LocalMap').length

})

//it renders default elements
//it renders marker1
//it handles valid input submission
//it renders marker2
//it renders polyline