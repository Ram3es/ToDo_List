import { IUser } from "@containers/";
export interface IAuthState {
  error: string | null;
  loading: boolean;
  isAuthintification: boolean;
  token: string | null;
  authUser: null | Partial<IUser> | number;
}
