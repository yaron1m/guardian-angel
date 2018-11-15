import {connect} from 'react-redux';
import LostPeopleAroundYouScreen from './LostPeopleAroundYouScreen';
import {getLostPeople} from '../../store/users/Selectors';

function mapStateToProps(state){
    return {
        lostPeople: getLostPeople(state),
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        goToLostPerson: (userId) => ownProps.navigation.navigate('LostPersonDetailsContainer', {userId}),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LostPeopleAroundYouScreen);