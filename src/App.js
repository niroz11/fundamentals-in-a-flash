import React, { Component } from 'react';
import './styles/main.scss';
import Question from './Question.js';
import Message from './Message.js';
import QuizSummary from './QuizSummary.js';
import Welcome from './Welcome.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
        category: '',
        questions: []
    }
  }

  updateCategory = (newCategory) => {
    this.setState({
      category: newCategory
    });
  }

  componentDidMount() {
    document.body.classList.add('background-color');
    fetch('http://memoize-datasets.herokuapp.com/api/v1/fundamentalsQuestions')
      .then(data => data.json())
      .then((results) => {
        results.fundamentalsQuestions.forEach(question => {
          if (question.category === 'Prototype methods'){
            question.category = 'Prototype Methods'
          }
        })
        this.setState({
          questions: results.fundamentalsQuestions
        })
      })
  }

    getQuestionCategories = () => {
    return this.state.questions.reduce((categories, question) => {

      if (!categories.includes(question.category)) {
        categories.push(question.category)
      }
      return categories;
    }, []);
  }


  render() {
    let categories = this.getQuestionCategories();
    return (
      <div className="App">
        <h1 className="title">Fundamentals In A Flash</h1>
        {
          this.state.category === '' && <Welcome updateCategory={this.updateCategory} categories={categories}/>
        }
        {
          this.state.category !== '' && <Question />
        }
        <Message />
        <QuizSummary />
      </div>
    );
  }
}

export default App;
