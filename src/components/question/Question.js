import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

import CountdownTimer from './CountdownTimer';

class Question extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: 5,
            question: "Wie won een Golden Globe voor het spelen van het" + 
                        "karakter Satine in 2001 in de film “Moulin Rouge”?"            
          };         
        this.finishQuestion = this.finishQuestion.bind(this);
    }

    finishQuestion(){
        this.props.isFinished('question');
    }


    render() {        
        return (
            <div>
                <Row>
                    <Col xs="12">
                        <div className="question-title-wrapper ">
                            <h1 className="question px-5 ">{this.props.question}</h1>
                        </div>                    
                    </Col>
                    <Col xs="12">
                    </Col>
                </Row>
                <CountdownTimer time={this.props.time} finish={this.finishQuestion} />
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


