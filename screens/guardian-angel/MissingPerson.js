import {Text, View} from 'react-native';
import React from 'react';
import ActionButton from '../../components/ActionButton';

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
                <ActionButton
                    title="I'm on my way"
                    onPress={() => goToLostPerson(lostPerson.id)}
                />
            </View>
        </View>
    );
}