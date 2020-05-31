/**
 * Created by Ratnesh on 13/09/2019.
 */

import {httpService} from "../managers/httpService";
import {httpConstants} from "../constants";

export default {
    registerDevice,
    loginUser,
}

function getHeaders() {
    return {'Content-Type': httpConstants.CONTENT_TYPE.APPLICATION_JSON, 'skip': true}
}

async function registerDevice(requestData) {
    let url = process.env.REACT_APP_USER_SERVICE_URL + httpConstants.API_END_POINT.REGISTER_DEVICE;
    return httpService(httpConstants.METHOD_TYPE.POST, getHeaders(), requestData, url)
        .then(
            response => {

                if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
                    return Promise.reject();
                return Promise.resolve(response.responseData);
            }
        ).catch(function (err) {
            return Promise.reject(err);
        });
}


async function loginUser(requestData) {
    let url = process.env.REACT_APP_USER_SERVICE_URL + httpConstants.API_END_POINT.LOGIN;
    return httpService(httpConstants.METHOD_TYPE.POST, getHeaders(), requestData, url)
        .then(
            response => {

                if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
                    return Promise.reject(response);
                return Promise.resolve(response.responseData);
            }
        ).catch(function (err) {
            return Promise.reject(err);
        });
}