import { Button, Space } from "antd";

const RoomManagement = () => {
  return (
    <>
      <div className="wrap">
        <div className="title">房型管理</div>
        <Space size={"middle"}>
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="link">Link</Button>
        </Space>
      </div>
      
    </>
  );
};

export default RoomManagement;
