import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import Colors from '../constants/Colors';
const CategoriesScreen = props => {
  const renderGridItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => routeTo(props, item)}>
        <View>
          <Text> {item.title} </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

const routeTo = (props, item) => {
  props.navigation.navigate('CategoryMeals', {
    categoryId: item.id,
  });
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});
export default CategoriesScreen;
