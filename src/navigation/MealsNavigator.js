import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';
import {HeaderButtons} from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/Ionicons';

// const MealsNavigator =  createStackNavigator({
//   Categories: CategoriesScreen,
//   CategoryMeals: CategoryMealsScreen,
//   MealDetails: MealDetailsScreen,
// });

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MealsNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'Meal Categories',
          headerStyle: {
            backgroundColor: Colors.primaryColor,
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
      <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
    </Stack.Navigator>
  );
};
const MealsTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: Colors.accentColor,
        }}>
        <Tab.Screen
          name="Meals"
          component={MealsNavigator}
          options={{
            
            tabBarIcon: tabInfo => {
              return (
                <Icon name="ios-restaurant" size={25} color={tabInfo.color} />
              );
            },
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            title:"Favorites !",
            tabBarIcon: tabInfo => {
              return (
                <Icon
                  name="ios-star"
                  size={25}
                  color={tabInfo.color}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default MealsTabNavigator;
