import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Pauze extends Component {
    constructor(props) {
        super(props);
        this.waitForKey = this.waitForKey.bind(this);
    }

    waitForKey(e) {
            if(e.keyCode == 32){
                console.log("spacebar hit - next question");
                this.props.isFinished('pauze');
            }
    }

    componentDidMount(){
        document.addEventListener("keydown", this.waitForKey, false);
      
    }
    componentWillUnmount(){
        document.removeEventListener("keydown", this.waitForKey, false);
    }

    render() {
        return (
            <div>             
            </div>
        );
    }
}

Pauze.propTypes = {
    isFinished: PropTypes.func.isRequired
  }

export default Pauze;