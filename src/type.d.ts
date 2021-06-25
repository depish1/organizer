enum TaskStatus {
  Open = 'open',
  Done = 'done',
  Expired = 'expired',
}

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
  ExpireDate: ExpireDate;
  status: TaskStatus;
  priority: TaskPriority;
}

type TasksState = {
  tasks: ITask[];
};

type TasksAction = {
  type: string;
  task?: ITask;
  taskId?: string;
};

type DispatchType = (args: TasksAction) => TasksAction;
