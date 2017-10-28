import React, { Component } from 'react';
import QuestionPage from './components/question/QuestionPage';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (      
        <div className="main">
          <div className="inner">   
            <QuestionPage />         
          </div>
        </div>     
    );
  }
}

export default App;
