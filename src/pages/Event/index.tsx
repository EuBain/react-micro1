import { useEffect, useRef, useState } from "react"

 const Index = () => {
    const [num,setNum] = useState(1)
    const refObj = useRef(null)
    useEffect(()=>{
        const handler = ()=>{
            console.log('事件监听')
        }
        refObj.current.addEventListener('click',handler)
        return () => {
            if(refObj.current) { refObj.current.removeEventListener('click',handler)}
        }
    },[])
    const handleClick = ()=>{
        setNum(num => num + 1)
       console.log('冒泡阶段执行')
    }
    const handleCaptureClick = ()=>{
       console.log('捕获阶段执行')
    }
    return  (
        <>
        <div>{num}</div>
        <button ref={refObj} onClick={handleClick} onClickCapture={handleCaptureClick} >点击</button>

        </>
    )
}

export default Index