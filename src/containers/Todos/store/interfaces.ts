export interface ITodo {
  id?: number;
  text: string;
  createAt: Date;
  completed: boolean;
}
export interface ITodosState {
  todos: ITodo[];
  error: null | string;
  loading: boolean;
  todo: ITodo | null;
}
