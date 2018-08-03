import * as actionTypes from '../actions/auth';

const initialState = {
  successMessage: '',
  isUserAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.ADD_SUCCESS_MSG:
    return {
      ...state,
      successMessage: action.value,
    };
  case actionTypes.REMOVE_SUCCESS_MSG:
    return {
      ...state,
      successMessage: '',
    };
  case actionTypes.AUTHENTICATE:
    return {
      ...state,
      isUserAuthenticated: true,
    };
  case actionTypes.UNAUTHENTICATE:
    return {
      ...state,
      isUserAuthenticated: false,
    };
  default:
    return state;
  }
};

export default authReducer;
