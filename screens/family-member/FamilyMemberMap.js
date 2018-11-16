import React from 'react';
import LocationMap from '../../components/map/LocationMap';

export default function FamilyMemberMap({user}) {
    const knownLocations = Object.keys(user.knownLocations).map((key) => user.knownLocations[key]);

    return (
        <LocationMap center={user.location} points={knownLocations}/>
    );
}