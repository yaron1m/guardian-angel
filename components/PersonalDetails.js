import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import Section from './Section';

export default function PersonalDetails({lostPerson}) {
    return (
        <Section title={'Personal Details'}>
            <View style={{flexDirection: 'row'}}>

                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{uri: lostPerson.imageUrl}}
                    />
                </View>

                <View style={{flex: 3}}>
                    <Text style={styles.infoLine}>
                        <Text style={styles.text}>Name:</Text> <Text>{lostPerson.name}</Text>
                    </Text>
                    <Text style={styles.infoLine}>
                        <Text style={styles.text}>Date of birth:</Text> <Text>{lostPerson.dob}</Text>
                    </Text>
                    <Text style={styles.infoLine}>
                        <Text style={styles.text}>Weight:</Text> <Text>{lostPerson.weight}   </Text>
                        <Text style={styles.text}>Height:</Text> <Text>{lostPerson.height}</Text>
                    </Text>
                    <Text style={styles.infoLine}>
                        <Text style={styles.text}>Address:</Text> <Text>{lostPerson.address}</Text>
                    </Text>
                </View>
            </View>
        </Section>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        justifyContent: 'space-around'
    },
    image: {
        width: 75,
        height: 80,
        borderWidth: 0.5,
        borderColor: '#565656',
    },
    text: {
        fontWeight: 'bold'
    },
    infoLine: {
        marginBottom: 3
    }
});
