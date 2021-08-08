import * as actionTypes from './actionTypes';

const openLoader = (): LoaderAction => ({
  type: actionTypes.OPEN_LOADER,
});
const closeLoader = (): LoaderAction => ({
  type: actionTypes.CLOSE_LOADER,
});

const actions = {
  openLoader,
  closeLoader,
};

export default actions;
