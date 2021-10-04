import {MEALS} from '../../data/dummy-data';
const initState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};
const mealsReducer = (state = initState, action) => {
  return state;
};
export default mealsReducer