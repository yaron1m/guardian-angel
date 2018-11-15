import React from 'react';
import {View, Button, Text} from 'react-native';

const styles= {
    container:{
        marginRight: 20 ,
        marginLeft: 20,
    },
    button:{
        marginTop: 10
    }
};

export default function UserSelector(props) {
    return (
        <View style={styles.container}>
            <Text>Selected user: {props.userId}</Text>
            {getButton('User', 'user', props.selectUser)}
            {getButton('Family Member', 'familyMember', props.selectUser)}
            {getButton('Guardian Angel', 'angel', props.selectUser)}
        </View>
    );
}

function getButton(name, type, selectUser) {
    return (
        <View style={styles.button}>
            <Button
                title={name}
                onPress={() => selectUser(type)}
            />
        </View>
    )
}
