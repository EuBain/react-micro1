// react
// import { useEffect, useRef, useState } from 'react';
// 组件库
// 工具库

// 类型导入

// 样式文件
import "./index.scss";

const Home = () => {
  return (
    <>
      <div className="contain">
        <div className="head"></div>
        <div className="content">
          <div className="nav">
            <div className="navbox">
              <div style={{ height: 500, backgroundColor: "#dfe433" }}></div>
              <div style={{ height: 500, backgroundColor: "#d4233" }}></div>
              <div style={{ height: 500, backgroundColor: "#d45643" }}></div>
              <div style={{ height: 500, backgroundColor: "#dda333" }}></div>
            </div>
          </div>
          <div className="box">
            <div style={{ height: 1000, backgroundColor: "#ffe433" }}></div>
            <div style={{ height: 1000, backgroundColor: "#cc4233" }}></div>
            <div style={{ height: 1000, backgroundColor: "#af5643" }}></div>
            <div style={{ height: 1000, backgroundColor: "#aaa333" }}></div>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    </>
  );
};

export default Home;
