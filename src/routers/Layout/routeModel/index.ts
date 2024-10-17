import { RoutesType } from "@/routers";
import { account } from "./account";
import { model1 } from "./model1";
import { model2 } from "./model2";
import { model3 } from "./model3";
import { roommanagement } from "./roommanagement";
import { roomstatus } from "./roomstatus";

export type Route = {
  name: string;
  path: string;
  element: string;
  keepalive?: boolean;
};

export type ModelConfig = {
  name?: string;
  path?: string;
  groupName: string;
  routes: Route[];
};

export type Model = {
  model: string;
  path?: string;
  element?: string;
  keepalive?: boolean;
  modelConfig?: ModelConfig[];
};

export type RouteModel = {
  subApp: string;
  model: Model[];
};

export const routeModel: RouteModel = {
  subApp: "ReactMicro",
  model: [model1, model2, model3, account, roomstatus, roommanagement],
};



export const layoutRoute: RoutesType[] = routeModel.model.map((item) => ({
  name: item.model,
  path: item.path,
  element: item.element,
  keepalive: item.keepalive,
  children: item.modelConfig?.map((l) => l.routes).flat(),
}));
console.log({routeModel,layoutRoute})