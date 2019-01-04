import React, { Component } from 'react';
import './styles/main.scss';
import Question from './Question.js';
import Message from './Message.js';
import QuizSummary from './QuizSummary.js';
import Welcome from './Welcome.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Fundamentals In A Flash</h1>
        <Welcome />
        <Question />
        <Message />
        <QuizSummary />
      </div>
    );
  }
}

export default App;
