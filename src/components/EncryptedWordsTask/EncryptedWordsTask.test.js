import React from 'react';
import { shallow, mount } from 'enzyme';

import EncryptedWordsTask from './index';
import { title } from './constants';

describe('title on encrypted word task',() => {
  it('should exist', () => {
    const wrapper = shallow(<EncryptedWordsTask />);
    expect(wrapper.find('.title').exists()).toBe(true);
  });

  // it('should be equal: Find Out The Encrypted Word', () => {
  //   const wrapper = mount(<EncryptedWordsTask />);
  //   expect(wrapper.find('.title').text()).toEqual(title);
  // });
});
