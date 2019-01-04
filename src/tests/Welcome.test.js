import React from 'react';
import Welcome from '../Welcome';
import { shallow } from 'enzyme';


describe('Welcome', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Welcome
      />
    );
  });

  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});