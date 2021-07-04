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

type TasksAction = {
  type: string;
  task?: ITask;
  taskId?: string;
};
type UserAction = {
  type: string;
  uid?: string;
};

type DispatchType = (args: TasksAction | UserAction) => TasksAction;
