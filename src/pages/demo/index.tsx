import React, { useContext, useState } from "react";
import { Context } from "@/main";
// import './index.scss'
import "./index.scss";
import { GET, POST } from "@/services/request";
const aa = 1 || 3;
const Demo = () => {
  const element = useContext(Context);
  // console.log(element);
  const [num, setNum] = useState(1);
  let [array, setArray] = useState<any>([1]);
  // useState批量处理
  const add = () => {
    // setNum(num+1);
    // setNum(num+1);
    // setNum(num+1);
    // array.push(6)
    // setNum( num => num+1);
    // setNum( num => num+1);
    // setNum( num => num+1);
    // setArray(array => [num,...array]
    // .map(index => <div key={index}>index</div>)
    // );
    GET("/api/user/find", { name: 111, age: 222, wold: 333 });
  };
  const getId = () => {
    GET("/api/user/dde/");
  };
  const postId = () => {
    POST("/api/user/id", { name: 1222, ddd: 2 });
  };

  // &&赋值
  return (
    <div className="demo">
      <div key="1">{num}</div>
      {/* <BedServer></BedServer> */}
      <button onClick={add}>+</button>
      <button onClick={getId}>get id</button>
      <button onClick={postId}>post id</button>
      {/* { num && ()=> for(let c =0; c < num; c++) {
        }} */}
      {/* { array.map((index) => (
          <div key={index}>{index}</div>
        ))} */}
      {/* <div className={scss.box1}></div>
        <div className={scss.box2}></div> */}
      {/* <div className='box1'></div>
        <div className='box2'></div> */}
      <div className="border3">
        <div className="content">111111</div>
      </div>
    </div>
  );
};
export default Demo;
