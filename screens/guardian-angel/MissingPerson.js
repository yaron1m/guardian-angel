import {Button, Text, View} from 'react-native';
import React from 'react';

const styles = {
    container: {
        margin: 10,
        borderColor: 'black',
        borderWidth: 1
    },
    button:{}
}

export default function LostPeopleAroundYouScreen({lostPerson, goToLostPerson}) {
    return (
        <View style={styles.container}>
            <Text>{lostPerson.name}</Text>
            <Text>{lostPerson.distance} KM</Text>
            <View style={styles.button}>
                <Button
                    title="I'm on my way"
                    onPress={() => goToLostPerson(lostPerson.id)}
                />
            </View>
        </View>
    );
}