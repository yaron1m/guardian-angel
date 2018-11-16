import React from 'react';
import {Text} from 'react-native';

export default class LinksScreen extends React.Component {
    static navigationOptions = {
        title: 'About',
    };

    render() {
        return (
            <Text styles={{margin: 10}}>Guardian Angel app @ Facebook Hackathon 2018</Text>
        );
    }
}
