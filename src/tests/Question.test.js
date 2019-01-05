import React from 'react';
import Question from '../Question';
import { shallow } from 'enzyme';

const updateUserStatusMock = jest.fn();
const questionMock = {
  id: 0,
  category: "Prototype methods",
  question: "What does the forEach() method return?",
  answers: ["undefined", "an array of the same length with all elements modified", "the original array with its elements modified"],
  correct_answer: "undefined",
  resources: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach"
}

describe('Question', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Question
        currentQuestion={questionMock}
        updateUserStatus={updateUserStatusMock}
      />
    );
  });

  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});