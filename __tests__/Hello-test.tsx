import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Hello from '../Hello';

test('renders correctly', () => {
  const tree = renderer.create(<Hello />).toJSON();
  expect(tree).toMatchSnapshot();
});
