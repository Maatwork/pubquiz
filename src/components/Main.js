import React, { Component } from 'react';
import QuestionPage from './question/QuestionPage';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';

class Main extends Component {
    render() {
        return (
            <div>
            <div class="background-image"></div>
            <div className="main">
          <div className="inner">   
            <QuestionPage questions={this.props.quiz} />   
          </div>
          </div>
        </div> 
        );
    }
}

export default Main;
