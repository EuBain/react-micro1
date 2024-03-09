export const account = {
  model: "账目管理",
  modelConfig: [
    {
      groupName: "",
      route: [
        {
          name: "账目管理",
          path: "account",
          element: "Account",
          keepalive: true,
        },
      ],
    },
  ],
};

export const accountRoute = account.modelConfig
  .map((item) => item.route)
  .flat();
