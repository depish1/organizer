import * as actionTypes from './actionTypes';

const login = (uid: string): UserAction => ({
  type: actionTypes.LOGIN,
  uid,
});

const logout = (): UserAction => ({
  type: actionTypes.LOGOUT,
});

const actions = {
  login,
  logout,
};

export default actions;
