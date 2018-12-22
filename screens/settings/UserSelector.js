import React from 'react';
import {View, Text} from 'react-native';
import ActionButton from '../../components/ActionButton';
import Title from '../../components/Title';

const styles= {
    container:{
        marginRight: 20 ,
        marginLeft: 20,
    },
    button:{
        marginBottom: 10
    }
};

export default function UserSelector(props) {
    return (
        <View style={styles.container}>
            <Title text={'Selected User: ' + props.userId} />
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
