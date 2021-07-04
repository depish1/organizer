import * as actionTypes from './actionTypes';

const addTask = (task: ITask): TasksAction => ({
  type: actionTypes.ADD_TASK,
  task,
});

const removeTask = (taskId: string): TasksAction => ({
  type: actionTypes.REMOVE_TASK,
  taskId,
});

const editTask = (task: ITask): TasksAction => ({
  type: actionTypes.REMOVE_TASK,
  task,
});

const actions = {
  addTask,
  removeTask,
  editTask,
};

export default actions;
