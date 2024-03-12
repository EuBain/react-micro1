// react
import React, { createContext } from "react";
import ReactDOM from "react-dom/client";

// 组件库
import App from "./App.tsx";
import zhCN from "antd/locale/zh_CN";
// 工具库
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import store from "@/redux/store";
// import WujieReact from "wujie-react";
// 类型导入
// 样式文件
import "virtual:uno.css";
import "./style.scss";
import { ConfigProvider } from "antd";

// console.log(' import.meta.env.MODE: ',  import.meta.env.MODE);
// console.log(' import.meta.env.BASE_URL: ',  import.meta.env.BASE_URL);
// console.log(' import.meta.env.PROD: ',  import.meta.env.);
console.log(" import.meta.env.DEV: ", import.meta.env);
// console.log(' import.meta.env.SSR: ',  import.meta.env.SSR);
// console.log(' import.meta.env: ',  import.meta.env);
// console.log(' import.meta.env: ',  import.meta.env);
console.log(" process.env: ", process.env.NODE_ENV);

const node = document.getElementById("root");
const root = ReactDOM.createRoot(node!);
export const Context = createContext(root);

// console.log(element)
root.render(
  <React.StrictMode>
    {/* <HashRouter> */}
    <BrowserRouter basename="/react-micro1">
      {/* <BrowserRouter > */}
      <ConfigProvider locale={zhCN}>
        <ReduxProvider store={store}>
          <Context.Provider value={root}>
            <App />
          </Context.Provider>
        </ReduxProvider>
      </ConfigProvider>
    </BrowserRouter>
    {/* </HashRouter> */}
  </React.StrictMode>
);

// if (window.__POWERED_BY_WUJIE__) {
//   console.log(window.__POWERED_BY_WUJIE__)
//   window.__WUJIE_MOUNT = () => {
//     root.render(app)
//   };
//   window.__WUJIE_UNMOUNT = () => {
//     root.unmount();
//   };
//   window.__WUJIE.mount()
// } else {
// root.render(app)
// }
