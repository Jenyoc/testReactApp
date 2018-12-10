const initialState = {
  list: {},
};

const AllBreadsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_BREEDS_LIST':{
      return {
        ...state,
        list: action.payload.list,
      };
    }
    default: {
      return state;
    }
  }
};

export default AllBreadsReducer;