import React, { Component } from 'react';

class Messsage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  updateUserStatus = (event) => {
    event.preventDefault();
    if (event.target.innerHTML === 'Finish'){
      this.props.updateUserStatus('finished')
    } else {
      this.props.updateUserStatus('guessing')
    }
  }

  render() {
    let { userStatus, currentQuestion, updateUserStatus, moveToNextQuestion, isFinalQuestion } = this.props;
    let { id, category, question, answers, correct_answer, resources } = currentQuestion;
    let style = category.toLowerCase().split(' ').join('-')
    return (
      <div className={"message-contain " + style}>
      {
        userStatus === 'correct' && 
          <p>Yay! <span className="answer">{correct_answer}</span> is the correct answer </p>
      }
      {
        userStatus === 'wrong' && 
          <p><span className="sorry">Sorry that is not correct.</span>Check out the <a href={resources} target="_blank">docs</a> for more information</p>
      }
      {
          (!isFinalQuestion && userStatus === 'correct') && <button className="next-btn small-btn" onClick={moveToNextQuestion}>Next</button>
      }
      {
          (!isFinalQuestion && userStatus === 'wrong') && <div className="btns-contain"><button className="tryagain-btn small-btn" onClick={this.updateUserStatus}>Try Again</button><button className="next-btn small-btn" onClick={moveToNextQuestion}>Next</button></div> 
      }
      {
          isFinalQuestion &&  <button className="finish-btn" onClick={this.updateUserStatus}>Finish</button>
      }
      </div>
    )
  }
}

export default Messsage;