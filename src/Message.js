import React, { Component } from 'react';

class Messsage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  updateUserStatus = (event) => {
    event.preventDefault();
    this.props.updateUserStatus('finished')
  }

  moveToNextQuestion = (event) => {
    event.preventDefault();
    this.props.moveToNextQuestion();
  }

  render() {
    let { id, category, question, answers, correct_answer, resources } = this.props.currentQuestion;
    let style = category.toLowerCase().split(' ').join('-')
    return (
      <div className={"message-contain " + style}>
      {
        this.props.userStatus === 'correct' && 
          <p>Yay! <span className="answer">{correct_answer}</span> is the correct answer</p>
      }
      {
        this.props.userStatus === 'wrong' && 
          <p><span className="sorry">Sorry that is not correct.</span>Check out the <a href={resources} target="_blank">docs</a> for more information</p>
      }
        <button className="next-btn" onClick={this.moveToNextQuestion}>Next</button>
      {
          this.props.isFinalQuestion &&  <button className="finish-btn" onClick={this.updateUserStatus}>Finish</button>
      }
      </div>
    )
  }
}

export default Messsage;