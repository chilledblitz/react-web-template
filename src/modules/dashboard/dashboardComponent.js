import React from 'react'
import {Column, Row} from "simple-flexbox";

function DashBoardView(props) {
    let {state, onChangeEvent} = props;
    return (
        <Column className="w-100 vh-100 align-items-center justify-content-center">
            <div className="display-flex align-items-center fs-40">
                DASHBOARD COMPONENT
            </div>
        </Column>
    );
}

function HeaderComponent(props) {
    return (
        <Row vertical="center" className="justify-content-between">
            <img src="/images/chilledblitz-logo.png" alt='app-logo' className="w-150"/>
        </Row>
    )
}

function dashboardComponent(props) {
    return (
        <Column horizontal={'center'} className="w-100 p-3 min-vh-100 h-100 justify-content-between">
            <Column className="w-100">
                {HeaderComponent(props)}
                {DashBoardView(props)}
            </Column>
        </Column>
    );
}

export default dashboardComponent;
