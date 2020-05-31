import React from 'react'
import {RefreshIndicator, CardText} from "material-ui";

const LoaderComponent = (props) => {
    return (
        <CardText style={{position: 'absolute', width: '100%', height: '100%', top: '25px', zIndex: 100000}}>
            <RefreshIndicator
                size={40}
                left={-20}
                top={10}
                status="loading"
                style={{
                    marginLeft: '50%',
                }}
            />
        </CardText>);
};
export default LoaderComponent;
