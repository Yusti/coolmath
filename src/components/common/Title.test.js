import React from 'react';
import { shallow } from 'enzyme';

import Title from './Title';

const text = 'text for test';
const props = { text }
const title = shallow(<Title {...props} />);

it('should render correctly', () => {
  expect(title).toMatchSnapshot();
})

it('renders the title text', () => {
  expect(title.find('h2').text()).toEqual(text);
});
