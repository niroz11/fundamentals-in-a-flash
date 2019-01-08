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
        });
        this.setState({
          questions: results.fundamentalsQuestions
        });
      });
  }

  filterQuestionsByCategory = (category) => {
    let questionsFilteredByCategory = this.state.questions.filter(question => {
      if (question.category === category) {
        return question;
      }
    });

    return questionsFilteredByCategory;
  }

  getNumofQuestionsPerCategory = (categories) => {
    let questionsPerCategory = categories.reduce((numPerCategory, curCategory) => {
      let total = 0;
      this.state.questions.forEach(question => {
        if (question.category === curCategory) {
          total += 1;
        }
      })
      numPerCategory[curCategory] = total;
      return numPerCategory;
    }, {});
    return questionsPerCategory;
  };

  getQuestionCategories = () => {
    return this.state.questions.reduce((categories, question) => {
      if (!categories.includes(question.category)) {
        categories.push(question.category);
      }
      return categories;
    }, []);
  }

  getQuestionIdsForNewCategory = (category, answeredCorrectIds) => {
    let filteredQuestions = this.filterQuestionsByCategory(category);
    if (answeredCorrectIds) {
      filteredQuestions = this.returnQuestionsNotAnsweredCorrectly(filteredQuestions, answeredCorrectIds);
    }

    let questionIds = filteredQuestions.map(filteredQuestion => {
      return filteredQuestion.id;
    });

    return questionIds;
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

  returnQuestionsNotAnsweredCorrectly = (questions, answeredCorrectIds) => {
    let questionsNotAnsweredCorrectly = questions.filter(question => {
      return !answeredCorrectIds.includes(question.id)
    });
    return questionsNotAnsweredCorrectly;
  }

  setupQuiz = (newCategory, answeredCorrectIds, oneQuestion) => {
    if (oneQuestion === 'one') {
      this.setState({
        category: newCategory,
        quizQuestionsIds: this.getQuestionIdsForNewCategory(newCategory, answeredCorrectIds),
        lastQuizQuestionIndex: this.getQuestionIdsForNewCategory(newCategory, answeredCorrectIds).length - 1,
        finalQuizQuestion: true
      });
    } else {
      this.setState({
        category: newCategory,
        quizQuestionsIds: this.getQuestionIdsForNewCategory(newCategory, answeredCorrectIds),
        lastQuizQuestionIndex: this.getQuestionIdsForNewCategory(newCategory, answeredCorrectIds).length - 1
      });
    }
  }

  skipQuestion = () => {
    if (this.state.finalQuizQuestion) {
      this.setState({
        userStatus: 'finished'
      });
    } else {
      this.moveToNextQuestion();
    }
  }

  updateUserStatus = (status) => {
    this.setState({
      userStatus: status
    });
  }

  updateCorrectCounter = () => {
    this.setState({
      correctCounter: this.state.correctCounter + 1
    });
  }

  render() {
    let { category, questions, userStatus, quizQuestionsIds, quizQuestionsIndex, lastQuizQuestionIndex, finalQuizQuestion, correctCounter } = this.state;
    let categories = this.getQuestionCategories();
    let questionsPerCategory = this.getNumofQuestionsPerCategory(categories);
    let currentQuestion = '';

    if (category !== '' && userStatus !== 'finished'){
      let index = quizQuestionsIds[quizQuestionsIndex];
      currentQuestion = questions.find(question => question.id === index);
    }

    return (
      <div className="App">
        <header>
          <i className="fas fa-home" onClick={this.resetQuiz}></i>
          <h1 className="title">Fundamentals In A Flash</h1>
        </header>
        {
          category === '' && <Welcome setupQuiz={this.setupQuiz} categories={categories} questionsPerCategory={questionsPerCategory}/>
        }
        {
          (currentQuestion !== '' && userStatus === 'guessing') && <Question currentQuestion={currentQuestion} updateUserStatus={this.updateUserStatus} updateCorrectCounter={this.updateCorrectCounter} skipQuestion={this.skipQuestion} questionNum={this.state.quizQuestionsIndex} totalQuizQuestions={quizQuestionsIds}/>
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
