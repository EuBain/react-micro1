import React, { Suspense, useEffect } from "react";
import { routes } from "@/routers";
import { useNavigate, useRoutes } from "react-router-dom";
import { useAppSelector, useBusOnChangePath } from "@/utils/hooks";
import { scrollPageTitle } from "@/utils/common";
import ContextPageTab, { usePageTabs } from "@/context/ContextPageTabs";
// import { routeModel } from "./routers/Layout/routeModel";
import Loading from "@components/Loading";
import { useLocalStorageState } from "ahooks";

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
  const [token] = useLocalStorageState("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <ContextPageTab.Provider value={pageTabs}>
        {router}
      </ContextPageTab.Provider>
    </Suspense>
    // <Loading />
  );
}

export default App;
