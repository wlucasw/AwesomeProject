import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import MealList from '../mealList';

test('renders correctly', () => {
  const tree = renderer.create(<MealList />).toJSON();
  expect(tree).toMatchSnapshot();
});
