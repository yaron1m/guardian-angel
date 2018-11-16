import React from 'react';
import LostPeopleAroundYouScreenContainer from './guardian-angel/LostPeopleAroundYouScreenContainer';
import FamilyMemberScreenContainer from './family-member/FamilyMemberScreenContainer';
import UserScreenContainer from './user/UserScreenContainer';

export default function ScreenSelector({userId, navigation}) {

    switch (userId) {
        case 'user':
            return <UserScreenContainer navigation={navigation}/>

        case 'angel':
            return <LostPeopleAroundYouScreenContainer navigation={navigation}/>;

        case 'familyMember':
            return <FamilyMemberScreenContainer navigation={navigation}/>;

        default:
            return null;
    }
}