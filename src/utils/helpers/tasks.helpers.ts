import firebase from 'utils/firebase/config';

export const downloadTasks = async (uid: string): Promise<ITask[]> => {
  const results = await firebase.firestore().collection('task').where('uid', '==', uid).get();
  return results.docs.map((doc) => {
    const data = doc.data();
    const task = {
      taskId: doc.id,
      uid: data.uid,
      title: data.title,
      body: data.body,
      createDate: data.createDate,
      expireDate: data.expireDate,
      isDone: data.isDone,
      priority: data.priority,
    };
    return task;
  });
};
export const downloadTasks2 = (uid: string): ITask[] => {
  const tasks: ITask[] = [];
  firebase
    .firestore()
    .collection('task')
    .where('uid', '==', uid)
    .onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const task = {
          taskId: doc.id,
          uid: data.uid,
          title: data.title,
          body: data.body,
          createDate: data.createDate,
          expireDate: data.expireDate,
          isDone: data.isDone,
          priority: data.priority,
        };
        tasks.push(task);
      });
    });
  return tasks;
};
