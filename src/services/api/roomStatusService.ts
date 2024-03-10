import { GET } from "../request/request";

export const roomStatusService = {
  getRoomStatusType: () => GET("/api/roommanagement/roomtype"),

  getRoomStatusRoomType: (data: number) =>
    GET("/api/roommanagement/roomrtype", { type: data }),
};
