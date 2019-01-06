import React, { Component } from 'react';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  setupQuizWithAllQs = (event) => {
    event.preventDefault();
    this.props.setupQuizWithAllQs(event, this.props.category)
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
        <p>Last time you mastered {numMastered} questions, great work!</p>
        <p>How would you like to quiz your knowledge on {this.props.category} today?</p>
        <button onClick={this.setupQuizWithAllQs}>All questions</button>
        <button onClick={this.setupQuizWithoutCorrectlyAnsweredQs}>Try mastering the other {allCategoryQs - numMastered}</button>
      </div>
    )
  }
}

export default Category;