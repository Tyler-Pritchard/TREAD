import React from 'react';
import styles from '../../styles';

import { Searchbar } from 'react-native-paper';

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