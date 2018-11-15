import {connect} from 'react-redux';
import ScreenSelector from './ScreenSelector';
import {getSelectedUser} from '../store/selected-user/Selectors';

function mapStateToProps(state){
    return {
        userId: getSelectedUser(state).id
    }
}

export default connect(mapStateToProps)(ScreenSelector);