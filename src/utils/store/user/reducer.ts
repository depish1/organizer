import * as actionTypes from './actionTypes';

const initialState: UserState = {
  uid: null,
};

const reducer = (state: UserState = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case actionTypes.LOGIN: {
      return {
        uid: action.uid!,
      };
    }

    case actionTypes.LOGOUT:
      return {
        uid: null,
      };
    default:
      return state;
  }
};

export default reducer;
