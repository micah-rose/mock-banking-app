import { SIGN_IN, BASE_API_URL } from '../utils/constants';
import axios from 'axios';

export const signIn = (user) => ({
    type: SIGN_IN,
    user
});

export const initiateLogin = (email, password) => {
    return async (dispatch) => {
        try {
            //try block
        } catch (error) {
            console.log('error');
        }
    } 
}