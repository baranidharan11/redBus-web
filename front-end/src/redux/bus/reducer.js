const initialState = {
  buses: [],
  loading: false,
  error: null,
};

const busReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BUSES":
      return { ...state, buses: action?.payload };

    default:
      return state;
  }
};

export default busReducer;
