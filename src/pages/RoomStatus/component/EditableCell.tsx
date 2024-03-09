import { Form, Input, InputNumber } from "antd";
const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  form,
  ...restProps
}) => {
  const inputNode =
    inputType === "number" ? (
      <InputNumber />
    ) : (
      <Input
        onBlur={(e) => {
          let value = e.currentTarget.value;
          value = Number(value).toFixed(2);
          form.setFieldValue(dataIndex, value);
        }}
      />
    );

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
          getValueFromEvent={(event) => {
            return (
              event.currentTarget.value
                // .replace(/(\.\d{2})\w+/g, "$1")
                // 控制最大五位数输入
                .replace(/(^\w{5})(\d|\D)+/g, "$1")
                // 空格|数字及.以外的字符
                .replace(/(\s)|[^(\d|\.)]/g, "")
                // 连续小数点
                .replace(/^(\d+\.)\.*/, "$1")
                // 多个小数点
                .replace(/^(\d+\.\d+)\.*/, "$1")
            );
            // .trim();
          }}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

export default EditableCell;
