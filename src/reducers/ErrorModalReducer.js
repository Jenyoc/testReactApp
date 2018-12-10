const initialState = {
  value: false,
};

const ErrorModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ERROR_MODAL_OPEN':{
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

export default ErrorModalReducer;