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
  sortBy: string;
  order: EOrder;
  search: string;
}

export interface IUserState {
  loading: boolean;
  users: IUser[];
  user: IUser | null;
  filterSettings: IFilterSettings;
}
