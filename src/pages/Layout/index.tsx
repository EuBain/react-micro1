import { Layout, Spin, theme } from "antd";
import MyHeader from "./component/MyHeader";
import Navigate from "./component/Navigate";
import Container from "./component/Container";
import React, { Suspense, useEffect } from "react";
import { useBusOnChangePath } from "@/utils/hooks";
import { routeModel } from "@/routers/routeModel";

const MyLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useBusOnChangePath();
  // console.log(window.$wujie?.props?.addNavList);
  useEffect(() => {
    // console.log(window.$wujie?.props?.addNavList);
    // console.log(window.__POWERED_BY_WUJIE__);
    if (window.__POWERED_BY_WUJIE__ && window.$wujie?.props?.addNavList) {
      window.$wujie?.props?.addNavList?.(routeModel);
    }
  }, [window.$wujie?.props?.addNavList]);

  return (
    <>
      {window.__POWERED_BY_WUJIE__ ? (
        <Layout u-h="inherit" u-min-w="xl">
          <Container background={colorBgContainer} />
        </Layout>
      ) : (
        <Layout u-h="inherit" u-min-w="xl">
          <Navigate background={colorBgContainer} />
          <Layout>
            <MyHeader />
            <Layout style={{ padding: "0 24px 24px" }}>
              <Container background={colorBgContainer} />
            </Layout>
          </Layout>
        </Layout>
      )}
    </>
  );
};

export default MyLayout;
