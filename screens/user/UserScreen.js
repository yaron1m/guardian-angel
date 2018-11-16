import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react'
import Title from '../../components/Title'
import Colors from '../../constants/Colors';

export default function LostPeopleAroundYouScreen() {
    return (
        <View>
            <Title text={"Are You Lost?"}/>
            <View style={styles.lostButtonsContainer}>
                <Button title='Yes' onPress={() => console.log()} color={Colors.actionBottomColor}/>
                <Button title='No' onPress={() => console.log()} color={Colors.actionBottomColor}/>
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
