import React from 'react';
import Category from '../Category';
import { shallow } from 'enzyme';

const setupQuizMock = jest.fn();
const index = 0;
const category = 'Prototype Methods';
const questionsPerCategory = {
  "Prototype Methods": 12, 
  "OOP": 8, 
  "Scope": 10 
};

describe('Category', () => {
  let wrapper;

  beforeEach(() => {
    localStorage.setItem('Prototype Methods', "[4, 5, 7]")
    wrapper = shallow(
      <Category
      setupQuiz={setupQuizMock} 
      category={category} 
      questionsPerCategory={questionsPerCategory}
      key={index} 
      />
    );
  });

  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should retrieve the correct answer ids', () => {
    let correctAnswerIds = wrapper.instance().retrieveCorrectAnswerIds('Prototype Methods');
    expect(correctAnswerIds).toEqual([4, 5, 7]);
  });

  it('should send the correct answer ids and category to app when setupQuizWithoutCorrectlyAnsweredQs is called', () => {
    wrapper.instance().setupQuizWithoutCorrectlyAnsweredQs({ preventDefault: () => { } });
    expect(setupQuizMock).toHaveBeenCalledWith(category, [4, 5, 7]);
  });

  it('should remove the category from localStorage if there and pass the category to app when clearStorangeAndSetupQuizWithAllQs is called', () => {
    expect(localStorage.hasOwnProperty('Prototype Methods')).toEqual(true);
    wrapper.instance().clearStorangeAndSetupQuizWithAllQs({preventDefault: () => {}});
    expect(localStorage.hasOwnProperty('Prototype Methods')).toEqual(false);
    expect(setupQuizMock).toHaveBeenCalledWith(category);
  });

});