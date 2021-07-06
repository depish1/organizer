import * as actionTypes from './actionTypes';

const toggleMenu = (): MenuAction => ({
  type: actionTypes.TOGGLE_MENU,
});

const actions = {
  toggleMenu,
};

export default actions;
