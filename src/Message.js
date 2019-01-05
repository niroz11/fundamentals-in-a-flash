import React, { Component } from 'react';

class Messsage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="messsage">
      {
          this.props.userStatus === 'correct' && <p>Yay! That is correct.</p>
      }
      {
          this.props.userStatus === 'wrong' && <p>Sorry that is not correct</p>
      }
      </div>
    )
  }
}

export default Messsage;