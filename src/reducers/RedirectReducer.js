const initialState = {
  value: false,
};

const RedirectReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'IS_REDIRECT':{
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

export default RedirectReducer;