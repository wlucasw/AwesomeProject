/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, backgroundStyle, ScrollView} from 'react-native';
import type {Node} from 'react';

import Hello from './Hello';
import MealList from './mealList';

const App: () => Node = () => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      <Hello />
      <MealList />
    </ScrollView>
  );
};

export default App;
