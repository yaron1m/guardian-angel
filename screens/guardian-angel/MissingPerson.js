import React from 'react';
import {View, Button, StyleSheet, Text, Image} from 'react-native';
import Section from "../../components/Section";
import getDistanceFromUsers from '../../util/DistanceUtil';
import Colors from '../../constants/Colors';

export default function MissingPerson({lostPerson, goToLostPerson, guardianAngel}) {
    return (
        <Section>
            <View style={styles.missingPersonContainer}>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>{lostPerson.name}</Text>
                    <View style={{flexDirection: "row"}}>
                        <Image style={styles.barScalePicture} source={require('../../assets/images/bar_scale_picture.png')} />
                        <Text>{getDistanceFromUsers(guardianAngel, lostPerson)} Away</Text>
                    </View>
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
        paddingBottom: 2,
        fontSize: 18
    },
    barScalePicture: {
        width: 15,
        marginRight: 5,
        height: 17
    },
    buttonContainer: {
        justifyContent: "space-around",
        alignItems: 'flex-end'
    },
});

