import { keepalive as list } from "@/routers";
import { createContext, useMemo } from "react";
import { useRef, useState } from "react";



export const usePageTabs = () =>  {
    const [keepElement, setKeepElement] = useState<Record<string, any>>({})
    const [keepalive, setKeepalive] = useState< Record<string, string>>(list)

    const addElement =(path:string,element:any) => {
        if(keepElement[path] || !Object.keys(keepalive).includes(path)) return
        // console.log('router更新')
        setKeepElement(l=>{
            return Object.assign({},l,{[path]:element})
        })
    }

    return useMemo(() => {
        return{
        addElement,
        keepElement,
        keepalive,
        setKeepalive
        }
    }, [keepElement, keepalive])

    // return{
    //     keepElement,
    //     addElement,
    //     keepalive,
    //     setKeepalive
    //     }
   
} 

type PageTabType = ReturnType<typeof usePageTabs> | Record<string, any>

const ContextPageTab = createContext<PageTabType>({})
export default ContextPageTab;