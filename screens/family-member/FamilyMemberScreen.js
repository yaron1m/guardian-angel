import {View} from 'react-native';
import React from 'react';
import PersonalDetails from '../../components/PersonalDetails';
import ActionButton from '../../components/ActionButton';
import UsersMap from '../../components/UsersMap';
import Title from '../../components/Title';

const styles = {
    container: {
        margin: 10,
        marginTop: 15
    },
    mapContainer: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#fff',
        marginLeft: 12,
        marginRight: 12,
        marginBottom: 15
    }
};

export default class FamilyMemberScreen extends React.Component {
    static navigationOptions = {
        title: "Your relative",
    };

    render() {
        return (
            <View style={styles.container}>
                <Title text={"Guard Your Relative"}/>

                <PersonalDetails lostPerson={this.props.careUser}/>

                <UsersMap user={this.props.careUser}/>

                {this.props.showIsWithMeButton && <ActionButton
                    title={this.props.careUser.name + " is with me"}
                    onPress={this.props.onWithMePress}
                />}
            </View>
        );
    }
}