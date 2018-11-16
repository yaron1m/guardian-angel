import {connect} from 'react-redux';
import {getUsers} from '../../store/users/Selectors';
import LostPersonDetails from './LostPersonDetails';

function mapStateToProps(state, ownProps) {
    const userId = getUserId(ownProps);
    const user = getUsers(state)[userId];

    user.relative = getUsers(state)[user.relativeUserId];
    return {
        lostPerson: user,
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    const userId = getUserId(ownProps);
    return {
        onLostPersonFound: () => console.log('Lost person found ' + userId),
    };
}

const getUserId = (props) => props.navigation.getParam('userId');

export default connect(mapStateToProps, mapDispatchToProps)(LostPersonDetails);