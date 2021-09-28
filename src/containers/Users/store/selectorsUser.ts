import { IUserState } from "@containers/*";
import { createSelector } from "reselect";
import { IAppState } from "@shared/";

export const selectUsers = (state: IAppState) => state.userReducer;
// const selectFilters = (state: IAppState) => state.userReducer.filterSettings;

export const getUsers = createSelector(selectUsers, (state) => state.users);
// const getFilters = createSelector(selectUsers, (state) => state.filterSettings);

// const search = createSelector([selectUsers, selectFilters], ({ users }, { search }) => {
//   return users.filter((user) => Object.values(user).some((t) => t.includes(search)));
// });

// console.log(search);
