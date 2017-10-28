import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Countdown from 'react-countdown-now';

class Question extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: 5,
            question: "Wie won een Golden Globe voor het spelen van het" + 
                        "karakter Satine in 2001 in de film “Moulin Rouge”?"            
          };
        
    }
 
    componentDidMount() {       
        setTimeout(function() { 
            this.props.isFinished() }.bind(this), this.props.time * 1000);
    }
    
    componentDidUpdate(){
        setTimeout(function() { 
            this.props.isFinished() }.bind(this), this.props.time * 1000);      
    }

    render() {        
        return (
            <div>
                <h1 className="question px-5">{this.props.question}</h1>
                 {}
            </div>
        );
    }
}

Question.propTypes = {
    isFinished: PropTypes.func.isRequired,
    question: PropTypes.string.isRequired,
    time: PropTypes.object.isRequired
  }

export default Question;


