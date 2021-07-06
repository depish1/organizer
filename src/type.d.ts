enum TaskPriority {
  Low = 'low',
  Medium = 'medium',
  High = 'high',
}

interface ITask {
  taskId: string;
  uid: string;
  title: string;
  body: string;
  createDate: Date;
  expireDate: ExpireDate;
  isDone: boolean;
  priority: TaskPriority;
}

type TasksState = {
  tasks: ITask[];
};

type UserState = {
  uid: string | null;
};

type MenuState = {
  isOpen: boolean;
};

type TasksAction = {
  type: string;
  task?: ITask;
  taskId?: string;
};
type UserAction = {
  type: string;
  uid?: string;
};
type MenuAction = {
  type: string;
};

type DispatchType = (args: TasksAction | UserAction) => TasksAction;
