import React from 'react';
import {Text} from 'react-native';

export default function Title(props) {
    return (
        <Text style={styles.title}>{props.text}</Text>
    );
}

const styles = {
    title: {
        padding: 10,
        fontSize: 24,
        marginBottom: 10,
        fontWeight: 'bold',
        textAlign: 'center'
    }
};
