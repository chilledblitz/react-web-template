import {cookiesConstants, eventConstants} from "../constants";
import {sessionManager} from "../managers/sessionManager";
/**
 * Created by Ratnesh on 13/09/2019.
 */

let initialState = {
    isLoggedIn: false,
    deviceId: null,
    sessionToken: null,
    loading: false,
    isForgotPasswordSuccess: false
};
export default function user(state = initialState, action) {
    switch (action.type) {

        case eventConstants.SHOW_LOADER:
            return {
                ...state,
                loading: true
            };
        case eventConstants.HIDE_LOADER:
            return {
                ...state,
                loading: false
            };
        case eventConstants.REGISTER_DEVICE_SUCCESS:
            sessionManager.setDataInCookies(action.data ? action.data : null, cookiesConstants.DEVICE_ID);
            return {
                ...state,
                deviceId: action.data
            };
        case eventConstants.REGISTER_DEVICE_FAILURE:
            return {
                ...state,
            };
        case eventConstants.LOGIN_SUCCESS:
            sessionManager.setDataInCookies(action.data ? action.data.userDetails : state.userDetails, cookiesConstants.USER);
            sessionManager.setDataInCookies(action.data ? action.data.sessionToken : state.sessionToken, cookiesConstants.SESSION_TOKEN);
            return {
                ...state,
                userDetails: action.data ? action.data.userDetails : state.userDetails,
                sessionToken: action.data ? action.data.sessionToken : state.sessionToken,
                isLoggedIn: true,
                loading: false
            };
        default:
            return state;
    }
}