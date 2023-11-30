import { lazy } from "react"
// import Demo from '@/pages/demo'
const Demo = lazy(() => import('@/pages/demo'))
export const DemoRoutes = [{
    name: 'demo',
    path: '/demo',
    element:  < Demo />,
}]