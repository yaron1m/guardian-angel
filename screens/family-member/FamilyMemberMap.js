import React from 'react';
import LocationMap from '../../components/map/LocationMap';

export default function FamilyMemberMap({user}) {
    const knownLocations = Object.keys(user.knownLocations).map((key) => user.knownLocations[key]);
    getCenter();

    function getCenter() {
        let allLocations = Object.assign(knownLocations);
        allLocations.push(user.location);

        let latSum = 0;
        for (let i = 0; i < allLocations.length; i++) {
            latSum += allLocations[i].lat; //don't forget to add the base
        }

        const latAvg = latSum / allLocations.length;

        let longSum = 0;
        for (let i = 0; i < allLocations.length; i++) {
            longSum += allLocations[i].long; //don't forget to add the base
        }

        const longAvg = longSum / allLocations.length;

        return {
            lat: latAvg,
            long: longAvg
        }
    }

    return (<LocationMap lat={getCenter().lat} long={getCenter().long} points={knownLocations}/>);

}