export const roomstatus = {
  model: "房态管理",
  modelConfig: [
    {
      groupName: "",
      route: [
        {
          name: "房态管理",
          path: "roomstatus",
          element: "RoomStatus",
          keepalive: true,
        },
      ],
    },
  ],
};

export const roomstatusRoute = roomstatus.modelConfig
  .map((item) => item.route)
  .flat();
