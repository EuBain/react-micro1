import { useState } from "react";
import EditableCell from "./EditableCell";
import { Form, Popconfirm, Space, Table, TableColumnsType } from "antd";

interface ExpandedDataType {
  key: React.Key;
  number: string;
  offline: string;
  Meituan: string;
  Ctrip: string;
}

type ColumnsType = {
  title: string;
  dataIndex?: string;
  key: string;
  render?: (text: string, record: any, index: any) => any;
  editable?: boolean;
}[];

const EditTable = ({
  dataSource,
  recordCount,
  pagination,
  setData,
  rowKey,
}) => {
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState("");
  const isEditing = (record: Item) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({ ...record });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key: React.Key) => {
    try {
      const row = await form.validateFields();

      const record = { ...recordCount };
      const newData = [...dataSource];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
          saved: true,
        });
        record.expanded = newData;
        // console.log({ dataSource, record });
      } else {
        newData.push(row);
      }
      setData((data) => {
        const _data = [...data];
        const index = _data.findIndex(
          (item) => record.roomNumber === item.roomNumber
        );
        const item = _data[index];
        _data.splice(index, 1, { ...item, ...record });
        console.log(_data, data);
        return _data;
      });
      setEditingKey("");
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const expandedDataColumns: ColumnsType = [
    { title: "次数", dataIndex: "number", key: "number" },
    {
      title: "线下",
      dataIndex: "offline",
      key: "offline",
      render: (text) => {
        const res = Number(text);
        return res > 0 ? res.toFixed(2) : "-";
      },
      editable: true,
    },
    {
      title: "美团",
      dataIndex: "Meituan",
      key: "Meituan",
      render: (text) => {
        const res = Number(text);
        return res > 0 ? res.toFixed(2) : "-";
      },
      editable: true,
    },
    {
      title: "携程",
      key: "Ctrip",
      dataIndex: "Ctrip",
      render: (text) => {
        const res = Number(text);
        return res > 0 ? res.toFixed(2) : "-";
      },
      editable: true,
    },
    {
      title: "押金",
      dataIndex: "guaranteeDeposit",
      key: "guaranteeDeposit",
      editable: true,
      render: (text) => (text > 0 ? text : "-"),
    },
    {
      title: "操作",
      dataIndex: "operation",
      key: "operation",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a onClick={() => save(record.key)} style={{ marginRight: 8 }}>
              保存
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>取消</a>
            </Popconfirm>
          </span>
        ) : (
          <Space size="middle">
            <a onClick={() => edit(record)}>编辑</a>
            {/* <Dropdown menu={{ items }}>
            <a>
              More
            </a>
          </Dropdown> */}
          </Space>
        );
      },
    },
  ];

  const mergedColumns = expandedDataColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: Item) => ({
        record,
        inputType: col.dataIndex === "number",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
        form,
      }),
    };
  });
  // console.log(mergedColumns);
  return (
    <>
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={dataSource}
          columns={mergedColumns}
          // rowClassName="editable-row"
          pagination={pagination}
          rowKey={rowKey}
        />
      </Form>
    </>
  );
};

export default EditTable;
