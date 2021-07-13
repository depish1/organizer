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
  createDate: timestamp;
  expireDate: timestamp;
  isDone: boolean;
  priority: TaskPriority;
}
interface ITaskToSend {
  taskId?: string;
  uid: string;
  title: string;
  body: string;
  createDate: timestamp;
  expireDate: timestamp;
  isDone: boolean;
  priority: TaskPriority;
}

interface ITaskState {
  expired: ITask[];
  today: ITask[];
  future: ITask[];
}

type UserState = {
  uid: string | null;
};

type MenuState = {
  isOpen: boolean;
};

type UserAction = {
  type: string;
  uid?: string;
};
type MenuAction = {
  type: string;
};

type DispatchType = (args: TasksAction | UserAction) => TasksAction;
