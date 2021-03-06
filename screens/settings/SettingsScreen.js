import React from 'react';
import UserSelectorContainer from './UserSelectorContainer';

export default class SettingsScreen extends React.Component {
    static navigationOptions = {
        title: 'Settings',
    };

    render() {
        /* Go ahead and delete ExpoConfigView and replace it with your
         * content, we just wanted to give you a quick view of your config */
        return <UserSelectorContainer navigation={this.props.navigation}/>;
    }
}
