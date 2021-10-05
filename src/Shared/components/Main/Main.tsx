import React from "react";
import { RequiredAuthHOC } from "@router/"

interface IMainProps {
    children: any
}
 const Main =({children}:IMainProps)=><>{children}</>

 export default RequiredAuthHOC(Main)