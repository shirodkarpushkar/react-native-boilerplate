import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import HeaderButton from '../components/HeaderButton';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import Colors from '../constants/Colors';

const FilterSwitch = props => (
  <View style={styles.filterContainer}>
    <Text> { props.label}</Text>
    <Switch
      trackColor={{true: Colors.primaryColor}}
      thumbColor={Colors.primaryColor}
      value={props.value}
      onValueChange={props.onChange}
    />
  </View>
);

const FiltersScreen = props => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  useEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="drawer"
            iconName="ios-menu"
            onPress={() => props.navigation.toggleDrawer()}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="save"
            iconName="ios-save"
            onPress={() => console.log('Saving')}
          />
        </HeaderButtons>
      ),
    });
  });
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-free"
        value={isGlutenFree}
        onChange={newValue => {
          setIsGlutenFree(newValue);
        }}
      />
      <FilterSwitch
        label="Lactose-free"
        value={isLactoseFree}
        onChange={newValue => {
          setIsLactoseFree(newValue);
        }}
      />
      <FilterSwitch
        label="Vegan"
        value={isVegan}
        onChange={newValue => {
          setIsVegan(newValue);
        }}
      />
      <FilterSwitch
        label="Vegetarian"
        value={isVegetarian}
        onChange={newValue => {
          setIsVegetarian(newValue);
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,

    alignItems: 'center',
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
    margin: 20,
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical:10
  },
});
export default FiltersScreen;
