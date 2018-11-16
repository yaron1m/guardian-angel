import React from 'react';
import {View, Text} from 'react-native';
import ActionButton from '../../components/ActionButton';

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
            {getButton('User', 'lostUser', props.selectUser)}
            {getButton('Family Member', 'familyMember', props.selectUser)}
            {getButton('Guardian Angel', 'angel', props.selectUser)}
        </View>
    );
}

function getButton(name, type, selectUser) {
    return (
        <View style={styles.button}>
            <ActionButton
                title={name}
                onPress={() => selectUser(type)}
            />
        </View>
    )
}
