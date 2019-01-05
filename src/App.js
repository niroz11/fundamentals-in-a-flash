import React, { Component } from 'react';
import './styles/main.scss';
import Question from './Question.js';
import Message from './Message.js';
import QuizSummary from './QuizSummary.js';
import Welcome from './Welcome.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
        category: ''
    }
  }

  updateCategory = (newCategory) => {
    this.setState({
      category: newCategory
    });
  }

  componentDidMount() {
    document.body.classList.add('background-color')
  }
  render() {
    return (
      <div className="App">
        <h1 className="title">Fundamentals In A Flash</h1>
        {
          this.state.category === '' && <Welcome updateCategory={this.updateCategory}/>
        }
        {
          this.state.category !== '' && <Question />
        }
        <Message />
        <QuizSummary />
      </div>
    );
  }
}

export default App;
