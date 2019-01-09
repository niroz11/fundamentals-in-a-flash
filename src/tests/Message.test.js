import React from 'react';
import Message from '../Message';
import { shallow } from 'enzyme';

const userStatus = 'correct';
const currentQuestion = {
  id: "17",
  category: "OOP",
  question: "When creating a new class that extends from a parent class, what keyword is used to access and invoke methods from the parent class?",
  answers: [ "function", "borrow", "super"],
  correct_answer: "super",
  resources: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super"
}
const updateUserStatusMock = jest.fn();
const moveToNextQuestionMock = jest.fn();

describe('Message', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Message
        userStatus={userStatus} 
        currentQuestion={currentQuestion} 
        updateUserStatus={updateUserStatusMock} 
        moveToNextQuestion={moveToNextQuestionMock} 
        isFinalQuestion={false}
      />
    );
  });

  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should move to the next question', () => {
    wrapper.find('button.next-btn').simulate('click');
    expect(moveToNextQuestionMock).toHaveBeenCalled();
  });

  it('should update state to finished', () => {
    wrapper.instance().updateUserStatus({ preventDefault: () => { }, target: { innerHTML: 'Finish' }});
    expect(updateUserStatusMock).toHaveBeenCalledWith('finished');
  });

  it('should update state to guessing when the user is wrong and clicks try again', () => {
    wrapper.instance().updateUserStatus({ preventDefault: () => { }, target: { innerHTML: 'Try Again' } });
    expect(updateUserStatusMock).toHaveBeenCalledWith('guessing');
  });
});