import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

import Question from './Question';
import CountdownTimer from './CountdownTimer';
import Countdown from 'react-countdown-now';

class QuestionPage extends Component {
    constructor(props) {
        super(props);           
        this.isFinished = this.isFinished.bind(this);
        this.state = {
            questions: this.props.questions,
            currentQuestion: 0    
          };
    }
    

    isFinished() {
        console.log("new question");
        this.setState({
            currentQuestion: this.state.currentQuestion + 1
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
                        time={this.state.questions[this.state.currentQuestion].time}
                        question={this.state.questions[this.state.currentQuestion].question} />
                    </Col>                   
                </Row>
            </div>
        );
    }
}


QuestionPage.propTypes = {
    questions: PropTypes.object.isRequired
  }

export default QuestionPage;