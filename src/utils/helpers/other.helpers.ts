import { History } from 'history';

export const redirect = (path: string, history: History, e: Event | null = null): void => {
  e?.preventDefault();
  history.push(path);
};
