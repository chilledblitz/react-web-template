/**
 * Created by Ratnesh on 13/09/2019.
 */


import React from "react";
import BaseComponent from '../baseComponent'
import DashBoardComponent from './dashboardComponent'
import Utils, {dispatchAction} from "../../utility";
import {connect} from "react-redux";

class DashBoard extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {

    }

    onChangeEvent = (event) => {
        this.setState({[event.target.id]: event.target.value});
    };


    render() {
        return (
            <DashBoardComponent state={this.state}
                            onChangeEvent={this.onChangeEvent}
                            togglePassword={this.togglePassword}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {user: state.user}
};

export default connect(mapStateToProps, {dispatchAction})(DashBoard);
