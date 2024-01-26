import { model1, model1Route } from "./model1";
import { model2 } from "./model2";
import { model3 } from "./model3";

export const routeModel = {
  subApp: "ReactMicro",
  model: [
    model1,
    model2,
    model3,
    // {
    //   model: "事件7",
    //   modelConfig: [
    //     {
    //       groupName: "",
    //       route: [
    //         {
    //           name: "事件",
    //           path: "index37",
    //           element: "Index",
    //           keepalive: true,
    //         },
    //       ],
    //     },
    //     {
    //       groupName: "小组2",
    //       route: [
    //         {
    //           name: "事件7aa",
    //           path: "index47",
    //           element: "Index",
    //           keepalive: true,
    //         },
    //         {
    //           name: "事件7ddfd",
    //           path: "index437",
    //           element: "Index",
    //           keepalive: true,
    //         },
    //         {
    //           name: "事件7",
    //           path: "index57",
    //           element: "Index",
    //           keepalive: true,
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],
};
