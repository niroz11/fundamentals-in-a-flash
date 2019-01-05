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
        questions: [],
        userStatus: 'guessing',
        quizQuestionsIds: [],
        quizQuestionsIndex: 0
    }
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

  getQuestionIdsForNewCategory = (category) => {
    let questionIds = this.state.questions.filter(question => {
      if (question.category === category) {
        return question
      }
    })
      .map(filteredQuestion => {
        return filteredQuestion.id
      })
    return questionIds
  }

  updateCategory = (newCategory) => {
    this.setState({
      category: newCategory,
      quizQuestionsIds: this.getQuestionIdsForNewCategory(newCategory)
    });
  }

  updateUserStatus = (status) => {
    this.setState({
      userStatus: status
    });
  }

  render() {
   let { category, questions, userStatus, quizQuestionsIds, quizQuestionsIndex} = this.state;
    let categories = this.getQuestionCategories();
    let currentQuestion = '';
    if (category !== '' && userStatus === 'guessing'){
      let index = quizQuestionsIds[quizQuestionsIndex];
      currentQuestion = questions[index]
    }
    return (
      <div className="App">
        <h1 className="title">Fundamentals In A Flash</h1>
        {
          this.state.category === '' && <Welcome updateCategory={this.updateCategory} categories={categories}/>
        }
        {
          currentQuestion !== '' && <Question currentQuestion={currentQuestion} updateUserStatus={this.updateUserStatus}/>
        }
        {
          userStatus === 'correct' && <Message userStatus={userStatus}/>
        }
        {
          userStatus === 'wrong' && <Message userStatus={userStatus}/>
        }
        {
          userStatus === 'finished' && <QuizSummary />
        }
      </div>
    );
  }
}

export default App;
