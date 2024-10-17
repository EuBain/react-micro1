import Item from "antd/es/list/Item";
import { group } from "console";

export const model1 = {
  model: "主页",
  path: "home",
  element: "Home",
  keepalive: true,
  // modelConfig: [
  //   {
  //     name: "主页1",
  //     path: "1",
  //     groupName: "主页",
  //     routes: [
  //       {
  //         name: "主页1",
  //         path: "home",
  //         element: "Home",
  //         keepalive: true,
  //       },
  //       {
  //         name: "主页1",
  //         path: "homed",
  //         element: "Home",
  //         keepalive: true,
  //       },
  //       {
  //         name: "主页2",
  //         path: "demo12",
  //         element: "Demo",
  //         keepalive: true,
  //       },
  //     ],
  //   },
  //   {
  //     name: "主页2",
  //     path: "2",
  //     groupName: "主页",
  //     routes: [
  //       {
  //         name: "主页1",
  //         path: "home",
  //         element: "Home",
  //         keepalive: true,
  //       },
  //       {
  //         name: "主页1",
  //         path: "homed",
  //         element: "Home",
  //         keepalive: true,
  //       },
  //       {
  //         name: "主页2",
  //         path: "demo12",
  //         element: "Demo",
  //         keepalive: true,
  //       },
  //     ],
  //   },
  // ],
};

// export const model1Route = model1.modelConfig
//   .map((item) => ({ ...item, children: item.routes }))
//   .flat();
