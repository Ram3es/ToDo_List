import React, { useEffect } from "react";
import { RequiredAuthHOC} from "../../../router";

interface IMainProps {
  children: any;
}
const Main = ({ children }: IMainProps) => {
  return  <React.Fragment>{children}</React.Fragment>;
};

 export default RequiredAuthHOC(Main);
 