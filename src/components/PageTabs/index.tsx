import {
  Suspense,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useCallback,
} from "react";
// import { changeKeepElement } from "@/redux/slice/pageTabSlice";
// import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { Tabs,Button } from "antd";
import Loading from "@/components/Loading";

import { useLocation, useNavigate, useOutlet } from "react-router-dom";
// import { keepalive } from "@/routers";
import ContextPageTab from "@/context/ContextPageTabs";
// import { useLink } from "@/utils/hooks";
import { useBusOnChangePath } from "@/utils/hooks";

import "./index.scss";
import { relative } from "path";
type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

const defaultPanes = new Array(2).fill(null).map((_, index) => {
  const id = String(index + 1);
  return {
    label: `Tab ${id}`,
    children: `Content of Tab Pane ${index + 1}`,
    key: id,
  };
});

const PageTabs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const element = useOutlet();

  const { keepElement, addElement, keepalive, removeElement } =
    useContext(ContextPageTab);
  useEffect(() => {
    addElement(location.pathname, element);
  }, [location.pathname]);

  // useEffect(() => {
  //   console.log(window.$wujie?.props?.addNavList);

  // }, [window.$wujie?.props?.addNavList]);

  // const [activeKey, setActiveKey] = useState(defaultPanes[0].key);
  // const [items, setItems] = useState(defaultPanes);
  // const newTabIndex = useRef(0);

  const onChange = (key: string) => {
    // setActiveKey(key);
    navigate(key);
  };
  // const add = () => {
  //   const newActiveKey = `newTab${newTabIndex.current++}`;
  //   setItems([
  //     ...items,
  //     { label: "New Tab", children: "New Tab Pane", key: newActiveKey },
  //   ]);
  //   setActiveKey(newActiveKey);
  // };

  const remove = (targetKey: TargetKey) => {
    const path = removeElement(targetKey);
    if (targetKey === location.pathname) {
      navigate(path);
    }

    // const targetIndex = items.findIndex((pane) => pane.key === targetKey);
    // const newPanes = items.filter((pane) => pane.key !== targetKey);
    // if (newPanes.length && targetKey === activeKey) {
    //   const { key } =
    //     newPanes[
    //       targetIndex === newPanes.length ? targetIndex - 1 : targetIndex
    //     ];
    //   setActiveKey(key);
    // }
    // setItems(newPanes);
  };

  const onEdit = (targetKey: TargetKey, action: "add" | "remove") => {
    if (action === "add") {
      add();
    } else {
      remove(targetKey);
    }
  };

  return (
    <>
      <div hidden={!keepalive[location.pathname]} >
        {/* 非无界子项目模式，展示tab页 */}
        {!window.__POWERED_BY_WUJIE__ && (
          <Tabs
            hideAdd
            onChange={onChange}
            activeKey={location.pathname}
            type={
              Object.keys(keepElement).length > 1 ? "editable-card" : "card"
            }
            onEdit={onEdit}
            items={Object.entries(keepElement).map(
              ([pathname, element]: any) => {
                return {
                  label: `${keepalive[pathname]}`,
                  // children: element,
                  key: pathname,
                };
              }
            )}
          ></Tabs>
        )}
      </div>
      {Object.entries(keepElement).map(([pathname, element]: any) => (
        <div
          key={pathname}
          hidden={location.pathname !== pathname}
          className="pageTabBox"
        >
          <Suspense fallback={<Loading />}>{element}</Suspense>
        </div>
      ))}
      {!keepalive[location.pathname] && element}
    </>
  );
};

export default PageTabs;
