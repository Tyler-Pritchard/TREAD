import React from 'react';
import { View } from 'react-native';
import styles from './styles';

import { Searchbar } from 'react-native-paper';
//TODO: extract query logic from view component or rename this or something...
export const MapQuery = (props) => {

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <View>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={styles.search}
            /> 
        </View>
    );
}