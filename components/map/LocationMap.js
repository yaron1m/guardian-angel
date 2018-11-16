import {MapView} from "expo";
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { Marker } from 'react-native-maps';

class LocationMap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            latitude: props.lat,
            longitude: props.long,
            points: props.points,
            error: null,
        };
    }

    render() {
        return (
            <View style={{flexGrow: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Latitude: {this.state.latitude}</Text>
                <Text>Longitude: {this.state.longitude}</Text>
                <MapView style={{alignSelf: 'stretch', height: 200}}
                         initialRegion={{
                             latitude: this.state.latitude,
                             longitude: this.state.longitude,
                             latitudeDelta: 0.0922,
                             longitudeDelta: 0.0421,
                         }}>
                    {this.state.points.map(point => (
                        <Marker
                            coordinate={point.lat + ',' + point.lang}
                            title={point.name}
                            description={""}
                        />
                    ))}
                </MapView>
                {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
            </View>
        );
    }
}

export default LocationMap;