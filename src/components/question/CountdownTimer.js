import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Progress } from 'reactstrap';

class CountdownTimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullBar: 100,
            time: this.props.time,
            interval: 10 / this.props.time          
          };
        this.incrementProgress = this.incrementProgress.bind(this);
    }
 
    incrementProgress(){ 
          console.log('incrementing timer');
          var barStatus = this.state.fullBar - this.state.interval; 
          this.setState({
            fullBar: barStatus
          });
          if(this.state.fullBar == 0){
            setTimeout(function () {
                    this.props.finish();
            }.bind(this), 500);
        }
    }

    componentDidMount() {    
            setInterval(() => this.incrementProgress(), 100);
    }

    render() {
        return (
            <div className="countdown-bar">
                <Progress value={this.state.fullBar} animated color="warning" id="timebar" />
            </div>
        );
    }
}

CountdownTimer.propTypes = {
    time: PropTypes.object.isRequired,
    finish: PropTypes.func.isRequired
  }

export default CountdownTimer;