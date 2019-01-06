import React, { Component } from 'react';
import Category from './Category.js';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  setupQuizWithAllCategoryQs = (event, categoryFromCategoryContain) => {
    event.preventDefault();
    let category = categoryFromCategoryContain || event.target.innerHTML;
    this.props.setupQuiz(category);
  }

  setupQuizWithQsNotMastered = (category) => {
    let correctlyAnsweredIds = JSON.parse(localStorage.getItem(category));
    this.props.setupQuiz(category, correctlyAnsweredIds)
  }

  // setupQuiz = (event) => {
  //   event.preventDefault()
  //   if (localStorage.hasOwnProperty(event.target.innerHTML)) {
  //     let correctlyAnsweredIds = JSON.parse(localStorage.getItem(event.target.innerHTML));
  //     this.props.setupQuiz(event.target.innerHTML, correctlyAnsweredIds )
  //   } else {
  //     this.props.setupQuiz(event.target.innerHTML)
  //   }
  // }

  render() {
    return (
      <div className="welcome">
        <p>Take these short quizes to solidify your JS Fundamentals knowledge</p>
        <p>Select a category below to get started</p>
        {
          this.props.categories.map((category, index) => {
            return localStorage.hasOwnProperty(category) ? <Category setupQuizWithAllQs={this.setupQuizWithAllCategoryQs} setupWithQsNotMastered={this.setupQuizWithQsNotMastered} key={index} category={category} questionsPerCategory={this.props.questionsPerCategory}/> :
              <button className={"category color-" + index} onClick={this.setupQuizWithAllCategoryQs} key={index}>{category}</button>
          })
        }
      </div>
    )
  }
}

export default Welcome;