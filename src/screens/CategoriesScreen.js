import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CategoriesScreen = props => {
  
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen</Text>
      <Button
        title="Go to Category Meals"
        onPress={() => props.navigation.navigate('CategoryMeals')}
      />
    </View>
  );
};

const routeTo = props => {
  props.navigation.navigate('CategoryMeals');
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default CategoriesScreen;
