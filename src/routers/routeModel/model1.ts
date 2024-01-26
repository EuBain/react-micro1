import { group } from "console"


export const model1 = {
  model: '主页',
  modelConfig: [
    {
      groupName:'',
      route:[
        {
          name: '主页',
          path: 'home',
          element:  'Home',
          keepalive: true,
        }
      ]
    }
  ]
}

export const model1Route = model1.modelConfig.map((item) => item.route).flat()