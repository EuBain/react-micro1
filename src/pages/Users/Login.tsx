// react
import { useEffect, useState } from "react";
// 组件库
import { Form, Row, Button, Col } from "antd";

import UnocssIcon from "@components/UnocssIcon";
import IconMap from "@components/AntdIcon";
import AccountLogin from "./component/AccountLogin";
import SmCodeLogin from "./component/SmCodeLogin";

// 工具库
import { useLocalStorageState } from "ahooks";
// 类型导入

// 样式文件
import "./Login.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form] = Form.useForm();
  const [type, setType] = useState(true);

  const [token, setToken] = useLocalStorageState("token");
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (token) {
  //     navigate("/home");
  //   }
  // }, []);
  const onSubmitUserInfo = (data: any) => {
    console.log(data);
  };

  const onChangeType = () => {
    setType((type) => !type);
  };

  const onLogin = () => {
    setToken("1234");
    navigate("/home");
  };

  const ComponentSeletor = (props: any) =>
    type ? <AccountLogin {...props} /> : <SmCodeLogin {...props} />;

  return (
    <>
      <div className="form">
        <div className="logo">
          <UnocssIcon
            icon={"i-stream-beaming-face-with-smiling-eyes"}
            style={{ height: "42px", width: "42px", marginRight: "8px" }}
          />
          <div className="title">
            <span>酒店管理系统</span>
          </div>
        </div>
        <Form name="login" form={form} onFinish={onSubmitUserInfo}>
          {ComponentSeletor({ form })}
          <Row>
            <Button type="primary" block={true} onClick={onLogin}>
              登陆
            </Button>
          </Row>
          <Row>
            <Col span={6}>忘记密码?</Col>
            <Col span={18} className="align-right" onClick={onChangeType}>
              {type ? "使用手机号验证码登陆" : "使用账户名密码登陆"}
              {IconMap.rowRight}
              <div></div>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default Login;
