import {Text, View} from 'react-native';
import React from 'react';
import MissingPerson from './MissingPerson';
import _ from 'lodash';

const styles = {
    container: {
        margin: 10,
    }
}

export default class LostPersonDetails extends React.Component {
    static navigationOptions = {
        title: "Find a lost person",
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>This is {this.props.lostPerson.name} and he is lost</Text>
            </View>
        );
    }
}