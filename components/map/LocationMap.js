import {MapView} from "expo";
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Marker} from 'react-native-maps';

class LocationMap extends Component {
    render() {
        const initialRegion = {
            latitude: this.props.lat,
            longitude: this.props.long,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        };

        console.log(initialRegion);

        return (
            <View style={{flexGrow: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Latitude: {this.props.lat}</Text>
                <Text>Longitude: {this.props.long}</Text>
                <MapView style={{alignSelf: 'stretch', height: 200}} initialRegion={initialRegion}>
                    {this.props.points.map(point => (
                        <Marker
                            key={point.name}
                            coordinate={point.lat + ',' + point.long}
                            title={point.name}
                            name={point.name}
                            description={point.name}
                        />
                    ))}
                </MapView>
                {this.state.error && <Text>Error: {this.state.error}</Text>}
            </View>
        );
    }
}

export default LocationMap;