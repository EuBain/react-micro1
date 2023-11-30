import { Menu, MenuProps } from "antd"
import { Header } from "antd/es/layout/layout"
import { useEffect, useState } from "react";


const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));


const MyHeader = () => {
  const [current, setCurrent] = useState('mail');

  useEffect(()=> {
    console.log('头部栏重新渲染')
  })
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
    return (
      <>
        <Header style={{ display: 'flex', alignItems: 'center',padding:0}}>
          <div className="demo-logo" />
          <Menu style={{flex:1}} onClick={onClick} theme="light"selectedKeys={[current]} mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
        </Header>
      </>
    )
}

export default MyHeader;