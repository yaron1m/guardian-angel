import {MapView} from "expo";
import React, {Component} from 'react';
import {View, Text} from 'react-native';

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
                {/*<Text>Latitude: {this.props.lat}</Text>*/}
                {/*<Text>Longitude: {this.props.long}</Text>*/}
                {/*<MapView style={{alignSelf: 'stretch', height: 200}} initialRegion={initialRegion}>*/}
                    {/*{this.props.points.map(point => (*/}
                        {/*<MapView.MapMarker*/}
                            {/*key={point.name}*/}
                            {/*coordinate={{latitude:this.props.lat,longitude: this.props.long}}*/}
                            {/*title={point.name}*/}
                            {/*name={point.name}*/}
                            {/*description={point.name}*/}
                        {/*/>*/}
                    {/*))}*/}
                {/*</MapView>*/}
                {/*{this.props.error && <Text>Error: {this.props.error}</Text>}*/}
            </View>
        );
    }
}

export default LocationMap;