import {connect} from 'react-redux';
import {getUserById, getUsers} from '../../store/users/Selectors';
import LostPersonDetails from './LostPersonDetails';
import sendPushNotification from '../../util/PushNotificationSender';
import {setIsUserLost} from '../../store/users/Actions';
import {getSelectedUser} from '../../store/selected-user-id/Selectors';

function mapStateToProps(state, ownProps) {
    const userId = getUserId(ownProps);
    const lostPerson = getUserById(state, userId);
    const relative = getUserById(state,lostPerson.relativeUserId);
    const angel = getSelectedUser(state);

    lostPerson.relative = relative;
    return {
        lostPerson: lostPerson,
        angel,
        onLostPersonFound: () => {
            sendPushNotification(relative.expoToken, lostPerson.name + " was found!", "By one of our Guardian Angels" );
            setIsUserLost(lostPerson.id, false);
            ownProps.navigation.goBack();
        }
    };
}

const getUserId = (props) => props.navigation.getParam('userId');

export default connect(mapStateToProps)(LostPersonDetails);