import React, { Component } from 'react';
import Category from './Category.js';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryToShowOptionsFor: ''
    };
  }

  checkLocalStorage = (event) => {
    event.preventDefault();
    if (localStorage.hasOwnProperty(event.target.innerHTML)) {
      this.updateCategoryOptionsToShow(event.target.innerHTML)
    } else {
      this.props.setupQuiz(event.target.innerHTML);
    }
  }

  updateCategoryOptionsToShow = (category) => {
    this.setState({
        categoryToShowOptionsFor: category
    });
  }

  render() {
    return (
      <div className="welcome">
        <p>Take these short quizes to solidify your JS Fundamentals knowledge</p>
        <p>Select a category below to get started</p>
        {
          this.props.categories.map((category, index) => {
            let style = category.toLowerCase().split(' ').join('-');
            return (this.state.categoryToShowOptionsFor === category) ? <Category setupQuiz={this.props.setupQuiz} category={category} questionsPerCategory={this.props.questionsPerCategory} key={index}/> :
              <button className={"category-btn-" + style} onClick={this.checkLocalStorage} key={index}>{category}</button>
          })
        }
      </div>
    )
  }
}

export default Welcome;