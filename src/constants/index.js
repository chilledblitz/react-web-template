/**
 * Created by Ratnesh on 13/09/2019.
 */

export const httpConstants = {
    METHOD_TYPE: {
        POST: 'POST',
        PUT: 'PUT',
        GET: 'GET',
        DELETE: 'DELETE',
    },
    CONTENT_TYPE: {
        APPLICATION_JSON: 'application/json',
        MULTIPART_FORM_DATA: 'multipart/form-data',
        APPLICATION_FORM_URLENCODED: 'application/x-www-form-urlencoded',
        IMAGE_PNG: 'image/png'
    },
    DEVICE_TYPE: {
        WEB: 'web'
    },
    API_END_POINT: {
        REGISTER_DEVICE: '/register-device',
        REGISTER_USER: '/register-user',
        LOGIN: '/login',
        LOGOUT: '/logout',
    }
};

export const pathConstants = {
    LOGIN: '/',
    SIGN_UP: '/sign-up',
    DASHBOARD: '/dashboard',
};

export const genericConstants = {};

export const stringConstants = {
    APPLICATION_NAME: "REACT WEBAPP TEMPLATE",
    INVALID_EMAIL: "Invalid email address",
    PASSWORD_VALIDATION: "Password should contain 1 special character"
};

export const eventConstants = {

    SHOW_LOADER: "SHOW_LOADER",
    HIDE_LOADER: "HIDE_LOADER",

    LOGIN_SUCCESS: "LOGIN_SUCCESS",

    REGISTER_DEVICE_SUCCESS: "REGISTER_DEVICE_SUCCESS",
    REGISTER_DEVICE_FAILURE: "REGISTER_DEVICE_FAILURE",

};

export const cookiesConstants = {
    DEVICE_ID: 'deviceId',
    SESSION_TOKEN: 'sessionToken',
    USER: 'user',
};

export const apiSuccessConstants = {};

export const apiFailureConstants = {
    INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR"
};