import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'
import {receiveUsers} from '../users/Actions';
import {selectUser} from '../selected-user/Actions';

const firebaseConfig = {
    apiKey: "AIzaSyDAy-ZUByRU8RKJzOYF8SHXP86YdDKtLqM",
    authDomain: "guardian-angel-tlv.firebaseapp.com",
    databaseURL: "https://guardian-angel-tlv.firebaseio.com",
    projectId: "guardian-angel-tlv",
    storageBucket: "guardian-angel-tlv.appspot.com",
    messagingSenderId: "2662210702"
};

const development = true;
const selectedUser = "angel"; //Choose from: user, familyMember, angel

export function initFirebase() {
    return async function signInRequest(dispatch) {

        await firebase.initializeApp(firebaseConfig);
        await dispatch(fetchData('users', receiveUsers));
    }
}

export function fetchData(collectionName, actionCallback) {
    return function afterSignedIn(dispatch) {
        firebase.database().ref(collectionName).on('value', snapshot => {
                dispatch(actionCallback(snapshot.val()));
                if(development){
                    dispatch(selectUser(selectedUser));
                }
            },
            error => {
                console.error('The request for ' + collectionName + ' failed: ' + error.code);
            });
    }
}

export function sendDataToDatabase(collectionPath, value) {
    return firebase.database().ref(collectionPath).set(value);
}


export function pushDataToDatabase(collectionPath, value) {
    return firebase.database().ref(collectionPath).push(value);
}
