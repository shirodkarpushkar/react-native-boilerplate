export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTERS = 'SET_FILTERS';
export const IS_FAVORITE = 'IS_FAVORITE';

export const toggleFavorite = id => {
  return {type: TOGGLE_FAVORITE, mealId: id};
};
export const isFavorite = id => {
  return {type: IS_FAVORITE, mealId: id};
};
export const setFilters = filters => {
  return {type: SET_FILTERS, filters};
};
