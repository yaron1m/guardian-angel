import {Text, View} from 'react-native';
import React from 'react';
import MissingPerson from './MissingPerson';
import _ from 'lodash';

const styles = {
    container: {
        margin: 10,
    }
}

export default function LostPeopleAroundYouScreen(props) {
    return (
        <View style={styles.container}>
            <Text>Missing people around you</Text>
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