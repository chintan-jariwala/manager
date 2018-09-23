import {EMAIL_CHANGED, LOGIN_USER, LOGIN_USER_ERROR, LOGIN_USER_SUCCESS, PASSWORD_CHANGED} from "./types";
import firebase from 'firebase';
import {NavigationActions} from 'react-navigation';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
};

export const loginUser = ({email, password}) => {
    return (dispatch) => {
        dispatch({type: LOGIN_USER});
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch(() => loginUserFail(dispatch));
            });
    };
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
    const nav = NavigationActions.navigate({routeName: 'EmployeeList'});
    dispatch(nav);
};

const loginUserFail = (dispatch) => {
    dispatch({
        type: LOGIN_USER_ERROR
    });
};