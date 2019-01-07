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
});