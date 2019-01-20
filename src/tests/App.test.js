import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow } from 'enzyme';

const questions = [
  {
    id: "0",
    category: "Prototype Methods",
    question: "What does the forEach() method return?",
    answers: ["undefined", "an array of the same length with all elements modified", "the original array with its elements modified"],
    correct_answer: "undefined",
    resources: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach"
  },
  {
    id: "1",
    category: "Prototype Methods",
    question: "Which array proptotype methods return a representation of an array, but do not modify it?",
    answers: ["Accessor methods", "Mutator methods", "Iteration methods"],
    correct_answer: "Accessor methods",
    resources: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype#Accessor_methods"
  },
  {
    id: "2",
    category: "Prototype Methods",
    question: "Which method returns a single value?",
    answers: [".return()", ".reduce()", ".filter()"],
    correct_answer: ".reduce()",
    resources: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce"
  },
  {
    id: "3",
    category: "Prototype Methods",
    question: "Which method creates a new array with all elements that match the provided condition?",
    answers: [".find()", ".includes()", ".filter()"],
    correct_answer: ".filter()",
    resources: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"
  },
  {
    id: "4",
    category: "Prototype Methods",
    question: "Choose the code snippet that will return the string 'green' from const colors = ['green', 'blue', 'orange']",
    answers: ["colors.pop()", "colors.shift()", "colors.remove(0)"],
    correct_answer: "colors.shift()",
    resources: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift"
  },
  {
    id: "5",
    category: "Prototype Methods",
    question: "What does the sort() method return?",
    answers: ["A new array with the elements of the previous array sorted", "The sorted array. No copy is made.", "The sorted array and copy of the original array."],
    correct_answer: "The sorted array. No copy is made.",
    resources: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"
  },
  {
    id: "6",
    category: "Prototype Methods",
    question: "Choose the code snippet that will combine the elements in this array: const words = ['Today', 'is', 'going', 'great!'] and returns this sentence: 'Today is going great!'",
    answers: ["words.join()", "words.concat()", "words.join(' ')"],
    correct_answer: "words.join(' ')",
    resources: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join"
  },
  {
    id: "7",
    category: "Prototype Methods",
    question: "What does Object.keys() return?",
    answers: ["An array of all the keys for that object.", "A console.log of all the keys for that object.", "A list of all the property names stored in a different object."],
    correct_answer: "An array of all the keys for that object.",
    resources: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"
  },
  {
    id: "8",
    category: "Prototype Methods",
    question: "What method is used to make an independent copy of an object or merge multiple objects together?",
    answers: ["Object.values()", "Object.assign()", "Object.new()"],
    correct_answer: "Object.assign()",
    resources: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign"
  },
  {
    id: "9",
    category: "Prototype Methods",
    question: "What is a potential use case for Object.keys()?",
    answers: ["Iterating over each key/value pair of an object.", "Making a fresh copy of an object.", "Removing all the keys from that object."],
    correct_answer: "Iterating over each key/value pair of an object.",
    resources: "https://medium.com/front-end-weekly/es6-map-vs-object-what-and-when-b80621932373"
  },
  {
    id: "10",
    category: "Prototype Methods",
    question: "Which method allows us to add new elements to an array, but does not mutate the original array?",
    answers: ["concat()", "push()", "unshift()"],
    correct_answer: "concat()",
    resources: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat"
  },
  {
    id: "11",
    category: "Prototype Methods",
    question: "If we had an array of names and wanted to know if that array contained the name 'George', which method will determine that and return a value of true or false?",
    answers: ["names.has('George')", "names.includes('George')", "names.indexOf('George')"],
    correct_answer: "names.includes('George')",
    resources: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes"
  },
  {
    id: "12",
    category: "OOP",
    question: "What does OOP stand for?",
    answers: ["Overt Object Programming", "Object Orientied Prototyping", "Object Oriented Programming"],
    correct_answer: "Object Oriented Programming",
    resources: "https://developer.mozilla.org/en-US/docs/Glossary/OOP"
  },
  {
    id: "13",
    category: "OOP",
    question: "What is the practice of allowing an object to inherit the data and behavior of its parent?",
    answers: ["Inheritance", "Abstraction", "Encapsulation"],
    correct_answer: "Inheritance",
    resources: "https://developer.mozilla.org/ms/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript"
  },
  {
    id: "14",
    category: "OOP",
    question: "The practice of packaging data and functions into one component and then controlling access to it to make a 'blackbox' out of the object.",
    answers: ["Inheritance", "Abstraction", "Encapsulation"],
    correct_answer: "Encapsulation",
    resources: "https://developer.mozilla.org/en-US/docs/Glossary/Encapsulation"
  },
  {
    id: "15",
    category: "OOP",
    question: "What is the Single Responsibility Principle",
    answers: ["Principle where lines of code cann't have matching information.", "Principle of least knowlede, where each object should have a single duty.", "Principle where objects are all in a single file."],
    correct_answer: "Principle of least knowlede, where each object should have a single duty.",
    resources: "https://en.wikipedia.org/wiki/Single_responsibility_principle"
  },
  {
    id: "16",
    category: "OOP",
    question: "Which of these are Not benefits of OOP?",
    answers: ["Code reusability and mantainability", "Design and scalability", "Increased coupling"],
    correct_answer: "Increased coupling",
    resources: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS"
  },
  {
    id: "17",
    category: "OOP",
    question: "When creating a new class that extends from a parent class, what keyword is used to access and invoke methods from the parent class?",
    answers: ["function", "borrow", "super"],
    correct_answer: "super",
    resources: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super"
  },
  {
    id: "18",
    category: "OOP",
    question: "What are constructor methods used for?",
    answers: ["Constructing the syntax for an array.", "Creating and initializing an object created within a class.", "Combining two or more objects."],
    correct_answer: "Creating and initializing an object created within a class.",
    resources: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor"
  },
  {
    id: "19",
    category: "OOP",
    question: "What is the difference between a class and an object?",
    answers: ["An object is a blueprint to make a class.", "A class is a blueprint to make an object.", "There is no difference."],
    correct_answer: "A class is a blueprint to make an object.",
    resources: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS#Creating_actual_objects"
  },
  {
    id: "20",
    category: "Scope",
    question: "What is scope?",
    answers: ["A named location for storing a variable", "An inner function that has access to variables declared outside it.", "Refers to where variables and functions are accessible."],
    correct_answer: "Refers to where variables and functions are accessible.",
    resources: "https://developer.mozilla.org/en-US/docs/Glossary/Scope"
  },
  {
    id: "21",
    category: "Scope",
    question: "In if blocks or for loops, variables declared using let or const are said to be in which scope and can only be accessed by other code within the block? ",
    answers: ["Global Scope", "Function Scope", "Block Scope"],
    correct_answer: "Block Scope",
    resources: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block"
  },
  {
    id: "22",
    category: "Scope",
    question: "What is a closure?",
    answers: ["The ending line of code.", "An ending bracket.", "An inner function that has access to the outer function's scope chain."],
    correct_answer: "An inner function that has access to the outer function's scope chain.",
    resources: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures"
  },
  {
    id: "23",
    category: "Scope",
    question: "Which scope is the default and eveything has access to that scope?",
    answers: ["Eval scope", "Global scope", "Function scope"],
    correct_answer: "Global scope",
    resources: "https://developer.mozilla.org/en-US/docs/Glossary/Global_scope"
  },
  {
    id: "24",
    category: "Scope",
    question: "What does the JavaScript Engine Interpreter do?",
    answers: ["It takes your code and runs it.", "Converts Javascript to English so you can read it easier", "It reviews your code and provides feedback for refactoring."],
    correct_answer: "It takes your code and runs it.",
    resources: "https://en.wikipedia.org/wiki/JavaScript_engine"
  },
  {
    id: "25",
    category: "Scope",
    question: "During which phase are values assigned to variables?",
    answers: ["Variable phase", "Execution phase", "Creation phase"],
    correct_answer: "Execution phase",
    resources: "https://developer.mozilla.org/en-US/docs/Glossary/Hoisting"
  },
  {
    id: "26",
    category: "Scope",
    question: "What does the keyword 'this' refer to by default?",
    answers: ["The global object.", "The fuctional scope", "Any object."],
    correct_answer: "The global object.",
    resources: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this"
  },
  {
    id: "27",
    category: "Scope",
    question: "When using an ES6 function, when is the value of 'this' set?",
    answers: ["When the function is refactored.", "When the function is executed.", "When the function is created."],
    correct_answer: "When the function is created.",
    resources: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions"
  },
  {
    id: "28",
    category: "Scope",
    question: "When a function is called as a method of an object, what is the value of 'this'?",
    answers: ["The global object.", "The object the method is called on.", "Undefined"],
    correct_answer: "The object the method is called on.",
    resources: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#As_an_object_method"
  },
  {
    id: "29",
    category: "Scope",
    question: "When using an ES5 function, when is the value of 'this' set?",
    answers: ["When the function is refactored.", "When the function is executed.", "When the function is created."],
    correct_answer: "When the function is executed.",
    resources: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#No_separate_this"
  }
]

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App />
    );

    wrapper.setState({
      category: '',
      questions: questions,
      userStatus: '',
      userResult: '',
      quizQuestionsIds: [],
      quizQuestionsIndex: 0,
      currentQuestionId: '',
      correctCounter: 0
    });
  });

  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the proper default state', () => {
    expect(wrapper.state()).toEqual({
      category: '',
      questions: questions,
      userStatus: '',
      userResult: '',
      quizQuestionsIds: [],
      quizQuestionsIndex: 0,
      currentQuestionId: '',
      correctCounter: 0
    });
  });

  it('should filter questions by category', () => {
    let filteredQuestions = wrapper.instance().filterQuestionsByCategory('OOP');
    expect(filteredQuestions).toEqual([{id: "12",category: "OOP", question: "What does OOP stand for?", answers: ["Overt Object Programming", "Object Orientied Prototyping", "Object Oriented Programming"], correct_answer: "Object Oriented Programming", resources: "https://developer.mozilla.org/en-US/docs/Glossary/OOP"}, {id: "13", category: "OOP", question: "What is the practice of allowing an object to inherit the data and behavior of its parent?", answers: ["Inheritance", "Abstraction", "Encapsulation"], correct_answer: "Inheritance", resources: "https://developer.mozilla.org/ms/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript"}, {id: "14", category: "OOP", question: "The practice of packaging data and functions into one component and then controlling access to it to make a 'blackbox' out of the object.", answers: ["Inheritance", "Abstraction", "Encapsulation"], correct_answer: "Encapsulation", resources: "https://developer.mozilla.org/en-US/docs/Glossary/Encapsulation"}, {id: "15", category: "OOP", question: "What is the Single Responsibility Principle", answers: ["Principle where lines of code cann't have matching information.", "Principle of least knowlede, where each object should have a single duty.", "Principle where objects are all in a single file."], correct_answer: "Principle of least knowlede, where each object should have a single duty.", resources: "https://en.wikipedia.org/wiki/Single_responsibility_principle"}, {id: "16", category: "OOP", question: "Which of these are Not benefits of OOP?", answers: ["Code reusability and mantainability", "Design and scalability", "Increased coupling"], correct_answer: "Increased coupling", resources: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS"}, {id: "17", category: "OOP", question: "When creating a new class that extends from a parent class, what keyword is used to access and invoke methods from the parent class?", answers: ["function", "borrow", "super"], correct_answer: "super", resources: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super"}, {id: "18", category: "OOP", question: "What are constructor methods used for?", answers: ["Constructing the syntax for an array.", "Creating and initializing an object created within a class.", "Combining two or more objects."], correct_answer: "Creating and initializing an object created within a class.", resources: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor"}, {id: "19", category: "OOP", question: "What is the difference between a class and an object?", answers: ["An object is a blueprint to make a class.", "A class is a blueprint to make an object.", "There is no difference."], correct_answer: "A class is a blueprint to make an object.", resources: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS#Creating_actual_objects"}]);
  });

  it('should get the number of questions for each category', () => {
    let numOfQuestions = wrapper.instance().getNumofQuestionsPerCategory(["Prototype Methods", "OOP", "Scope"]);
    expect(numOfQuestions).toEqual({
      "Prototype Methods": 12,
      "OOP": 8,
      "Scope": 10
    });
  });
  
  it('should get the question categories', () => {
    let categoryNames = wrapper.instance().getQuestionCategories();
    expect(categoryNames).toEqual(["Prototype Methods", "OOP", "Scope"]);
  });

  it('should get question ids when only provided a category', () => {
    let questionIds = wrapper.instance().getQuestionIdsForNewCategory("Scope");
    expect(questionIds).toEqual(["20", "21", "22", "23", "24", "25", "26", "27", "28", "29"]);
  });

  it('should get question ids when provided a cateogry and correctly answered ids', () => {
    let questionIds = wrapper.instance().getQuestionIdsForNewCategory("Scope", ["20", "24", "26", "27"]);
    expect(questionIds).toEqual(["21", "22", "23", "25", "28", "29"]);
  });

  it('should move to next question by updating current question id and update state', () => {
    expect(wrapper.state('quizQuestionsIndex')).toEqual(0);
    wrapper.instance().updateCurrentQuestionId();
    expect(wrapper.state('quizQuestionsIndex')).toEqual(1);
  });

  it('should reset the quiz and update state', () => {
    wrapper.setState({
      category: 'OOP',
      userStatus: 'finished',
      userResult: 'correct',
      quizQuestionsIds: ["13", "14", "15", "16"],
      quizQuestionsIndex: 3,
      currentQuestionId: "16",
      correctCounter: 2
    });
    wrapper.instance().resetQuiz();
    expect(wrapper.state()).toEqual({
      category: '',
      questions: questions,
      userStatus: '',
      userResult: '',
      quizQuestionsIds: [],
      quizQuestionsIndex: 0,
      currentQuestionId: '',
      correctCounter: 0
    });
  });

  it('should return questions not answered correctly', () => {
    let oopQs = wrapper.instance().filterQuestionsByCategory('OOP');
    let qsNotAnsweredCorrect = wrapper.instance().returnQuestionsNotAnsweredCorrectly(oopQs, ["13","14", "16", "19"]);
    expect(qsNotAnsweredCorrect).toEqual([{ id: "12", category: "OOP", question: "What does OOP stand for?", answers: ["Overt Object Programming", "Object Orientied Prototyping", "Object Oriented Programming"], correct_answer: "Object Oriented Programming", resources: "https://developer.mozilla.org/en-US/docs/Glossary/OOP" }, { id: "15", category: "OOP", question: "What is the Single Responsibility Principle", answers: ["Principle where lines of code cann't have matching information.", "Principle of least knowlede, where each object should have a single duty.", "Principle where objects are all in a single file."], correct_answer: "Principle of least knowlede, where each object should have a single duty.", resources: "https://en.wikipedia.org/wiki/Single_responsibility_principle" }, { id: "17", category: "OOP", question: "When creating a new class that extends from a parent class, what keyword is used to access and invoke methods from the parent class?", answers: ["function", "borrow", "super"], correct_answer: "super", resources: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super" }, { id: "18", category: "OOP", question: "What are constructor methods used for?", answers: ["Constructing the syntax for an array.", "Creating and initializing an object created within a class.", "Combining two or more objects."], correct_answer: "Creating and initializing an object created within a class.", resources: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor" }]);
  });

  it('should setup a quiz with the provided category', () => {
    wrapper.instance().setupQuiz('Scope');
    expect(wrapper.state()).toEqual({
      category: 'Scope',
      questions: questions,
      userStatus: 'guessing',
      userResult: '',
      quizQuestionsIds: ["20", "21", "22", "23", "24", "25", "26", "27", "28", "29"],
      quizQuestionsIndex: 0,
      currentQuestionId: "20",
      correctCounter: 0
    });
  });

  it('should skip a question', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'updateCurrentQuestionId');
    wrapper.instance().skipQuestion();
    expect(instance.updateCurrentQuestionId).toHaveBeenCalled();
  });

  it.skip('should update userStatus to finished if skipping the last question', () => {
    wrapper.setState({ finalQuizQuestion: true });
    wrapper.instance().skipQuestion();
    expect(wrapper.state('userStatus')).toEqual('finished');
  });

  it('should update user result with provided argument', () => {
    wrapper.instance().updateUserStatusAndResult('', 'correct');
    expect(wrapper.state('userResult')).toEqual('correct');
    wrapper.instance().updateUserStatusAndResult('', 'wrong');
    expect(wrapper.state('userResult')).toEqual('wrong');
  });

  it('should update user status with provided argument', () => {
    wrapper.instance().updateUserStatusAndResult('finished', '');
    expect(wrapper.state('userStatus')).toEqual('finished');
    wrapper.instance().updateUserStatusAndResult('guessing', '');
    expect(wrapper.state('userStatus')).toEqual('guessing');
  });

  it('should increase the correct counter by 1', () => {
    wrapper.instance().updateCorrectCounter();
    wrapper.instance().updateCorrectCounter();
    expect(wrapper.state('correctCounter')).toEqual(2);
  });
});