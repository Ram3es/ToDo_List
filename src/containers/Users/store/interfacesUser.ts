export interface IUser {
  id?: number;
  f_name: string;
  l_name: string;
  email: string;
  createdAt: Date;
  is_active: boolean;
  avatar: null | string;
}
export enum EOrder {
  ASC = "ASC",
  DESC = "DESC",
}
export interface IFilterSettings {
  sortBy: keyof IUser;
  order: EOrder;
  search: string;
  limit: number;
  skip: number;
}

export interface IUserState {
  loading: boolean;
  error: string | null;
  users: IUser[];
  user: IUser | null;
  filterSettings: IFilterSettings;
}
