import React from 'react';
import LostPeopleAroundYouScreenContainer from './guardian-angel/LostPeopleAroundYouScreenContainer';
import FamilyMemberScreenContainer from './family-member/FamilyMemberScreenContainer';
import UserScreenContainer from './user/UserScreenContainer';

export default function ScreenSelector({userId}) {

    switch (userId) {
        case 'user':
            return <UserScreenContainer/>

        case 'angel':
            return <LostPeopleAroundYouScreenContainer/>;

        case 'familyMember':
            return <FamilyMemberScreenContainer/>

        default:
            return null;
    }
}