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
        quizQuestionsIndex: 0,
        lastQuizQuestionIndex: null,
        finalQuizQuestion: false,
        correctCounter: 0
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

  getQuestionIdsForNewCategory = (category, answeredCorrectIds) => {
    
    let filteredQuestions = this.filterByCategory(category);
    if (answeredCorrectIds) {
      filteredQuestions = this.returnQuestionsNotAnsweredCorrectly(filteredQuestions, answeredCorrectIds)
    }

    let questionIds = filteredQuestions.map(filteredQuestion => {
      return filteredQuestion.id
    });

    return questionIds
  }

  filterByCategory = (category) => {
    let questionsFilteredByCategory = this.state.questions.filter(question => {
      if (question.category === category) {
        return question
      }
    });

    return questionsFilteredByCategory
  }

  returnQuestionsNotAnsweredCorrectly = (questions, answeredCorrectIds) => {
    let questionsNotAnsweredCorrectly = questions.filter(question => {
      return !answeredCorrectIds.includes(question.id)
    });
    return questionsNotAnsweredCorrectly;
  }

  moveToNextQuestion = () => {
    let nextQuestionIndex = (this.state.quizQuestionsIndex + 1);
    if (nextQuestionIndex === (this.state.quizQuestionsIds.length - 1)) {
      this.setState({
        userStatus: 'guessing',
        quizQuestionsIndex: nextQuestionIndex,
        finalQuizQuestion: true
      });
    } else {
      this.setState({
        userStatus: 'guessing',
        quizQuestionsIndex: nextQuestionIndex
      });
    }
  }

  resetQuiz = () => {
    this.setState({
      category: '',
      userStatus: 'guessing',
      quizQuestionsIds: [],
      quizQuestionsIndex: 0,
      lastQuizQuestionIndex: null,
      finalQuizQuestion: false,
      correctCounter: 0
    });
  }

  updateCategory = (newCategory, answeredCorrectIds) => {
    this.setState({
      category: newCategory,
      quizQuestionsIds: this.getQuestionIdsForNewCategory(newCategory, answeredCorrectIds),
      lastQuizQuestionIndex: this.getQuestionIdsForNewCategory(newCategory, answeredCorrectIds).length - 1
    });
  }

  updateUserStatus = (status) => {
    this.setState({
      userStatus: status
    });
  }

  updateCorrectCounter = () => {
    this.setState({
      correctCounter: this.state.correctCounter + 1
    })
  }

  render() {
    let { category, questions, userStatus, quizQuestionsIds, quizQuestionsIndex, lastQuizQuestionIndex, finalQuizQuestion, correctCounter } = this.state;
    let categories = this.getQuestionCategories();
    let currentQuestion = '';
    if (category !== '' && userStatus !== 'finished'){
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
          (currentQuestion !== '' && userStatus === 'guessing') && <Question currentQuestion={currentQuestion} updateUserStatus={this.updateUserStatus} updateCorrectCounter={this.updateCorrectCounter}/>
        }
        {
          userStatus === 'correct' && <Message userStatus={userStatus} currentQuestion={currentQuestion} updateUserStatus={this.updateUserStatus} moveToNextQuestion={this.moveToNextQuestion} isFinalQuestion={finalQuizQuestion}/>
        }
        {
          userStatus === 'wrong' && <Message userStatus={userStatus} currentQuestion={currentQuestion} updateUserStatus={this.updateUserStatus} moveToNextQuestion={this.moveToNextQuestion} isFinalQuestion={finalQuizQuestion}/>
        }
        {
          userStatus === 'finished' && <QuizSummary category={category} numberCorrect={correctCounter} totalQuestions={quizQuestionsIds.length} resetQuiz={this.resetQuiz}/>
        }
      </div>
    );
  }
}

export default App;
