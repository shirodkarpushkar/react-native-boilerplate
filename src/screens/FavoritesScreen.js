import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';
import {useSelector} from 'react-redux';
import {MEALS} from '../data/dummy-data';

const FavoritesScreen = props => {
  const meals = useSelector(state => state.meals.favoriteMeals);
  const renderMealItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => routeTo(props, item)}
        style={styles.mealItem}>
        <View>
          <View style={{...styles.mealRow, ...styles.mealHeader}}>
            <ImageBackground
              source={{uri: item.imageURL}}
              style={styles.bgImage}>
              <Text style={styles.title} numberOfLines={1}>
                {item.title}
              </Text>
            </ImageBackground>
          </View>
          <View style={{...styles.mealRow, ...styles.mealDetails}}>
            <Text>{item.duration}m</Text>
            <Text>{item.complexity.toUpperCase()}</Text>
            <Text>{item.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={meals}
        renderItem={renderMealItem}
        style={{width: styles.mealItem.width}}
      />
    </View>
  );
};
const routeTo = (props, item) => {
  props.navigation.navigate('MealDetails', {
    mealId: item.id,
  });
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#e5e5e5',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
  },
  mealHeader: {
    height: '85%',
  },
  mealDetails: {
    paddingHorizontal: 10,
    height: '15%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mealContainer: {},
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
});
export default FavoritesScreen;
