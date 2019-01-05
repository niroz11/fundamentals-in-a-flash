import React, { Component } from 'react';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  updateCategory = (event) => {
    event.preventDefault()
    this.props.updateCategory(event.target.innerHTML)
  }
  render() {
    return (
      <div className="welcome">
        <p>Take these short quizes to solidify your JS Fundamentals knowledge</p>
        <p>Click a category below to get started</p>
        {
          this.props.categories.map((category, index) => {
            return <button className={"color-" + index} onClick={this.updateCategory}key={index}>{category}</button>
          })
        }
      </div>
    )
  }
}

export default Welcome;