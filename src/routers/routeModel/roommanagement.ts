export const roommanagement = {
  model: "房型管理",
  modelConfig: [
    {
      groupName: "",
      route: [
        {
          name: "房型管理",
          path: "roommanagement",
          element: "RoomManagement",
          keepalive: true,
        },
      ],
    },
  ],
};

export const roommanagementRoute = roommanagement.modelConfig
  .map((item) => item.route)
  .flat();
