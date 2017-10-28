import React, { Component } from 'react';

import { Row, Col } from 'reactstrap';

import Question from './Question';
import CountdownTimer from './CountdownTimer';
import Countdown from 'react-countdown-now';

class QuestionPage extends Component {
    constructor(props) {
        super(props);           
        this.isFinished = this.isFinished.bind(this);
        this.state = {
            currentQuestion: {
                time: 2,
                question: "Wie won een Golden Globe voor het spelen van het" + 
                            " karakter Satine in 2001 in de film “Moulin Rouge”?"     
            },
            questionNumber: 0    
          };
    }
    

    isFinished() {
        console.log("new question");
        this.setState({
            questionNumber: this.state.questionNumber + 1,
            currentQuestion: {
                time: 2,
                question: "Test " + this.state.questionNumber    
            }  
          });        
    }

    render() {
        const renderer = ({ hours, minutes, seconds, completed }) => {
            if (completed) {
              // Render a completed state 
              return "DONE";
            } else {
              // Render a countdown 
              return <span>{seconds}</span>;
            }
          };
 
        return (
            <div>
                <Row className="question-row">
                    <Col>
                    <Question  
                        isFinished={this.isFinished}
                        time={this.state.currentQuestion.time}
                        question={this.state.currentQuestion.question} />
                    </Col>                   
                </Row>
            </div>
        );
    }
}

export default QuestionPage;