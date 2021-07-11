import userActions from './user/actionCreators';
import menuActions from './menu/actionCreators';

export default {
  ...userActions,
  ...menuActions,
};
