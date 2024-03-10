import { API } from "@/services/api";
import { RoomTable } from "../component/RoomTable";
import _ from "lodash";
import { useEffect, useState } from "react";

export const RoomStatusDetail = ({ type }) => {
  const [roomList, setRoomList] = useState([]);
  const data1 = [
    {
      type: 1,
      roomType: 1,
      roomNumber: "111",
      offline: "1.",
      Meituan: "2.00",
      Ctrip: "3.00",
      guaranteeDeposit: "100.00",
      number: 1,
      key: 1,
      saved: true,
    },
    {
      type: 1,
      roomType: 1,
      roomNumber: "111",
      offline: "1.0",
      Meituan: "2.20",
      Ctrip: "3.00",
      guaranteeDeposit: "100.00",
      number: 2,
      key: 2,
      saved: true,
    },
    {
      type: 1,
      roomType: 2,
      roomNumber: "211",
      offline: "1.00",
      Meituan: "2.00",
      Ctrip: "3.00",
      guaranteeDeposit: "100.00",
      number: 1,
      key: 1,
      saved: true,
    },
  ];

  const getRoomList = async (data) => {
    const res = await API.roomStatusService.getRoomStatusRoomType(data);
    setRoomList(res)
  };

  useEffect(() => {
    getRoomList(type);
  }, []);

  const TYPE = [1, 2];

  // const roomList = [
  //   {
  //     roomType: 1,
  //     roomNumber: ["110", "111"],
  //   },
  //   {
  //     roomType: 2,
  //     roomNumber: ["210", "211"],
  //   },
  //   {
  //     roomType: 3,
  //     roomNumber: ["310", "311"],
  //   },
  // ];

  const handleData = (data) => {
    return roomList.map((item) => {
      return {
        roomType: item.roomType,
        data: item.roomList.map((l, m) => {
          const roomlist = data.filter((j) => j.roomNumber === l);
          if (roomlist.length >= 1) {
            return {
              key: m,
              roomNumber: l,
              // offline: '',
              // Meituan: '',
              // Ctrip: '',
              expanded: roomlist,
              number: 1,
            };
          } else {
            return {
              roomType: item.roomType,
              roomNumber: l,
              // offline: "0",
              // Meituan: "0",
              // Ctrip: "0",
              // guaranteeDeposit: "0",
              number: 1,
              expanded: null,
              key: m,
            };
          }
        }),
      };
    });
  };
  const data = handleData(data1);

  return (
    <>
      <div>
        {data.map((i, index) => (
          <RoomTable {...i} key={index}></RoomTable>
        ))}
      </div>
    </>
  );
};
