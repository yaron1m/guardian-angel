import {Text, View} from 'react-native';
import React from 'react';
import ActionButton from '../../components/ActionButton';
import ContactInfo from './ContactInfo';
import Section from '../../components/Section';
import PersonalDetails from '../../components/PersonalDetails';

const styles = {
    container: {
        margin: 10,
        marginTop: 20
    }
}

export default class LostPersonDetails extends React.Component {
    static navigationOptions = {
        title: "Find a Lost Person",
    };

    render() {
        return (
            <View style={styles.container}>
                <PersonalDetails lostPerson={this.props.lostPerson}/>

                <ContactInfo relative={this.props.lostPerson.relative}/>

                <Section title="Notes">
                    <Text>{this.props.lostPerson.notes}</Text>
                </Section>

                <ActionButton
                    title={`I found ${this.props.lostPerson.name}!`}
                    onPress={this.props.onLostPersonFound}
                />
            </View>
        );
    }
}