import {Text, View} from 'react-native';
import React from 'react';
import MissingPerson from './MissingPerson';
import _ from 'lodash';
import Title from "../../components/Title";
import LocationMap from '../../components/map/LocationMap';

const styles = {
    container: {
        margin: 10
    }
};

export default function LostPeopleAroundYouScreen(props) {
    return (
        <View style={styles.container}>
            <Title text={"Missing People Around You"}/>

            {getMap()}

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

    function getMap() {
        const lostPersonLocations = Object.keys(props.lostPeople).map((key) => props.lostPeople[key].location);
        return (<LocationMap center={props.guardianAngel.location} points={lostPersonLocations}/>);
    }
}