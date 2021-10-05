import { ROUTER_PATH } from "./constants";

export const privateRouter = (userRole: string) =>
  [
    {
      path: ROUTER_PATH.TODOS,
      exact: true,
      component: null,
      children: [],
      icon: "",
      label: "",
      acl: ["ADMIN", "MANAGER"],
    },
    {
      path: ROUTER_PATH.USERS,
      exact: true,
      component: null,
      children: [],
      icon: "",
      label: "",
      acl: ["ADMIN"],
    },
  ].filter((route) => route.acl.includes(userRole) || !route.acl.length);
