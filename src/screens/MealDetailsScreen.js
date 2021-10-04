import React, {useEffect} from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {MEALS} from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';
const MealDetailsScreen = props => {
  const {mealId} = props.route.params;
  const meal = MEALS.find(el => el.id === mealId);
  useEffect(() => {
    props.navigation.setOptions({
      title: meal.title,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="Favorite" iconName="ios-star" onPress={() => {}} />
        </HeaderButtons>
      ),
    });
  });
  return (
    <ScrollView>
      <Image source={{uri: meal.imageURL}} style={styles.image} />
      <View style={styles.mealDetails}>
        <Text style={styles.mealDetailsText}>{meal.duration}m</Text>
        <Text style={styles.mealDetailsText}>
          {meal.complexity.toUpperCase()}
        </Text>
        <Text style={styles.mealDetailsText}>
          {meal.affordability.toUpperCase()}
        </Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {meal.ingredients.map((ingredient, idx) => (
        <Text key={`ingredient${idx}`} style={styles.listItem}>
          {ingredient}
        </Text>
      ))}
      <Text style={styles.title}>Steps</Text>
      {meal.steps.map((step, sdx) => (
        <Text key={`step${sdx}`} style={styles.listItem}>
          {step}
        </Text>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
  },
  mealDetails: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-around',
  },
  mealDetailsText: {
    fontFamily: 'OpenSans-Regular',
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    fontFamily: 'OpenSans-Regular',
  },
});
export default MealDetailsScreen;
