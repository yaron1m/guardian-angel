import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Colors from "../constants/Colors";

export default function ActionButton(props) {
    return (
        <View style={styles.buttonContainer}>
            <Button title={props.title} onPress={props.onPress} color={Colors.actionBottomColor}/>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 15,
    }
});
