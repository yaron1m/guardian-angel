import {connect} from 'react-redux';
import LostPeopleAroundYouScreen from './LostPeopleAroundYouScreen';
import {getLostPeople} from '../../store/users/Selectors';
import {getSelectedUser} from '../../store/selected-user-id/Selectors';

function mapStateToProps(state) {
    return {
        lostPeople: getLostPeople(state),
        guardianAngel: getSelectedUser(state)
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        goToLostPerson: (userId) => ownProps.navigation.navigate('LostPersonDetailsContainer', {userId}),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LostPeopleAroundYouScreen);