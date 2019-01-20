import React, { Component } from 'react';

class Messsage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  updateUserStatusAndResult = (event) => {
    event.preventDefault();
    if (event.target.innerHTML === 'Finish'){
      this.props.updateUserStatusAndResult('finished', '');
    } else {
      this.props.updateUserStatusAndResult('guessing', '');
    }
  }

  render() {
    let { userResult, currentQuestion, updateCurrentQuestionId, isFinalQuestion } = this.props;
    let { category, correct_answer, resources } = currentQuestion;
    let style = category.toLowerCase().split(' ').join('-');
    return (
      <div className={"message-contain " + style}>
      {
        userResult === 'correct' && 
          <p>Yay! <span className="answer">{correct_answer}</span> is the correct answer </p>
      }
      {
        userResult=== 'wrong' && 
          <p><span className="sorry">Sorry that is not correct.</span>Check out the <a href={resources} target="_blank">docs</a> for more information</p>
      }
      {
          (!isFinalQuestion && userResult === 'correct') && <button className="next-btn small-btn" onClick={updateCurrentQuestionId}>Next</button>
      }
      {
          (!isFinalQuestion && userResult === 'wrong') && <div className="btns-contain"><button className="tryagain-btn small-btn" onClick={this.updateUserStatusAndResult}>Try Again</button><button className="next-btn small-btn" onClick={updateCurrentQuestionId}>Next</button></div> 
      }
      {
          (isFinalQuestion && userResult === 'wrong') && <div className="btns-contain"><button className="tryagain-btn small-btn" onClick={this.updateUserStatusAndResult}>Try Again</button><button className="finish-btn small-btn" onClick={this.updateUserStatusAndResult}>Finish</button></div>
      }
      {
          (isFinalQuestion && userResult === 'correct')  &&  <button className="finish-btn" onClick={this.updateUserStatusAndResult}>Finish</button>
      }
      </div>
    )
  }
}

export default Messsage;