/* eslint-disable */

import { Navigate } from "react-router-dom";
import { UserRoutes } from "./User";
import { LayoutRoutes } from "./Layout";
import AuthRoute from "@components/AuthRoute";
import { component } from "./routesMap";
import { LazyExoticComponent } from "react";

export interface RoutesType {
  name: string;
  path?: string;
  element?: string;
  children?: RoutesType[];
  redirect?: string;
  keepalive?: boolean;
  auth?: boolean;
}
// 处理路由
export function handlerRoutes(routes: RoutesType[]): any {
  const route = routes.map((index: RoutesType) => {
    let Components;
    if (index.element) {
      Components = component[index.element] as LazyExoticComponent<
        () => JSX.Element
      >;
    }
    const _path = index.path?.replace(/\/{2,}/, "/");
    return {
      name: index.name,
      path: _path,
      element: index.redirect ? (
        <Navigate to={`/${index.redirect}`} replace={true} />
      ) : (
        Components && <AuthRoute {...index} children={<Components />} />
      ),
      // ) : Components ? (
      //   <AuthRoute {...index} children={<Components />} />
      // ) : null,
      children: index.children ? handlerRoutes(index.children) : null,
    };
  });
  return route;
}

export function flatRoutes(routes: RoutesType[]) {
  const object: Record<string, string> = {};
  flatChildrenRoutes(routes);
  function flatChildrenRoutes(routes: RoutesType[], parentPath?: string) {
    routes.forEach((l: RoutesType) => {
      // const thisPath = l.redirect ? l.redirect : l.path;
      const thisPath = l.path ?? "";
      const path = /^\//g.test(thisPath)
        ? thisPath
        : `${parentPath ?? ""}/${thisPath}`.replace(/\/{2,}/, "/");
      if (l.keepalive) {
        // console.log(path)
        object[path] = l.name;
      }
      if (l.children) {
        flatChildrenRoutes(l.children, path);
      }
    });
  }
  return object;
}

const route = [
  ...UserRoutes,
  ...LayoutRoutes,
  // ...DemoRoutes,
];
// console.log(route)

export const routes = handlerRoutes(route);
console.log(routes);
// export const routes = [
//      ...ErrorPageRoutes,
// ]

export const keepalive = flatRoutes(route);
console.log({ keepalive });
