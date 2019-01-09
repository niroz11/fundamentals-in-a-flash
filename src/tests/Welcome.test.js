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
    localStorage.setItem('Scope', "[22, 24, 27]")
    wrapper = shallow(
      <Welcome
        setupQuiz={setupQuizMock} 
        categories={categories} 
        questionsPerCategory={questionsPerCategory}
      />
    );
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the proper default state', () => {
    expect(wrapper.state('categoryToShowOptionsFor')).toEqual('');
  });

  it('should update state with a new category to show options for', () => {
    wrapper.instance().updateCategoryOptionsToShow('OOP');
    expect(wrapper.state('categoryToShowOptionsFor')).toEqual('OOP');
  });

  it('should check localStorage when a category is clicked and if it is in storage call updateCategoryOptionsToShow()', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'updateCategoryOptionsToShow');
    wrapper.find('button.category-btn-scope').simulate('click', { preventDefault: () => { }, target: { innerHTML: 'Scope' } });
    expect(instance.updateCategoryOptionsToShow).toHaveBeenCalled();
    expect(instance.updateCategoryOptionsToShow).toHaveBeenCalledWith('Scope');
  });

  it('should check localStorage when a category is clicked and send the category to app if it is not in storage', () => {
    wrapper.find('button.category-btn-oop').simulate('click', { preventDefault: () => { }, target: { innerHTML: 'OOP' } });
    expect(setupQuizMock).toHaveBeenCalled();
  });

});