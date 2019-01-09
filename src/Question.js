import React, { Component } from 'react';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  getCorrectIdsFromStorage = (questionCategory) => {
    return localStorage.hasOwnProperty(questionCategory) ? JSON.parse(localStorage.getItem(questionCategory)) : false;
  }

  saveCorrectlyAnsweredIdToStorage = (questionId, questionCategory) => {
    let correctIds = this.getCorrectIdsFromStorage(questionCategory) || [];
    correctIds.push(questionId);
    localStorage.setItem(questionCategory, JSON.stringify(correctIds));
  }

  validateIfCorrectAnswer = (event) => {
    event.preventDefault();
    if (event.target.innerHTML === this.props.currentQuestion.correct_answer) {
      this.saveCorrectlyAnsweredIdToStorage(this.props.currentQuestion.id, this.props.currentQuestion.category)
      this.props.updateCorrectCounter();
      this.props.updateUserStatus('correct');
    } else {
      this.props.updateUserStatus('wrong');
    }
  }

  render() {
    let { currentQuestion, updateUserStatus, updateCorrectCounter, skipQuestion, questionNum, totalQuizQuestions } = this.props;  
    let { id, category, question, answers, correct_answer, resources } = currentQuestion;
    let style = category.toLowerCase().split(' ').join('-');
    return (
      <div className={"question-contain " + style}>
        <p>Question {questionNum + 1} of {totalQuizQuestions.length}</p>
        <p className="question">{question}</p>
        {
          answers.map((answer, index) => {
            return <button className={'answer' + index} onClick={this.validateIfCorrectAnswer} key={'answer' + index}>{answer}</button>
          })
        }
        <button className="skip-btn" onClick={skipQuestion}>Skip</button>
      </div>
    )
  }
}

export default Question;