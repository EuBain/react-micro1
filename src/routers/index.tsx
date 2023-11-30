/* eslint-disable */
import { HomeRoutes } from './Home'
import { Navigate } from "react-router-dom"
import { component } from './routesMap'
import { LazyExoticComponent } from 'react'

export interface RoutesType {
    name: string,
    path: string,
    element?: string,
    children?: RoutesType[],
    redirect?: string,
    keepalive?: boolean,
}

export function handlerRoutes (routes:RoutesType[]):any {
    const route = routes.map((index:RoutesType) => {
        let Components
        if(index.element){
            Components = component[index.element]as LazyExoticComponent<() => JSX.Element>
        }
        return {
            name: index.name,
            path: index.path.replace(/\/{2,}/, '/'),
            element: index.redirect ? <Navigate to={`/${index.redirect}`} replace={true} /> 
                                    : Components ? <Components />
                                                 : null,
            children: index.children ? handlerRoutes(index.children) : null,
        }
    })
    return route;
}

export function flatRoutes (routes: RoutesType[]) {
    const object: Record<string, string> = {}
    flatChildrenRoutes(routes)
    function flatChildrenRoutes (routes:RoutesType[], parentPath?: string) {
        routes.forEach((l:RoutesType) => {
            const thisPath = l.redirect ? l.redirect : l.path
            const path = ((parentPath|| '' )+ thisPath).replace(/\/{2,}/, '/')
            if (l.keepalive) {
                // console.log(path)
                object[path] = l.name
            } 
            if ( l.children) {
                flatChildrenRoutes(l.children, path)
            }  
        })
    }
    return object
}

const route = [
    ...HomeRoutes,
    // ...DemoRoutes,
]

export const routes = handlerRoutes(route)
// export const routes = [
//      ...ErrorPageRoutes,
// ]

export const keepalive = flatRoutes(route)
// console.log({keepalive})
