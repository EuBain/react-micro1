// react
// import { useEffect, useRef, useState } from 'react';
// 组件库
// 工具库
import { useAppDispatch } from '@/utils/hooks';
import { changeWebTitle, changeWebTitleScrollStatus } from '@/redux/slice/stateSlice';
import { Link, Outlet, useHref, useLocation, useNavigate } from 'react-router-dom';

import MyLayout from '../Layout';
import { useEffect } from 'react';
import { Spin } from 'antd';

// 类型导入

// 样式文件



const Home = () => {
  // const dispatch = useAppDispatch()



  // const location = useLocation()
  // console.log('location',location,'navigation')
  // const navigate = useNavigate();
  
  return (
    <>
   <div onClick={()=> window.$wujie?.props?.jump('ReactMicro2','home')}> 1111</div>
   {/* <Spin tip="Loading" size="large" style={{position:'a', bottom:'0'}} >
                            <div className="content" />
                        </Spin> */}
    {/* <MyLayout>
    </MyLayout> */}
    </>
  )
}

export default Home

