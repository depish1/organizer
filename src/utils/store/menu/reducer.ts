import * as actionTypes from './actionTypes';

const initialState: MenuState = {
  isOpen: false,
};

const reducer = (state: MenuState = initialState, action: MenuAction): MenuState => {
  switch (action.type) {
    case actionTypes.TOGGLE_MENU: {
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    }

    default:
      return state;
  }
};

export default reducer;
