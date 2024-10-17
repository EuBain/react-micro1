import { Spin } from "antd";
import "./index.scss";


const Loading = () => {
  return (
    <div className="spin">
      <div className="loading">
        <Spin size="large" />
      </div>
    </div>
  );
};

export default Loading;
