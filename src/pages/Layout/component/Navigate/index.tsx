import ContextPageTab from "@/context/ContextPageTabs";
import { Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import React, { startTransition, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LayoutRoutes } from "@/routers/Layout";

interface Proptype {
  background: string;
}

const items2: MenuProps["items"] = LayoutRoutes[0].children?.map(
  (icon: any) => {
    if (icon.redirect) return;
    return {
      key: `/${icon.path}`,
      label: ` ${icon.name}`,
      children: icon.children?.map((_) => {
        if (_.redirect) return;
        const subKey = _.path;
        return {
          key: `/${subKey}`,
          label: `${_.name}`,
        };
      }),
    };
  }
);

// items2.push({
//       key: '/tayrsi/212',
//       label: `测试`,
//     }
//   )

const Navigate = React.memo((props: Proptype) => {
  const navigate = useNavigate();
  const location = useLocation();
  // let { keepElement, keepalive } = useContext(ContextPageTab);

  // useEffect(() => {
  //   // console.log(items2)
  //   // console.log(keepElement)
  //   console.log("侧边栏重新渲染了");
  // }, [keepElement]);

  const { background } = props;
  return (
    <>
      <Sider width={200} style={{ background }}>
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          // defaultOpenKeys={['/']}
          style={{ height: "100%", borderRight: 0 }}
          items={items2}
          // onClick={() => {}}
          onClick={({ key }) => {
            console.log(key);
            navigate(key);
          }}
        />
      </Sider>
    </>
  );
});

export default Navigate;
