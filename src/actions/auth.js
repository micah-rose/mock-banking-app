import { SIGN_IN, BASE_API_URL } from '../utils/constants';
import axios from 'axios';

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
        } catch (error) {
            console.log('error');
        }
    } 
}