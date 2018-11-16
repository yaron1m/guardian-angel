import {Text, View} from 'react-native';
import React from 'react';
import ActionButton from '../../components/ActionButton';
import ContactInfo from './ContactInfo';
import Section from '../../components/Section';
import PersonalDetails from '../../components/PersonalDetails';
import LocationMap from '../../components/map/LocationMap';

const styles = {
    container: {
        margin: 10,
        marginTop: 20
    },
    mapContainer: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#fff',
        marginLeft: 12,
        marginRight: 12,
        marginBottom: 15
    }
};

export default class LostPersonDetails extends React.Component {
    static navigationOptions = {
        title: "Find a Lost Person",
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.mapContainer}>
                    <LocationMap
                        center={this.props.angel.location}
                        points={[this.props.lostPerson.location]}
                        height={180}
                        latitudeDelta={0.001}
                        longitudeDelta={0.0008}
                    />
                </View>

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