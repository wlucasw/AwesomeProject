import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import data from './mealData.json';

const styles = StyleSheet.create({
  green: {
    color: 'green',
    fontSize: 30,
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
});

const MealList = () => {
  return (
    <View style={styles.content}>
      {data.meals.map(meal => {
        return (
          <Text>
            {meal.strMeal} : {meal.strArea} {meal.strCategory}
            {meal.strImageSource}
          </Text>
        );
      })}
    </View>
  );
};

export default MealList;
