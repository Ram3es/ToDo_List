import { Login } from "@containers/";
import { ROUTER_PATH } from "./constants";
export const publicRouter = [
  {
    path: ROUTER_PATH.LOGIN,
    exact: true,
    component: Login,
    children: [],
    icon: "",
    label: "",
  },
  {
    path: ROUTER_PATH.REGISTRATION,
    exact: true,
    component: null,
    children: [],
    icon: "",
    label: "",
  },
  {
    path: `${ROUTER_PATH.RESET}/:token`,
    exact: true,
    component: null,
    children: [],
    icon: "",
    label: "",
  },
  {
    path: ROUTER_PATH.FORGOT,
    exact: true,
    component: null,
    children: [],
    icon: "",
    label: "",
  },
  {
    path: `${ROUTER_PATH.ACTIVATION}/:token`,
    exact: true,
    component: null,
    children: [],
    icon: "",
    label: "",
  },
];
