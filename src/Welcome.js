import React, { Component } from 'react';
import Category from './Category.js';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryToShowOptionsFor: ''
    };
  }

  checkForCategoryOptions = (event) => {
    if (localStorage.hasOwnProperty(event.target.innerHTML)) {
      this.setState({
        categoryToShowOptionsFor: event.target.innerHTML
      });
    } else {
      this.setupQuizWithAllCategoryQs(event);
    }
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

  render() {
    return (
      <div className="welcome">
        <p>Take these short quizes to solidify your JS Fundamentals knowledge</p>
        <p>Select a category below to get started</p>
        {
          this.props.categories.map((category, index) => {
            return (this.state.categoryToShowOptionsFor === category) ? <Category setupQuizWithAllQs={this.setupQuizWithAllCategoryQs} setupWithQsNotMastered={this.setupQuizWithQsNotMastered} key={index} category={category} questionsPerCategory={this.props.questionsPerCategory}/> :
              <button className={"category color-" + index} onClick={this.checkForCategoryOptions} key={index}>{category}</button>
          })
        }
      </div>
    )
  }
}

export default Welcome;