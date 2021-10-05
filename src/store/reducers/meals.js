import {MEALS} from '../../data/dummy-data';
import {TOGGLE_FAVORITE} from '../actions/meals';
const initState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};
const mealsReducer = (state = initState, action) => {
console.log("🚀 ~ file: meals.js ~ line 9 ~ mealsReducer ~ action", action)
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        meal => meal.id === action.mealId
      );
      if (existingIndex > -1) {
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return {...state, favoriteMeals: [...updatedFavMeals]};
      } else {
        const meal = state.meals.find(el => el.id === action.mealId);
        return {...state, favoriteMeals: [...state.favoriteMeals, meal]};
      }

    default:
      return state;
  }
};
export default mealsReducer;
