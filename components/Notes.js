import React from 'react';
import {Text} from 'react-native';
import Section from "./Section";

export default function Notes(props) {
    return (
        <Section title={"Notes"}>
            <Text>{props.name}</Text>
        </Section>
    );
}

