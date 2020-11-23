import { ADD_SMURF_START, ADD_SMURF_SUCCESS, ADD_SMURF_FAILURE, FETCH_SMURFS_FAILURE, FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS } from "../actions";

const initialState = {
  smurfs: [],
  isLoading: false,
  error: ''
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload
      };
    case FETCH_SMURFS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case ADD_SMURF_START:
      return {
        ...state,
        isLoading: true
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: [
          ...state.smurfs,
          action.payload
        ]
      };
    case ADD_SMURF_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};