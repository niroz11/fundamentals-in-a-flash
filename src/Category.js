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
    this.props.setupQuizWithAllQs(event, this.props.category);
  }

  setupQuizWithoutCorrectlyAnsweredQs = (event) => {
    event.preventDefault();
    this.props.setupWithQsNotMastered(this.props.category)
  }

  render() {
    let style = this.props.category.toLowerCase().split(' ').join('-');
    let numMastered = JSON.parse(localStorage.getItem(this.props.category)).length;
    let allCategoryQs = this.props.questionsPerCategory[this.props.category];
    return (
      <div className={"category-contain " + style}>
        <p className="category">{this.props.category}</p>
        <p>You have mastered {numMastered} {this.props.category} questions, great work!</p>
        <p>How would you like to quiz your knowledge today?</p>
        <div className="btns-contain">
          <button className="small-btn" onClick={this.clearStorangeAndSetupQuizWithAllQs}>Try all questions</button>
        <button className="small-btn" onClick={this.setupQuizWithoutCorrectlyAnsweredQs}>Try mastering the other {allCategoryQs - numMastered}</button>
        </div>
      </div>
    )
  }
}

export default Category;