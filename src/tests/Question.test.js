import React from 'react';
import Question from '../Question';
import { shallow } from 'enzyme';


describe('Question', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Question
      />
    );
  });

  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});