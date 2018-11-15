import {connect} from 'react-redux';
import {getUsers} from '../../store/users/Selectors';
import LostPersonDetails from './LostPersonDetails';

function mapStateToProps(state, ownProps){
    const userId = getUserId(ownProps);
    return {
        lostPerson: getUsers(state)[userId],
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    const userId = getUserId(ownProps);
    return {
        onLostPersonFound: () => console.log("Lost person found " + userId),
    };
}

const getUserId = (props) => props.navigation.getParam("userId");

export default connect(mapStateToProps, mapDispatchToProps)(LostPersonDetails);