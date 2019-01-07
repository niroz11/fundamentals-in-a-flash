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

  setupQuizWithoutCorrectlyAnsweredQs = (event) => {
    event.preventDefault();
    let correctlyAnsweredIds = JSON.parse(localStorage.getItem(this.props.category));
    this.props.setupQuiz(this.props.category, correctlyAnsweredIds)
  }

  calculateNumberMastered = (category) => {
    return JSON.parse(localStorage.getItem(category)).length;
  }

  render() {
    let { setupQuiz, category, questionsPerCategory } = this.props;
    let style = category.toLowerCase().split(' ').join('-');
    let allCategoryQs = questionsPerCategory[category];
    let numMastered = this.calculateNumberMastered(category);
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