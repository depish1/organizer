import userActions from './user/actionCreators';
import tasksActions from './tasks/actionCreators';
import menuActions from './menu/actionCreators';

export default {
  ...userActions,
  ...tasksActions,
  ...menuActions,
};
