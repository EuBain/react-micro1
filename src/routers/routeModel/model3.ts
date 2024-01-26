

export const model3 = {
  model: '事件',
  modelConfig: [
    {
      groupName:'',
      route:[
        {
          name: '事件',
          path: 'index',
          element: 'Index',
          keepalive: true,
        }
      ]
    }
  ]
}

export const model3Route = model3.modelConfig.map((item) => item.route).flat()