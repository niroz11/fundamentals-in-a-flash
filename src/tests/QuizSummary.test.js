import React from 'react';
import QuizSummary from '../QuizSummary';
import { shallow } from 'enzyme';


describe('QuizSummary', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <QuizSummary
      />
    );
  });

  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});