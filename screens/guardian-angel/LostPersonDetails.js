import {Text, View} from 'react-native';
import React from 'react';
import ActionButton from '../../components/ActionButton';
import ContactInfo from './ContactInfo';
import Section from '../../components/Section';

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

                <ContactInfo relative={this.props.lostPerson.relative}/>

                <Section title="notes">
                    <Text>{this.props.lostPerson.notes}</Text>
                </Section>

                <ActionButton
                    title="I have found him!"
                    onPress={this.props.onLostPersonFound}
                />
            </View>
        );
    }
}