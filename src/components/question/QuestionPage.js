import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

import Question from './Question';
import Pauze from './Pauze';
import CountdownTimer from './CountdownTimer';
import Countdown from 'react-countdown-now';

class QuestionPage extends Component {
    constructor(props) {
        super(props);           

        this.state = {
            questions: this.props.questions,
            currentQuestion: 0,
            isWaiting: false    
          };

        this.isFinished = this.isFinished.bind(this);
        this.rendereComponent = this.renderComponent.bind(this);   
    }
    

    isFinished(sender) {
        console.log("new question");
        if(sender == 'question'){
            this.setState({
                currentQuestion: this.state.currentQuestion + 1,
                isWaiting: true
              });  
        } else {
            if(this.state.currentQuestion != this.state.questions.length) {
                this.setState({
                    isWaiting: false
                });            
            }
        }
      
    }

    renderComponent(props) {
        const isWaiting = props.isWaiting;
        
        if (isWaiting) {
          return (
                <Pauze 
                    isFinished={this.isFinished}
                 />
                 );
        }
        else {
            return (
                <Question  
                    isFinished={this.isFinished}
                    time={this.state.questions[this.state.currentQuestion].time}
                    question={this.state.questions[this.state.currentQuestion].question} 
                />
            );
        }
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
                        { this.renderComponent(this.state) }
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