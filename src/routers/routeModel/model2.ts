

export const model2 = {
  model: 'demo',
  modelConfig: [
    {
      groupName:'',
      route:[
        {
          name: 'demo',
          path: 'demo1',
          element:  'Demo',
          keepalive: true,
        }
      ]
    }
  ]
}

export const model2Route = model2.modelConfig.map((item) => item.route).flat()