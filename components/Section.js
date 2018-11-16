import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default function Section(props) {
    return (
        <View style={styles.section} elevation={2}>
            <Text style={styles.title}>{props.title}</Text>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#e7e7e7',
        backgroundColor: '#fff',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 0.8
    },
    title: {
        color: 'gray',
        paddingBottom: 5
    },
});
