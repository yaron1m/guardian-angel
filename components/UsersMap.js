import React from 'react';
import LocationMap from './map/LocationMap';
import {View} from "react-native";

export default function UsersMap({user}) {
    const knownLocations = Object.keys(user.knownLocations).map((key) => user.knownLocations[key]);

    return (
        <View style={styles.mapContainer}>
            <LocationMap center={user.location} points={knownLocations}/>
        </View>
    );
}

const styles = {
    mapContainer: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#fff',
        marginLeft: 12,
        marginRight: 12,
        marginBottom: 15
    }
};
