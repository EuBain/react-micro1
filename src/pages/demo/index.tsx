import React, { useContext, useState, useEffect, useRef } from "react";
import { Context } from "@/main";
import "./index.scss";
import { GET, POST } from "@/services/request";
import DragBox from "@/components/Drog";

const Demo = () => {
  // const [toggle, setToggle] = useState("light");
  // const inpRef = useRef();
  // const changeToggle = () => {
  //   if (toggle === "light") {
  //     setToggle("dark");
  //   } else {
  //     setToggle("light");
  //   }
  // };
  // const changeInput = (e) => {
  //   console.log(e.target.value);
  // };
  // const [inp, setInp] = useState(111);

  // const search = () => {
  //   window.location.href=`https://www.google.com/search?q=${inpRef.current.value}`
  // }
  // useEffect(() => {
  //   console.log("视图更新");
  // });

  return (
    // <div className="demo" toggle-data={toggle}>
    //   <input autoFocus={true} type="text" ref={inpRef} onChange={changeInput} />
    //   <div className="ddd"suppressContentEditableWarning contentEditable="true">
    //     ssdas
    //   </div>
    //   <button onClick={search}>搜索</button>
    //   <button onClick={changeToggle}>点击更新State</button>
    //   <input type="file" accept=".pdf" />
    // </div>
    <div >
      <DragBox></DragBox>
    </div>
  );
};

export default Demo;
