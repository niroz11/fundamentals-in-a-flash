import React from 'react';
import Welcome from '../Welcome';
import { shallow } from 'enzyme';

const updateCategoryMock = jest.fn();
const categoriesMock = ["Prototype Methods", "OOP", "Scope"];

describe('Welcome', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Welcome
        updateCategory={updateCategoryMock}
        categories={categoriesMock}
      />
    );
  });

  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update category when a category is clicked', () => {
    wrapper.find('.color-0').simulate('click', { preventDefault: () => { }, target: categoriesMock[0]});
    expect(updateCategoryMock).toBeCalled();
  });

});