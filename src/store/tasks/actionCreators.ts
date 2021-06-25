import * as actionTypes from './actionTypes';

export function addTask(task: ITask) {
  const action: TasksAction = {
    type: actionTypes.ADD_TASK,
    task,
  };

  return simulateHttpRequest(action);
}

export function removeTask(task: ITask) {
  const action: TasksAction = {
    type: actionTypes.REMOVE_TASK,
    task,
  };
  return simulateHttpRequest(action);
}

export function simulateHttpRequest(action: TasksAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}
