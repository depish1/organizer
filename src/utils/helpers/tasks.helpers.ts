export const filterTasksFunc = {
  expired: (currentDate: number, taskDate: number): boolean => currentDate > taskDate,
  today: (currentDate: number, taskDate: number): boolean => currentDate === taskDate,
  future: (currentDate: number, taskDate: number): boolean => currentDate < taskDate,
};

export const getFilteredTasks = (tasksArr: ITask[], filterFunc: (a: number, b: number) => boolean): ITask[] => {
  const currentDate = new Date().setHours(0, 0, 0, 0);
  const newTasks = tasksArr.filter(({ isDone, expireDate }) => {
    if (isDone) return false;
    const taskDate = new Date(expireDate.toDate()).setHours(0, 0, 0, 0);
    return filterFunc(currentDate, taskDate);
  });
  return newTasks.sort((a, b) => a.expireDate - b.expireDate);
};
