// import { changeKeepElement } from "@/redux/slice/pageTabSlice";
// import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { Tabs } from "antd";
import {
  Suspense,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import { useLocation, useNavigate, useOutlet } from "react-router-dom";
// import { keepalive } from "@/routers";
import ContextPageTab from "@/context/ContextPageTabs";
// import { useLink } from "@/utils/hooks";
import { useBusOnChangePath } from "@/utils/hooks"
import { routeModel } from "@/routers/routeModel";

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
  const { keepElement, addElement, keepalive } = useContext(ContextPageTab);
  useLayoutEffect(() => {
    addElement(location.pathname, element);
  }, [location.pathname]);

  // const props = window.$wujie.props
  // console.log(location)
  useEffect(() => {
    // console.log(1,window.$wujie?.props?.addNavList)
    window.$wujie?.props?.addNavList?.(routeModel);
  },[window.$wujie?.props?.addNavList]);

  const [activeKey, setActiveKey] = useState(defaultPanes[0].key);
  const [items, setItems] = useState(defaultPanes);
  const newTabIndex = useRef(0);
  const onChange = (key: string) => {
    // setActiveKey(key);
    navigate(key);
  };
  const add = () => {
    const newActiveKey = `newTab${newTabIndex.current++}`;
    setItems([
      ...items,
      { label: "New Tab", children: "New Tab Pane", key: newActiveKey },
    ]);
    setActiveKey(newActiveKey);
  };

  const remove = (targetKey: TargetKey) => {
    const targetIndex = items.findIndex((pane) => pane.key === targetKey);
    const newPanes = items.filter((pane) => pane.key !== targetKey);
    if (newPanes.length && targetKey === activeKey) {
      const { key } =
        newPanes[
          targetIndex === newPanes.length ? targetIndex - 1 : targetIndex
        ];
      setActiveKey(key);
    }
    setItems(newPanes);
  };

  const onEdit = (targetKey: TargetKey, action: "add" | "remove") => {
    if (action === "add") {
      add();
    } else {
      remove(targetKey);
    }
  };
  useBusOnChangePath()
  return (
    <>
      <div hidden={!keepalive[location.pathname]}>
        {/* <Tabs
          hideAdd
          onChange={onChange}
          activeKey={location.pathname}
          type="editable-card"
          onEdit={onEdit}
          items={Object.entries(keepElement).map(([pathname, element]: any) => {
              return { 
                  label: `${keepalive[pathname]}`, 
                  // children: element, 
                  key: pathname 
              }
          })}
          > 
        </Tabs> */}
      </div>
      {Object.entries(keepElement).map(([pathname, element]: any) => (
        <div key={pathname} hidden={location.pathname !== pathname}>
          <Suspense fallback={<h2>🌀 Loading...</h2>}>{element}</Suspense>
        </div>
      ))}
      {!keepalive[location.pathname] && element}
    </>
  );
};

export default PageTabs;
