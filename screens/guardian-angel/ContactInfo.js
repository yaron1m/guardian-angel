import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Section from '../../components/Section';

export default function ContactInfo({relative}) {
    return (
        <Section title={"Care taker Info"}>
            <Text style={styles.contactInfoText}>
                <Text>{relative.name}: </Text>
                <Text>{relative.phone}</Text>
            </Text>
        </Section>
    );
}

const styles = StyleSheet.create({
    contactInfoText: {
    },
});
