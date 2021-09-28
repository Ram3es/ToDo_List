export interface ITodo {
  id?: number;
  title: string;
  userId: number;
  body: string;
}
export interface ITodosState {
  todos: ITodo[];
  error: null | string;
  loading: boolean;
  todo: ITodo | null;
}
