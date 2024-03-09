import { LazyExoticComponent, lazy } from "react";

const Home = lazy(() => import("@/pages/Home"));
const MyLayout = lazy(() => import("@/pages/Layout"));
const Demo = lazy(() => import("@/pages/demo"));
const Index = lazy(() => import("@/pages/Event"));
const Account = lazy(() => import("@/pages/Account"));
const RoomStatus = lazy(() => import("@/pages/RoomStatus"));
const RoomManagement = lazy(() => import("@/pages/RoomManagement"));

export const component: Record<
  string,
  LazyExoticComponent<() => JSX.Element>
> = {
  Home,
  MyLayout,
  Demo,
  Index,
  Account,
  RoomStatus,
  RoomManagement,
};
