import React, { Component } from 'react';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showQuestionOptions: false
    };
  }

  clearStorangeAndSetupQuizWithAllQs = (event) => {
    event.preventDefault();
    localStorage.removeItem(this.props.category);
    this.props.setupQuiz(this.props.category);
  }

  retrieveCorrectAnswerIds = (category) => {
    return JSON.parse(localStorage.getItem(category))
  }

  setupQuizWithoutCorrectlyAnsweredQs = (event) => {
    event.preventDefault();
    let correctlyAnsweredIds = this.retrieveCorrectAnswerIds(this.props.category);
    this.props.setupQuiz(this.props.category, correctlyAnsweredIds)
  }

  render() {
    let { setupQuiz, category, questionsPerCategory } = this.props;
    let style = category.toLowerCase().split(' ').join('-');
    let allCategoryQs = questionsPerCategory[category];
    let numMastered = this.retrieveCorrectAnswerIds(category).length;
    return (
      <div className={"category-contain " + style}>
        <p className="category">{category}</p>
        <p>You have mastered {numMastered} of {allCategoryQs} questions, great work!</p>
        <p>How would you like to quiz your knowledge today?</p>
        <div className="btns-contain">
          <button className="small-btn" onClick={this.clearStorangeAndSetupQuizWithAllQs}>Try all questions</button>
          {
            (numMastered !== allCategoryQs) && <button className="small-btn" onClick={this.setupQuizWithoutCorrectlyAnsweredQs}>Try mastering the other {allCategoryQs - numMastered}</button>
          }  
        </div>
      </div>
    )
  }
}

export default Category;