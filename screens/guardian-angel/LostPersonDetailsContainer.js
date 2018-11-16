import {connect} from 'react-redux';
import {getUserById, getUsers} from '../../store/users/Selectors';
import LostPersonDetails from './LostPersonDetails';
import sendPushNotification from '../../util/PushNotificationSender';

function mapStateToProps(state, ownProps) {
    const userId = getUserId(ownProps);
    const lostPerson = getUserById(state, userId);
    const relative = getUserById(state,lostPerson.relativeUserId);

    lostPerson.relative = relative;
    return {
        lostPerson: lostPerson,
        onLostPersonFound: () => sendPushNotification(relative.expoToken, lostPerson.name + " was found!", "By one of our Guardian Angels" ),
    };
}

const getUserId = (props) => props.navigation.getParam('userId');

export default connect(mapStateToProps)(LostPersonDetails);