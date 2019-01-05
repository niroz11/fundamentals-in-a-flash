import React, { Component } from 'react';

class Messsage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  updateUserStatus = (event) => {
    event.preventDefault();
    if(event.target.innerHTML === 'Finish'){
      this.props.updateUserStatus('finished')
    } else {
      this.props.updateUserStatus('guessing')
    }
  }
  render() {
    let { id, category, question, answers, correct_answer, resources } = this.props.currentQuestion;
    return (
      <div className="messsage">
      {
        this.props.userStatus === 'correct' && 
          <p>Yay!<span className="answer">{correct_answer}</span> is the correct answer</p>
      }
      {
        this.props.userStatus === 'wrong' && 
          <p>Sorry that is not correct. Check out the <a href={resources} target="_blank">docs</a> for more information</p>
      }
        <button className="next-btn" onClick={this.updateUserStatus}>Next</button>
      {
          this.props.userStatus === 'correct' &&  <button className="finish-btn" onClick={this.updateUserStatus}>Finish</button>
      }
      </div>
    )
  }
}

export default Messsage;