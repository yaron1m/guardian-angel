import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {setIsUserLost, updateUserLocation} from '../store/users/Actions';
import ActionButton from '../components/ActionButton';

export default class LinksScreen extends React.Component {
    static navigationOptions = {
        title: 'Links',
    };

    changeLostPersonLocation(option) {
        const location = {
            name: 'Bill',
            pinColor: '#61a6fb'
        };
        switch (option) {
            case 1:
                location.lat = 37.484559;
                location.long = -122.148839;
                break;

            case 2:
                location.lat = 37.485224;
                location.long = -122.147996;
                break;

            case 3:
                location.lat = 37.485745;
                location.long = -122.146897;
                break;
        }

        updateUserLocation('lostUser', location);

        this.props.onUserChangeLocation();
    }

    render() {
        const onPress= (option) => () => this.changeLostPersonLocation.bind(this)(option);

        return (
            <ScrollView style={styles.container}>
                <ActionButton title="Not lost" onPress={() => setIsUserLost("lostUser", false)}/>
                <ActionButton title="near home" onPress={onPress(1)}/>
                <ActionButton title="near work" onPress={onPress(2)}/>
                <ActionButton title="lost" onPress={onPress(3)}/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});
