import { SIGN_IN, BASE_API_URL } from '../utils/constants';
import axios from 'axios';
import { getErrors } from './errors';
import { history } from '../router/AppRouter';
import { removeAuthHeader, setAuthHeader } from '../utils/common';

export const signIn = (user) => ({
    type: SIGN_IN,
    user
});

export const initiateLogin = (email, password) => {
    return async (dispatch) => {
        try {
            const result = await axios.post(`${BASE_API_URL}/signin`, {
                email,
                password
            });

            const user = result.data;
            localStorage.setItem('user_token', user.token);
            dispatch(signIn(user));
            dispatch(initiateGetProfile(user.email));
            history.push('/profile');
        } catch (error) {
            console.log('error', error);
            error.response && dispatch(getErrors(error.response.data))
        }
    } 
}

export const registerNewUser = (data) => {
    return async (dispatch) => {
        try {
            await axios.post(`${BASE_API_URL}/signup`, data);
            return {success: true};
        } catch (error) {
            console.log('error', error);
            error.response && dispatch(getErrors(error.response.data))
            return {success: false}
        }
    }
}

export const signOut = () => ({
    type: SIGN_OUT
});

export const initiateLogout = () => {
    return async (dispatch) => {
        try {
            setAuthHeader();
            await post(`${BASE_API_URL}/logout`);
            removeAuthHeader();
            localStorage.removeItem('user_token');
            return dispatch(signOut());
        } catch (error) {
            error.response && dispatch(getErrors(error.response.data));
        }
    }
}