import { Tabs, TabsProps } from "antd";
import { RoomStatusDetail } from "./detail";
import "./index.scss";
const RoomStatus = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "电竞房",
      children: <RoomStatusDetail type={0}/>,
    },
    {
      key: "2",
      label: "普通房",
      children: <RoomStatusDetail type={1}/>,
    },
  ];
  return (
    <div className="wrap">
      <div className="title">房态管理</div>
      <div className="roomstatus-contain">
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          tabPosition="left"
        />
      </div>
      {/* <div style={{ height: 5000, backgroundColor: "red" }}></div> */}
    </div>
  );
};

export default RoomStatus;
