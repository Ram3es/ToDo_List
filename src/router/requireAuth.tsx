import React from "react"
import { Redirect } from "react-router"
export const RequiredAuthHOC =  (ComposedComponent : any)=>{
 return (props:any) => {
  
  const isAuthtentification = true
    
   return  isAuthtentification ? <ComposedComponent {...props} /> : <Redirect to="/login" />
 }
}
