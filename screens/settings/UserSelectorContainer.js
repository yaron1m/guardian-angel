import {connect} from "react-redux";
import {selectUser} from '../../store/selected-user-id/Actions';
import UserSelector from './UserSelector';
import {getSelectedUser} from '../../store/selected-user-id/Selectors';

function mapStateToProps(state){
    return {
        userId: getSelectedUser(state).id
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        selectUser: (userId) => {
            dispatch(selectUser(userId));
            ownProps.navigation.navigate("Home");
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSelector);