import { keepalive as list } from "@/routers";
import { createContext, useMemo } from "react";
import { useRef, useState } from "react";

export const usePageTabs = () => {
  const [keepElement, setKeepElement] = useState<Record<string, any>>({'/home':null});
  const [keepalive, setKeepalive] = useState<Record<string, string>>(list);

  const addElement = (path: string, element: any) => {
    // 已经保存的element或者不在保活列表中的不保存
    if (keepElement[path] || !Object.keys(keepalive).includes(path)) return;
    // console.log('router更新')
    setKeepElement((l) => {
      return Object.assign({}, l, { [path]: element });
    });
  };

  const removeElement = (key: string) => {
    const element = Object.keys(keepElement);
    const targetIndex = element.findIndex((item) => item === key);
    let path;
    // 修改需要保存的tabs元素
    setKeepElement((l) => {
      delete l[key];
      const newPanes = Object.keys(l);
      path =
        newPanes[
          targetIndex === newPanes.length ? targetIndex - 1 : targetIndex
        ];
      return Object.assign({}, l);
    });
    return path;
  };

  return useMemo(() => {
    return {
      addElement,
      removeElement,
      keepElement,
      keepalive,
      setKeepalive,
    };
  }, [keepElement, keepalive]);

  // return{
  //     keepElement,
  //     addElement,
  //     keepalive,
  //     setKeepalive
  //     }
};

type PageTabType = ReturnType<typeof usePageTabs> | Record<string, any>;

const ContextPageTab = createContext<PageTabType>({});
export default ContextPageTab;
