import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Section from "./Section";

export default function ContactInfo(props) {
    return (
        <Section title={"Contact Info"}>
            <Text style={styles.contactInfoText}>
                <Text>{props.name}:</Text> <Text>{props.phoneNumber}</Text>
            </Text>
        </Section>
    );
}

const styles = StyleSheet.create({
    contactInfoText: {
        fontSize: 26
    },
});
