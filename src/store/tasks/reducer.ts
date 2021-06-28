import * as actionTypes from './actionTypes';

const initialState: TasksState = {
  tasks: [],
};

const reducer = (state: TasksState = initialState, action: TasksAction): TasksState => {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      const newTask: ITask = {
        taskId: action.task!.taskId,
        uid: action.task!.uid,
        title: action.task!.title,
        body: action.task!.body,
        createDate: action.task!.createDate,
        expireDate: action.task!.expireDate,
        status: action.task!.status,
        priority: action.task!.priority,
      };
      return {
        tasks: [...state.tasks, newTask],
      };

    case actionTypes.REMOVE_TASK:
      return {
        tasks: state.tasks.filter((t) => t.taskId !== action.taskId),
      };
    case actionTypes.REMOVE_TASK:
      const updatedTask: ITask = {
        taskId: action.task!.taskId,
        uid: action.task!.uid,
        title: action.task!.title,
        body: action.task!.body,
        createDate: action.task!.createDate,
        expireDate: action.task!.expireDate,
        status: action.task!.status,
        priority: action.task!.priority,
      };
      return {
        tasks: [...state.tasks.filter((t) => t.taskId !== action.taskId), updatedTask],
      };
  }
  return state;
};

export default reducer;
