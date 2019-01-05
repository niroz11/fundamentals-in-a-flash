import React, { Component } from 'react';

class QuizSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  resetQuiz = (event) => {
    event.preventDefault();
    this.props.resetQuiz();
  }

  render() {
    let style = this.props.category.toLowerCase().split(' ').join('-')
    return (
      <div className={"summary-contain " + style}>
        <h2>{this.props.category} Quiz Summary</h2>
        <p>Great work!</p>
        <p>You answered {this.props.numberCorrect} out of {this.props.totalQuestions} questions correctly</p>
        <button onClick={this.resetQuiz}>Test Your Knowledge Again</button>
      </div>
    )
  }
}

export default QuizSummary;