import { Tabs, TabsProps } from "antd";
import { RoomStatusDetail } from "./detail";
import "./index.scss";
import { useEffect, useState } from "react";
import { API } from "@/services/api";
const RoomStatus = () => {
  const [data, setData] = useState<any>([]);
  const onChange = (key: string) => {
    console.log(key);
  };

  const getRoomStatusType = async () => {
    const res = await API.roomStatusService.getRoomStatusType();
    setData(res);
  };

  useEffect(() => {
    getRoomStatusType();
  }, []);

  const items: TabsProps["items"] = data.map((item) => ({
    key: item.id,
    label: item.type,
    children: <RoomStatusDetail type={item.id} />,
  }));
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
