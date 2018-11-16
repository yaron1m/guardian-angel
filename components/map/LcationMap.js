import {MapView} from "expo";
import React, {Component} from 'react';
import {View, Text} from 'react-native';

class GeolocationExample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            latitude: null,
            longitude: null,
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
                             latitudeDelta: 0,
                             longitudeDelta: 0,
                         }}/>
                {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
            </View>
        );
    }
}

export default GeolocationExample;