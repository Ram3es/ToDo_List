import { createSelector } from "reselect";
import { IAppState } from "@shared/";

const selectAuth = (state: IAppState) => state.authReducer;

export const getFlagAuth = () => createSelector(selectAuth, (state) => state.isAuthintification);
