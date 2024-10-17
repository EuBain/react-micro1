import UnocssIcon from "@/components/UnocssIcon";
import { Form, Input } from "antd";

const AccountLogin = () => {
  return (
    <>
      <Form.Item
        label="用户名"
        name="username"
        labelAlign="left"
        labelCol={{ span: 5 }}
      >
        <Input
          placeholder="请输入用户名"
          prefix={<UnocssIcon icon="i-stream-clown-face" />}
        ></Input>
      </Form.Item>
      <Form.Item
        label="密码"
        name="password"
        labelAlign="left"
        labelCol={{ span: 5 }}
      >
        <Input
          placeholder="请输入密码"
          prefix={<UnocssIcon icon="i-stream-credit-card" />}
        ></Input>
      </Form.Item>
    </>
  );
};

export default AccountLogin;
