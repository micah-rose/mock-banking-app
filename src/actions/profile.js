import { BASE_API_URL } from '../utils/constants';
import { getErrors } from './errors';
import { history } from '../router/AppRouter';
import { UPDATE_PROFILE } from '../utils/constants';
import { get, post } from '../utils/api';

export const updateProfile = profile => ({
    type: UPDATE_PROFILE,
    profile
})

export const initiateUpdateProfile = profileData => {
    return async (dispatch) => {
        try {
            //try block
        } catch (error) {
            error.response && dispatch(getErrors(error.response.data));
        }
    }
}

export const initiateGetProfile = email => {
    return async (dispatch) => {
        try {
            //try block
        } catch (error) {
            error.response && dispatch(getErrors(error.response.data));
        }
    }
}