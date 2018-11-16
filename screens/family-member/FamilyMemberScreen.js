import {Text, View} from 'react-native';
import React from 'react';
import PersonalDetails from '../../components/PersonalDetails';
import ActionButton from '../../components/ActionButton';

const styles = {
    container: {
        margin: 10,
    }
}

export default class FamilyMemberScreen extends React.Component {
    static navigationOptions = {
        title: "Your relative",
    };

    render() {
        return (
            <View style={styles.container}>
                <PersonalDetails lostPerson={this.props.careUser}/>

                <Text>Map here </Text>

                {this.props.showIsWithMeButton && <ActionButton
                    title="David is with me"
                    onPress={this.props.onWithMePress}
                />}
            </View>
        );
    }
}