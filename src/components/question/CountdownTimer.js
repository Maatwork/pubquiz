import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

class CountdownTimer extends Component {
    render() {
        return (
            <Card body outline color="secondary">
                <CardTitle>TIME LEFT</CardTitle>
                <CardText>33</CardText>                
            </Card>
        );
    }
}

export default CountdownTimer;