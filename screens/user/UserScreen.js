import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react'
import Title from '../../components/Title'

export default function LostPeopleAroundYouScreen() {
    return (
        <View>
            <Title text={"Are You Lost?"}/>
            <View style={styles.lostButtonsContainer}>
                <Button title='Yes' onPress={() => console.log()} color={"#d66a00"}/>
                <Button title='No' onPress={() => console.log()} color={"#d66a00"}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    lostButtonsContainer: {
        marginLeft: 120,
        marginRight: 120,
        flexDirection: "row",
        justifyContent: "space-between"
    },
});
