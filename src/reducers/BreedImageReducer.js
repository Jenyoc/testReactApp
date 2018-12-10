const initialState = {
  value: {},
};

const BreedImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BREED_IMAGE':{
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

export default BreedImageReducer;