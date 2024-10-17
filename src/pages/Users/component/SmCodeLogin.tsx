import UnocssIcon from "@/components/UnocssIcon";
import { Button, Form, Input } from "antd";
import SmCodeButton from "./SmCodeButton";


const SmCodeLogin = ({ form }) => {
  return (
    <>
      <Form.Item
        label="手机号码"
        name="phone"
        labelAlign="left"
        labelCol={{ span: 5 }}
        hasFeedback
        // rules={[{ required: true, message: "手机号码不能为空" }]}
      >
        <Input
          placeholder="请输入手机号码"
          prefix={<UnocssIcon icon="i-stream-clown-face" />}
          allowClear
        />
      </Form.Item>
      <Form.Item
        label="验证码"
        name="smcode"
        labelAlign="left"
        labelCol={{ span: 5 }}
      >
        <Input
          placeholder="请输入验证码"
          allowClear
          prefix={<UnocssIcon icon="i-stream-credit-card" />}
          addonAfter={<SmCodeButton form={form} />}
        />
      </Form.Item>
      {/* {form.getFieldsValue()} */}
    </>
  );
};

export default SmCodeLogin;
