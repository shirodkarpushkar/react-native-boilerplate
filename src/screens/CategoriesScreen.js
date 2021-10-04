import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import Colors from '../constants/Colors';
import HeaderButton from '../components/HeaderButton';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

const CategoriesScreen = props => {
  props.navigation.setOptions({
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Favorite" iconName="ios-menu" onPress={() => {}} />
      </HeaderButtons>
    ),
  });
  const renderGridItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{...styles.gridItem, backgroundColor: item.color}}
        onPress={() => routeTo(props, item)}>
        <View>
          <Text style={styles.itemTitle}> {item.title} </Text>
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
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 3,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  itemTitle: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
    textAlign: 'right',
  },
});
export default CategoriesScreen;
