import { RoutesType } from "..";
export const UserRoutes: RoutesType[] | [] = !window.__POWERED_BY_WUJIE__
  ? [
      {
        name: "登陆",
        path: "login",
        element: "Login",
        // children: [
        //   {
        //     name: "主页2",
        //     path: "/",
        //     // 路由重定向会导致渲染两次
        //     redirect: "home",
        //     // element:  'Home',
        //     // keepalive: true,
        //   },
        // ],
      },
      {
        name: "demo",
        path: "de",
        element: "Demo",
        // children: [
        //   {
        //     name: "主页2",
        //     path: "/",
        //     // 路由重定向会导致渲染两次
        //     redirect: "home",
        //     // element:  'Home',
        //     // keepalive: true,
        //   },
        // ],
      },
      {
        name: "登陆",
        path: "homes",
        element: "Home",
        // children: [
        //   {
        //     name: "主页2",
        //     path: "/",
        //     // 路由重定向会导致渲染两次
        //     redirect: "home",
        //     // element:  'Home',
        //     // keepalive: true,
        //   },
        // ],
      },
    ]
  : [];
