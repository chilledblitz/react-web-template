/**
 * Created by Ratnesh on 13/09/2019.
 */


import React from "react";
import {stringConstants} from "../constants";

let moment = require('moment');

export default class Utility {

    static consoleLogger(title, data) {
        console.log(stringConstants.APPLICATION_NAME + " -> " + title + "  :  ", data);
    }


    static debugConsoleLogger(functionName, message, payload, developerAlias, type = 'info') {
        let timestamp = moment(new Date()).format('MMM D HH:mm:ss.SSS');
        console.log('[ ' + timestamp + ` ] ${type}: ${functionName}: ${message}: ${JSON.stringify(payload)}`);
    }


    static descSortOnCriteria(data, criteria) {
        data.sort((a, b) => {
            return b[criteria] - a[criteria];
        });
    }


    static ascSortOnCriteria(data, criteria) {
        data.sort((a, b) => {
            return a[criteria] - b[criteria];
        });
    }

    /**
     *  This function is made to handle success and error callback!
     * @param promise
     * @returns {Promise<Promise|Bluebird<*[] | R>|Bluebird<any | R>|*|Promise<T | *[]>>}
     */

    static parseResponse(promise) {
        return promise.then(data => {
            return [null, data];
        }).catch(err => [err]);
    }

    static validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    static isPasswordValid(password) {
        let reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
        return reg.test(password);
    }

    static isEmpty(string) {
        return !string || string.trim().length === 0;
    }

    static generateDummyUserDataWithSessionToken() {

        return {
            sessionToken: "sessionId_732455849355",
            userDetails: {
                userId: "userId_348563649",
                firstName: "Ratnesh",
                lastName: "Chandra",
                email: "chilledblitz@gmail.com",
                photo: "photo_userId_348563649.svg",
                address: {
                    streetAddress: "streetAddress",
                    suite: "suite",
                    city: "city",
                    state: "state",
                    country: "country",
                }
            }
        }
    }
}

export const dispatchAction = (type, data) => {
    return dispatch => dispatch({type, data});
};
