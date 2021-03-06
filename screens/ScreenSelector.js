import React from 'react';
import LostPeopleAroundYouScreenContainer from './guardian-angel/LostPeopleAroundYouScreenContainer';
import FamilyMemberScreenContainer from './family-member/FamilyMemberScreenContainer';

export default function ScreenSelector({userId, navigation}) {
    switch (userId) {
        case 'familyMember':
            return <FamilyMemberScreenContainer navigation={navigation}/>;

        case 'angel':
            return <LostPeopleAroundYouScreenContainer navigation={navigation}/>;

        default:
            return null;
    }

}