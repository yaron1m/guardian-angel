import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import Section from "./Section";

export default function PersonalDetails({lostPerson}) {
    return (
        <Section title={"PersonalDetails"}>
            <View style={{flexDirection: "row"}}>

                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{uri: lostPerson.imageUrl}}
                    />
                </View>

                <View style={{flex: 3}}>
                    <Text>
                        <Text>Name:</Text> <Text style={styles.text}>{lostPerson.name}</Text>
                    </Text>
                    <Text>
                        <Text>Date of birth:</Text> <Text style={styles.text}>{lostPerson.dob}</Text>
                    </Text>
                    <Text>
                        <Text>Weight:</Text> <Text style={styles.text}>{lostPerson.weight}</Text> <Text>Height:</Text> <Text
                        style={styles.text}>{lostPerson.height}</Text>
                    </Text>
                    <Text>
                        <Text>Address:</Text> <Text style={styles.text}>{lostPerson.address}</Text>
                    </Text>
                </View>
            </View>
        </Section>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        marginTop: 5
    },
    image: {
        width: 70,
        height: 70
    },
    text: {
        fontWeight: "bold"
    }
});
