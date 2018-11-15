import {connect} from 'react-redux';
import {getUsers} from '../../store/users/Selectors';
import LostPersonDetails from './LostPersonDetails';

function mapStateToProps(state, ownProps){
    const userId = ownProps.navigation.getParam("userId");
    console.log(userId);
    return {
        lostPerson: getUsers(state)[userId],
    }
}

function mapDispatchToProps(dispatch) {
    return {
        goToLostPerson: (userId) => console.log(userId),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LostPersonDetails);