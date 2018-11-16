import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Section from "../../components/Section";

export default function ContactInfo({relative}) {
    return (
        <Section title={"Contact Info"}>
            <Text style={styles.contactInfoText}>
                <Text>{relative.name}: </Text>
                <Text>{relative.phone}</Text>
            </Text>
        </Section>
    );
}

const styles = StyleSheet.create({
    contactInfoText: {
        fontSize: 26
    },
});
