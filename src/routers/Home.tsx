import { RoutesType } from "."
import { model1Route } from "./routeModel/model1"
import { model2Route } from "./routeModel/model2"
import { model3Route } from "./routeModel/model3"
export const HomeRoutes: RoutesType[] =[
    {
        name: '主页1',
        path: '/',
        element:  'MyLayout',
        children: [ 
            {
                name: '主页2',
                path: '/',
                // 路由重定向会导致渲染两次
                redirect: 'home',    
                // element:  'Home',
                // keepalive: true,
            },
            ...model1Route,
            ...model2Route,
            ...model3Route,
        ]
    },
]



