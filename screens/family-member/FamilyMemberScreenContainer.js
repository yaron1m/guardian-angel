import {connect} from 'react-redux';
import FamilyMemberScreen from './FamilyMemberScreen';
import {getSelectedUser} from '../../store/selected-user-id/Selectors';
import {getUserById} from '../../store/users/Selectors';
import {setIsUserLost} from '../../store/users/Actions';

function mapStateToProps(state) {
    const familyMember = getSelectedUser(state);
    const careUser = getUserById(state, familyMember.careUserId);

    return {
        careUser,
        showIsWithMeButton: Boolean(careUser.isLost),
        onWithMePress: () => setIsUserLost(careUser.id, false)
    }
}

export default connect(mapStateToProps)(FamilyMemberScreen);