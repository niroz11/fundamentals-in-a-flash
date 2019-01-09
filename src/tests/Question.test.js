import React from 'react';
import Question from '../Question';
import { shallow } from 'enzyme';
import { wrap } from 'module';

const updateUserStatusMock = jest.fn();
const updateCorrectCounterMock = jest.fn();
const skipQuestionMock = jest.fn();
const questionNum = 1;
const totalQuizQuestions = [0, 1, 2, 3, 4, 5, 6, 7]
const question = {
  id: 0,
  category: "Prototype Methods",
  question: "What does the forEach() method return?",
  answers: ["undefined", "an array of the same length with all elements modified", "the original array with its elements modified"],
  correct_answer: "undefined",
  resources: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach"
}

describe('Question', () => {
  let wrapper;

  beforeEach(() => {
    localStorage.setItem('Prototype Methods', '[7, 8]');
    wrapper = shallow(
      <Question
        currentQuestion={question}
        updateUserStatus={updateUserStatusMock}
        updateCorrectCounter={updateCorrectCounterMock}
        skipQuestion={skipQuestionMock}
        questionNum={questionNum}
        totalQuizQuestions={totalQuizQuestions}
      />
    );
  });

  afterEach(() => {
    localStorage.clear();
  })

  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should be able to skip a question', () => {
    wrapper.find('button.skip-btn').simulate('click');
    expect(skipQuestionMock).toHaveBeenCalled();
  });

  it('should get a categories correct ids from localStorage when getCorrectIdsFromStorage is called', () => {
    let correctIds = wrapper.instance().getCorrectIdsFromStorage('Prototype Methods');
    expect(correctIds).toEqual([7, 8]);
  });

  it('should save the id for a correctly answered question to local storage', () => {
    wrapper.instance().saveCorrectlyAnsweredIdToStorage(0, question.category);
    let updatedCorrectIds = JSON.parse(localStorage.getItem(question.category));
    expect(updatedCorrectIds).toEqual([7, 8, 0]);
  });

  it('should validate if an answer is correct and if not pass app a user status of wrong', () => {
    wrapper.find('button.answer2').simulate('click', { preventDefault: () => { }, target: { innerHTML: question.answers[2] } });
    expect(updateUserStatusMock).toHaveBeenCalledWith('wrong');
  });

  it('should validate if an answer is correct and if so save the id, update correct counter and pass app user status of correct', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'saveCorrectlyAnsweredIdToStorage');
    wrapper.find('button.answer0').simulate('click', { preventDefault: () => { }, target: { innerHTML: question.answers[0] } });
    expect(instance.saveCorrectlyAnsweredIdToStorage).toHaveBeenCalledWith(question.id, question.category)
    expect(updateCorrectCounterMock).toHaveBeenCalled();
    expect(updateUserStatusMock).toHaveBeenCalledWith('correct');
  });

});