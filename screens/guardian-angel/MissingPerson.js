import React from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';
import Section from "../../components/Section";
import Colors from '../../constants/Colors';

export default function MissingPerson({lostPerson, goToLostPerson}) {
    return (
        <Section>
            <View style={styles.missingPersonContainer}>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>
                        <Text>{lostPerson.name},</Text> <Text>{lostPerson.goToLostPerson} km</Text>
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="I'm On My Way" onPress={() => goToLostPerson(lostPerson.id)} color={Colors.actionBottomColor}/>
                </View>
            </View>
        </Section>
    );
}

const styles = StyleSheet.create({
    missingPersonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
        marginTop: 5
    },
    infoContainer: {
        justifyContent: "space-around"
    },
    infoText: {
        fontSize: 18,
    },
    buttonContainer: {
        alignItems: 'flex-end'
    },
});

