import React, { Component } from 'react';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  validateIfCorrectAnswer = (event) => {
    event.preventDefault();
    if (event.target.innerHTML === this.props.currentQuestion.correct_answer) {
      // save card id to local storage
      this.props.updateUserStatus('correct')
    } else {
      this.props.updateUserStatus('wrong')
    }
  }

  render() {
    let { id, category, question, answers, correct_answer, resources } = this.props.currentQuestion;
    let style = category.toLowerCase().split(' ').join('-')
    return (
      <div className={"question-contain " + style}>
        <p className="question">{question}</p>
        {
          answers.map((answer, index) => {
            return <button onClick={this.validateIfCorrectAnswer} key={'answer' + index}>{answer}</button>
          })
        }
      </div>
    )
  }
}

export default Question;