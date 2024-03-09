import React, { Suspense, useEffect, useLayoutEffect } from "react";
import { routes } from "@/routers";
import { useRoutes } from "react-router-dom";
import { useAppSelector, useBusOnChangePath } from "@/utils/hooks";
import { scrollPageTitle } from "@/utils/common";
import ContextPageTab, { usePageTabs } from "@/context/ContextPageTabs";
import { routeModel } from "./routers/routeModel";

function App() {
  const router: React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  > | null = useRoutes(routes);
  const { WebTitle: title, WebTitleScrollStatus: flag } = useAppSelector(
    (state) => state.state
  );
  useEffect(() => {
    scrollPageTitle(title, flag);
  });
  const pageTabs = usePageTabs();
  // console.log({ routes });

  return (
    <Suspense fallback={<h2>Loading... 加载中... </h2>}>
      <ContextPageTab.Provider value={pageTabs}>
        {router}
      </ContextPageTab.Provider>
    </Suspense>
  );
}

export default App;
