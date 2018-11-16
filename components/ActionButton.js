import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

export default function ActionButton(props) {
    console.log(props.name);
    return (
        <View style={styles.buttonContainer}>
            <Button title="Press on my" onPress={props.onPress} color={"#d66a00"} buttonStyle={styles.button}/>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginLeft: 10,
        marginRight: 10,
    }
});
