import {MapView} from "expo";
import React, {Component} from 'react';
import {View, Text} from 'react-native';

const {Marker} = MapView;

class LocationMap extends Component {
    render() {
        const initialRegion = {
            latitude: this.props.center.lat,
            longitude: this.props.center.long,
            latitudeDelta: 0.0017,
            longitudeDelta: 0.0015,
        };

        function getMarker(point) {
            return (<Marker
                key={point.name}
                title={point.name}
                coordinate={{longitude: point.long, latitude: point.lat}}
                pinColor={point.pinColor}
            />);
        }

        return (
            <View style={{flexGrow: 1, alignItems: 'center', justifyContent: 'center'}}>
                <MapView style={{alignSelf: 'stretch', height: 300}} initialRegion={initialRegion}>
                    {getMarker(this.props.center)}
                    {this.props.points.map(point => (
                        getMarker(point)
                        ))}
                </MapView>
                {this.props.error && <Text>Error: {this.props.error}</Text>}
            </View>
        );
    }
}

export default LocationMap;