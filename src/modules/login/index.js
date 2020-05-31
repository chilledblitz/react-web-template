/**
 * Created by Ratnesh on 13/09/2019.
 */


import React from "react";
import BaseComponent from '../baseComponent'
import LoginComponent from './loginComponent'
import Utils, {dispatchAction} from "../../utility";
import {eventConstants, pathConstants, stringConstants} from "../../constants";
import {history} from "../../managers/history";
import {UserService} from "../../services";
import connect from "react-redux/es/connect/connect";
import Parser from "../../utility/parser";

class Login extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            emailError: "",
            password: "",
            passwordError: "",
            isPasswordVisible: false,
        }
    }

    componentDidMount() {

    }

    onChangeEvent = (event) => {
        this.setState({[event.target.id]: event.target.value});
    };

    togglePassword = (event) => {
        this.setState({isPasswordVisible: !this.state.isPasswordVisible});
    };


    validateLoginForm = () => {
        this.setState({
            emailError: Utils.validateEmail(this.state.email) ? "" : stringConstants.INVALID_EMAIL,
            passwordError: Utils.isPasswordValid(this.state.password) ? "" : stringConstants.PASSWORD_VALIDATION
        });
        return Utils.validateEmail(this.state.email) && Utils.isPasswordValid(this.state.password);
    };

    onLoginClicked = async (event) => {
        event.preventDefault();
        if (!this.validateLoginForm())
            return;

        this.props.dispatchAction(eventConstants.SHOW_LOADER);
        /**
         *  Login API Call
         */
        /*let requestData = {};
        requestData.emailID = this.state.email;
        requestData.password = this.state.password;
        requestData.deviceID = this.props.user.deviceID;
        let [error, response] = await Utils.parseResponse(UserService.loginUser(requestData));
        this.props.dispatchAction(eventConstants.HIDE_LOADER);

        if (error) {
            Utils.consoleLogger("error", error);
            return
        }
        this.props.dispatchAction(eventConstants.LOGIN_SUCCESS, response);*/
        /**
         * Dummy Login Success action dispatch!
         * Saves User Data and hides Loader.
         */
        this.props.dispatchAction(eventConstants.LOGIN_SUCCESS, Utils.generateDummyUserDataWithSessionToken());
        history.push(pathConstants.DASHBOARD); //TODO Keep track on history methods
    };


    render() {
        return (
            <LoginComponent state={this.state}
                            onChangeEvent={this.onChangeEvent}
                            togglePassword={this.togglePassword}
                            onLoginClicked={this.onLoginClicked}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {user: state.user}
};

export default connect(mapStateToProps, {dispatchAction})(Login);
