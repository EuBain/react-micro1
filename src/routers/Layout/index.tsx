import { RoutesType } from "..";
import { layoutRoute } from "./routeModel";
// import { accountRoute } from "./routeModel/account";
// import { model1Route } from "./routeModel/model1";
// import { model2Route } from "./routeModel/model2";
// import { model3Route } from "./routeModel/model3";
// import { roommanagementRoute } from "./routeModel/roommanagement";
// import { roomstatusRoute } from "./routeModel/roomstatus";

// 以/开头是绝对子路径，必须包含所有父路径，没有/是相对路径
export const LayoutRoutes: RoutesType[] = [
  {
    name: "主页1",
    path: "/",
    element: "MyLayout",
    children: [
      {
        name: "主页2",
        path: "/",
        // 路由重定向会导致渲染两次
        redirect: "home",
        // element:  'Home',
        // keepalive: true,
      },
      // ...model1Route,
      // ...model2Route,
      // ...model3Route,
      // ...accountRoute,
      // ...roomstatusRoute,
      // ...roommanagementRoute,
      ...layoutRoute,
    ],
  },
];
