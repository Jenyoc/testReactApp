const initialState = {
  value: null,
};

const CurrentBreedReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CURRENT_BREED':{
      return {
        ...state,
        value: action.payload.value,
      };
    }
    default: {
      return state;
    }
  }
};

export default CurrentBreedReducer;