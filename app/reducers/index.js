export const searchCategoryReducer = (state = 'cities', action) => {
  switch (action.type) {
    case 'SET_SEARCH_CATEGORY':
      return action.category;
    default:
      return state;
  }
};
