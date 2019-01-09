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
    let category = event.target.innerHTML;
    localStorage.hasOwnProperty(category) ? this.updateCategoryOptionsToShow(category) : this.props.setupQuiz(category);
  }

  updateCategoryOptionsToShow = (category) => {
    this.setState({
        categoryToShowOptionsFor: category
    });
  }

  render() {
    let { categories, questionsPerCategory, setupQuiz } = this.props
    return (
      <div className="welcome">
        <p>Take these short quizes to solidify your JS Fundamentals knowledge</p>
        <p>Select a category below to get started</p>
        {
          categories.map((category, index) => {
            let style = category.toLowerCase().split(' ').join('-');
            return (this.state.categoryToShowOptionsFor === category) ? <Category category={category} questionsPerCategory={questionsPerCategory} setupQuiz={setupQuiz} key={index}/> :
              <button className={"category-btn-" + style} onClick={this.checkLocalStorage} key={index}>{category}</button>
          })
        }
      </div>
    )
  }
}

export default Welcome;