import {Text, View} from 'react-native';
import React from 'react';
import MissingPerson from './MissingPerson';
import _ from 'lodash';
import Title from "../../components/Title";

const styles = {
    container: {
        margin: 10,
    }
};

export default function LostPeopleAroundYouScreen(props) {
    return (
        <View style={styles.container}>
            <Title text={"Missing People Around You"}/>

            {_.map(props.lostPeople, lostPerson =>
                <MissingPerson
                    key={lostPerson.id}
                    lostPerson={lostPerson}
                    goToLostPerson={props.goToLostPerson}
                    guardianAngel={props.guardianAngel}
                />
            )}
        </View>
    );
}