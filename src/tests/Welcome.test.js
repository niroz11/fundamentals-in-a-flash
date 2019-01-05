import React from 'react';
import Welcome from '../Welcome';
import { shallow } from 'enzyme';

const updateCategoryMock = jest.fn();
describe('Welcome', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Welcome
        updateCategory={updateCategoryMock}
      />
    );
  });

  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default state', () => {
    expect(wrapper.state()).toEqual({ categories: ['Prototype Methods', 'Scope', 'OOP'] });
  });

  it.skip('should update category when a category is clicked', () => {
    wrapper.find('color-0').simulate('click')
  });

});