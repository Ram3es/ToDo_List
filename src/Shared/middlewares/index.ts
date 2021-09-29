import { Dispatch, AnyAction } from "redux";
import { IAppState } from "@shared/";
import { todoConsts, userConstType } from "@containers/"
import { ACTION_FAILURE_TYPES } from "@shared/"

export const errorMiddlewearHandler = (data: { getState: () => IAppState; dispatch: Dispatch }) => {
  const { getState, dispatch } = data;
  return (next:(action:AnyAction)=> void) => (action:AnyAction) =>{
    const {payload, type} = action

    const commonConstType = {...todoConsts, ...userConstType}
    
    const onlyFailureTypes = Object.values(commonConstType).map(type => type.FAILURE)

    if(onlyFailureTypes.includes(action.type)){
        const state = getState() 
       dispatch({type:ACTION_FAILURE_TYPES, payload})
        
    }
      return next(action)
  }
};
