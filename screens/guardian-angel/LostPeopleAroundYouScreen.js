import {Text, View} from 'react-native';
import React from 'react';
import MissingPerson from './MissingPerson';
import _ from 'lodash';

const styles = {
    container: {
        margin: 10,
    },
    title: {
        padding: 10,
        fontSize: 24,
        marginBottom: 10,
        fontWeight: 'bold',
        textAlign: 'center'
    }
};

export default function LostPeopleAroundYouScreen(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Missing People Around You</Text>

            {_.map(props.lostPeople, lostPerson =>
                <MissingPerson
                    key={lostPerson.id}
                    lostPerson={lostPerson}
                    goToLostPerson={props.goToLostPerson}
                />
            )}
        </View>
    );
}