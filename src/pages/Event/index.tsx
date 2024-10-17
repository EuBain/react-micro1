import { Select } from "antd"
const { Option } = Select;
import { useEffect, useRef, useState } from "react"

const normalFn = () => {
  const [num1,setNum1] = useState(1)
  function handleChange1(value: any) {
    console.log(`selected ${value+num1}`);
    setNum1(num1+ 1)
  }
  return (
    <div>
      <Select style={{ width: 120 }} onChange={handleChange1}>
        <Option value="Jack111">Jack111</Option>
        <Option value="Lucy111">Lucy111</Option>
      </Select>
    </div>
  );
};


const Index = () => {
    const [num,setNum] = useState(1)
    const refObj = useRef<HTMLButtonElement>(null)
    useEffect(()=>{
        const handler = ()=>{
            console.log('事件监听')
        }
        if(refObj.current) {
            refObj.current.addEventListener('click',handler)
        }
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

    const [state, setstate] = useState(0);

  
    const FnComp = () => {
      function handleChange2(value: any) {
        console.log(`selected ${value}`);
      }
      return (
        <div>
          <Select style={{ width: 120 }} onChange={handleChange2}>
            <Option value="Jack222">Jack222</Option>
            <Option value="Lucy222">Lucy222</Option>
          </Select>
        </div>
      );
    };
  


    return  (
        <>
        <div>{num}</div>
        <button ref={refObj} onClick={handleClick} onClickCapture={handleCaptureClick} >点击</button>

        <div>
      {normalFn()}
      <FnComp />
      <button
        onClick={() => {
          setstate(state + 1);
        }}
      >
        add
      </button>
      <p>{state}</p>
    </div>

        </>
    )
}

export default Index