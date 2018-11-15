import React from 'react';
import {View} from "react-native";
import {MapView} from "expo";


export default function LocationMap() {
    return (
        <View>
            <MapView style={{alignSelf: 'stretch', height: 200}}
                     initialRegion={{
                         latitude: 37.78825,
                         longitude: -122.4324,
                         latitudeDelta: 0.0922,
                         longitudeDelta: 0.0421,
                     }}/>
        </View>)
}