import {connect} from "react-redux";
import {selectUser} from '../../store/selected-user/Actions';
import UserSelector from './UserSelector';
import {getSelectedUser} from '../../store/selected-user/Selectors';

function mapStateToProps(state){
    return {
        userId: getSelectedUser(state).id
    }
}

function mapDispatchToProps(dispatch) {
    return {
        selectUser: (userId) => dispatch(selectUser(userId)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSelector);