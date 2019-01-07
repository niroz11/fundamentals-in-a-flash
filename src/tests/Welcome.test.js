import React from 'react';
import Welcome from '../Welcome';
import { shallow } from 'enzyme';

const setupQuizMock = jest.fn();
const categories = ["Prototype Methods", "OOP", "Scope"];
const questionsPerCategory = {
  "Prototype Methods": 12, 
  "OOP": 8, 
  "Scope": 10 
}

describe('Welcome', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Welcome
        setupQuiz={setupQuizMock} 
        categories={categories} 
        questionsPerCategory={questionsPerCategory}
      />
    );
  });

  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the proper default state', () => {
    expect(wrapper.state('categoryToShowOptionsFor')).toEqual('');
  });

  it.skip('should check local storage', () => {

  });

  it('should update state with category to show options for', () => {
    wrapper.instance().updateCategoryOptionsToShow('OOP');
    expect(wrapper.state('categoryToShowOptionsFor')).toEqual('OOP')
  });

});