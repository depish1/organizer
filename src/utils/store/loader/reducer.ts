import * as actionTypes from './actionTypes';

const initialState: LoaderState = {
  isOpen: false,
};

const reducer = (state: MenuState = initialState, action: LoaderAction): MenuState => {
  switch (action.type) {
    case actionTypes.OPEN_LOADER: {
      return {
        isOpen: true,
      };
    }
    case actionTypes.CLOSE_LOADER: {
      return {
        isOpen: false,
      };
    }

    default:
      return state;
  }
};

export default reducer;
