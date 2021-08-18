import { shallow } from 'enzyme';
import React from 'react';

import Congrats from './Congrats';
import { findByTestAttr } from '../tests/testsUtils';

const setup = (props = {}) => {
  return shallow(<Congrats {...props} />)
};

it('should render Congrats component', () => {
  const wrapper = setup();
  const congratsComponent = findByTestAttr(wrapper, 'congrats-component');
  expect(congratsComponent.length).toBe(1);
});

it('should show congrats message when the word is guessed', () => {
  const wrapper = setup({ isGuessed: true });
  const congratsMessage = findByTestAttr(wrapper, 'congrats-message');
  expect(congratsMessage.text().length).not.toBe(0);
})

it('should not show congrats message when the guess is wrong', () => {
  const wrapper = setup({ isGuessed: false });
  const congratsMessage = findByTestAttr(wrapper, 'congrats-message');
  expect(congratsMessage.length).toBe(0);
})
