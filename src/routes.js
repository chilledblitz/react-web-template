/**
 * Created by Ratnesh on 13/09/2019.
 */

import React from 'react';
import {Router, Route} from 'react-router-dom';
import {Redirect, Switch} from "react-router";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import BaseComponent from "./modules/baseComponent";
import {Login, DashBoard} from "./modules";
import {history} from "./managers/history";
import Utility, {dispatchAction} from "./utility";
import {eventConstants} from "./constants";
import LoaderComponent from "./common/components/Loader";
import {connect} from "react-redux";

class Routes extends BaseComponent {

    componentDidMount() {
        this.registerDevice("pushToken").catch((error) => Utility.consoleLogger("Device Registration Error! ", error));
    }

    async registerDevice(token) {
        if (Utility.isEmpty(this.props.user.deviceId)) {
            /**
             * DEVICE REGISTRATION API CALL!!!
             */
            /*let requestData = {};
            requestData['deviceType'] = "windows";
            requestData['pushToken'] = token ? token : '';
            let [error, deviceResponse] = await Utility.parseResponse(UserService.registerDevice(requestData));
            this.props.dispatchAction(error ? eventConstants.REGISTER_DEVICE_FAILURE : eventConstants.REGISTER_DEVICE_SUCCESS,
                deviceResponse ? deviceResponse.deviceID : null);*/

            /**
             * Dummy Device registration action dispatch!
             */
            this.props.dispatchAction(eventConstants.REGISTER_DEVICE_SUCCESS, "deviceId_6374384");

        }
    }

    render() {
        let loader = this.props && this.props.user && this.props.user.loading ? <LoaderComponent/> : null;
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <Router history={history}>
                    {loader}
                    <Switch>
                        <Route exact path={'/'} component={Login}/>
                        <Route exact path={'/dashboard'} component={DashBoard}/>
                        <Redirect exact from='*' to="/"/>
                    </Switch>
                </Router>
            </MuiThemeProvider>);
    }
}

const mapStateToProps = (state) => {
    return {user: state.user}
};
export default connect(mapStateToProps, {dispatchAction})(Routes);