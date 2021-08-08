import userActions from './user/actionCreators';
import menuActions from './menu/actionCreators';
import loaderActions from './loader/actionCreators';

export default {
  ...userActions,
  ...menuActions,
  ...loaderActions,
};
