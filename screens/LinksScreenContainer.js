import {connect} from 'react-redux';
import {calculateLostPeople} from '../store/users/Actions';
import LinksScreen from './LinksScreen';

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        onUserChangeLocation: () => dispatch(calculateLostPeople())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LinksScreen);