import {Text, View} from 'react-native';
import React from 'react';
import PersonalDetails from '../../components/PersonalDetails';
import ActionButton from '../../components/ActionButton';
import FamilyMemberMap from './FamilyMemberMap';
import Title from '../../components/Title';

const styles = {
    container: {
        margin: 10,
        marginTop: 20
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

                <FamilyMemberMap user={this.props.careUser}/>

                {this.props.showIsWithMeButton && <ActionButton
                    title={this.props.careUser.name + " is with me"}
                    onPress={this.props.onWithMePress}
                />}
            </View>
        );
    }
}