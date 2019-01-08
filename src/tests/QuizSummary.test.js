import React from 'react';
import QuizSummary from '../QuizSummary';
import { shallow } from 'enzyme';

const category = 'Scope';
const numCorrect = 5;
const totalQuestions = 10;
const resetQuizMock = jest.fn();

describe('QuizSummary', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <QuizSummary
        category={category} 
        numberCorrect={numCorrect} 
        totalQuestions={totalQuestions} 
        resetQuiz={resetQuizMock}
      />
    );
  });

  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should be able to reset the quiz', () => {
    wrapper.find('button.test-again-btn').simulate('click', {preventDefault: () => {}});
    expect(resetQuizMock).toHaveBeenCalled();
  })
});