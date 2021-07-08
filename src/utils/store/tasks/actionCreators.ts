import * as actionTypes from './actionTypes';

const addTask = (task: ITask): TasksAction => ({
  type: actionTypes.ADD_TASK,
  task,
});
const setTasks = (tasks: ITask[]): TasksAction => ({
  type: actionTypes.SET_TASKS,
  tasks,
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
  setTasks,
};

export default actions;
