import { IUserState } from "@containers/*";
import { createSelector } from "reselect";
import { IAppState } from "@shared/";

export const selectUsers = (state: IAppState) => state.userReducer;
// const selectFilters = (state: IAppState) => state.userReducer.filterSettings;

export const getUsers = createSelector(selectUsers, (state) => state.users);
export const getUsersFilterSetting = createSelector(selectUsers, (state) => state.filterSettings);

// const search = createSelector([selectUsers, selectFilters], ({ users }, { search }) => {
//   return users.filter((user) => Object.values(user).some((t) => t.includes(search)));
// });

export const getFilteredUsers = createSelector(selectUsers, (state) => {
  const {
    users,
    filterSettings: { search },
  } = state;

  return users.filter((user) =>
    Object.values(user)
      .filter((value) => !!value)
      .some((value) => value.toLowerCase().trim().includes(search.toLowerCase().trim())),
  );
});
