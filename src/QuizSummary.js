import React, { Component } from 'react';

class QuizSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    let { category, numberCorrect, totalQuestions, resetQuiz } = this.props;
    let style = category.toLowerCase().split(' ').join('-')
    return (
      <div className={"summary-contain " + style}>
        <h2>{category} Quiz Summary</h2>
        <p>Great work!</p>
        <p>You answered {numberCorrect} out of {totalQuestions} questions correctly</p>
        <button className="test-again-btn" onClick={resetQuiz}>Test Your Knowledge Again</button>
      </div>
    )
  }
}

export default QuizSummary;