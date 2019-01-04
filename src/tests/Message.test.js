import React from 'react';
import Message from '../Message';
import { shallow } from 'enzyme';


describe('Message', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Message
      />
    );
  });

  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});