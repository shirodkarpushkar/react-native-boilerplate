import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import { MEALS } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';
const MealDetailsScreen = props => {
  const {mealId} = props.route.params;
  const meal = MEALS.find(el => el.id === mealId);
  props.navigation.setOptions({
    title: meal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Favorite" iconName="ios-star" onPress={()=>{}} />
      </HeaderButtons>
    ),
  });
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
