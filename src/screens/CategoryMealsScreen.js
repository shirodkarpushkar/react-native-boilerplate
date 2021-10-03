import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {CATEGORIES} from '../data/dummy-data'
const CategoriesMealsScreen = props => {
  
  const {categoryId}  =props.route.params
  const category = CATEGORIES.find(el => el.id === categoryId);
  return (
    <View style={styles.screen}>
      <Text>The Categories Meals Screen</Text>
      <Text>{category.title}</Text>
      <Button title="Go to Details !" onPress={() => routeTo(props)} />
      <Text>{'\n'}</Text>
      <Button title="Go Back !" onPress={() => props.navigation.goBack()} />
    </View>
  );
};
const routeTo = props => {
  props.navigation.navigate('MealDetails');
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default CategoriesMealsScreen;
