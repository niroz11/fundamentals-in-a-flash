import React, { Component } from 'react';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  saveCorrectlyAnsweredIdToStorage = (questionId, questionCategory) => {
    let correctIds = [];
    if (localStorage.hasOwnProperty(questionCategory)) {
      correctIds = JSON.parse(localStorage.getItem(questionCategory));
    }
    correctIds.push(questionId);
    correctIds = JSON.stringify(correctIds);
    localStorage.setItem(questionCategory, correctIds);
  }

  validateIfCorrectAnswer = (event) => {
    event.preventDefault();
    if (event.target.innerHTML === this.props.currentQuestion.correct_answer) {
      this.saveCorrectlyAnsweredIdToStorage(this.props.currentQuestion.id, this.props.currentQuestion.category)
      this.props.updateCorrectCounter()
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