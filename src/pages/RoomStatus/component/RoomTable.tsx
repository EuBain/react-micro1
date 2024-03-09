import { useEffect, useState } from "react";
import { useReactive } from "ahooks";
import {
  Badge,
  Button,
  Divider,
  Dropdown,
  Space,
  Table,
  TableColumnsType,
  Tag,
} from "antd";
import ExpandedTable from "./ExpandedTable";
import { text } from "stream/consumers";
import EditTable from "./EditTable";

interface DataType {
  key: React.Key;
  roomNumber: string;
  offline: string;
  Meituan: string;
  Ctrip: string;
  expanded: any;
}
// interface ExpandedDataType {
//   key: React.Key;
//   number: string;
//   offline: string;
//   Meituan: string;
//   Ctrip: string;
// }

const RoomType: Record<number, string> = {
  1: "单人间",
  2: "双人间",
  3: "三人间",
};
export const RoomTable = ({
  roomType,
  data,
}: {
  roomType: number;
  data: any;
}) => {
  const [_data, setData] = useState(data);
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);
  useEffect(() => {
    // console.log("sss");
  }, [_data]);

  const onExpand = (record, event) => {
    setExpandedRowKeys((keys) => {
      const index = keys.findIndex((item) => event.key === item);
      if (index === -1) {
        return [...keys, event.key];
      } else {
        const res = [...keys];
        res.splice(index, 1);
        return res;
      }
    });
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: "房号",
      dataIndex: "roomNumber",
      key: "roomNumber",
    },
    {
      title: "线下",
      dataIndex: "offline",
      key: "offline",
      render: (_, record) => {
        if (record.expanded) {
          return record.expanded
            ?.reduce((pre, cur) => {
              return Number(cur.offline) + pre;
            }, 0)
            .toFixed(2);
        }
        return "-";
      },
    },
    {
      title: "美团",
      dataIndex: "Meituan",
      key: "Meituan",
      render: (_, record) => {
        if (record.expanded) {
          return record.expanded
            ?.reduce((pre, cur) => {
              return Number(cur.Meituan) + pre;
            }, 0)
            .toFixed(2);
        }
        return "-";
      },
    },
    {
      title: "携程",
      key: "Ctrip",
      dataIndex: "Ctrip",
      render: (_, record) => {
        if (record.expanded) {
          return record.expanded
            ?.reduce((pre, cur) => {
              return Number(cur.Ctrip) + pre;
            }, 0)
            .toFixed(2);
        }
        return "-";
      },
    },
    {
      title: "操作",
      key: "action",
      render: (_, record, index) => {
        const flag = record.expanded
          ? record.expanded.slice(-1)[0].saved
          : true;
        // console.log({ record, flag });
        return (
          <Space size="middle">
            <Button
              disabled={!flag}
              onClick={() => {
                // console.log(record);
                const newData = _data.find(
                  (item) => item.roomNumber === record.roomNumber
                );
                if (!newData.expanded) {
                  newData.expanded = [
                    {
                      type: 1,
                      roomType: 1,
                      roomNumber: record.roomNumber,
                      offline: "0.00",
                      Meituan: "0.00",
                      Ctrip: "0.00",
                      guaranteeDeposit: "0.00",
                      number: 1,
                      key: 1,
                      saved: false,
                    },
                  ];
                } else {
                  newData.expanded.push({
                    type: 1,
                    roomType: 1,
                    roomNumber: record.roomNumber,
                    offline: "0.00",
                    Meituan: "0.00",
                    Ctrip: "0.00",
                    guaranteeDeposit: "0.00",
                    number: record.expanded?.length + 1,
                    key: record.expanded?.length + 1,
                    saved: false,
                  });
                }
                setData((pre) => {
                  const res = pre.slice();
                  res.splice(
                    pre.findIndex(
                      (item) => item.roomNumber === newData.roomNumber
                    ),
                    1,
                    newData
                  );
                  return res;
                });
                setExpandedRowKeys((keys) => {
                  const index = keys.findIndex((item) => record.key === item);
                  if (index === -1) {
                    return [...keys, record.key];
                  } else {
                    return keys;
                  }
                });
              }}
            >
              添加
            </Button>
          </Space>
        );
      },
    },
  ];

  const expandedRowRender = (record) => {
    const dataSource: any[] = [];
    record.expanded.forEach((item, index) => {
      dataSource.push(item);
    });
    return (
      // <Table
      <EditTable
        setData={setData}
        recordCount={record}
        // mergedColumns={expandedDataColumns}
        dataSource={dataSource}
        pagination={false}
        rowKey="number"
      />
    );
  };
  return (
    <>
      <Divider orientation="left" plain>
        {RoomType[roomType]}
      </Divider>
      <Table
        columns={columns}
        dataSource={_data}
        pagination={false}
        expandable={{
          expandedRowRender,
          rowExpandable: (record) => {
            return record.expanded?.length >= 1;
          },
          defaultExpandedRowKeys: ["0"],
          expandedRowKeys,
          onExpand,
        }}
      />
    </>
  );
};
