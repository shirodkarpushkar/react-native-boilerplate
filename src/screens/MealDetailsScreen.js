import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MEALS} from '../data/dummy-data';
const MealDetailsScreen = props => {
  const {mealId} = props.route.params;
  const meal = MEALS.find(el => el.id === mealId);
  props.navigation.setOptions({title: meal.title});
  return (
    <View style={styles.screen}>
      <Text>The Meal Details Screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default MealDetailsScreen;
