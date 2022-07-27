import React from 'react';
import 'antd/dist/antd.css';
// import './index.css';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, message, Space } from 'antd';


const handleButtonClick = (e) => {
  message.info('Click on left button.');
  console.log('click left button', e);
};

const handleMenuClick = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};

const menu = (
  <Menu
    onClick={handleMenuClick}
    items={[
      {
        label: '1st menu item',
        key: '1',
        icon: <UserOutlined />,
      },
      {
        label: '2nd menu item',
        key: '2',
        icon: <UserOutlined />,
      },
      {
        label: '3rd menu item',
        key: '3',
        icon: <UserOutlined />,
      },
    ]}
  />
);

const DropDown = (props) => (
  <Space wrap>
    
    <Dropdown overlay={menu}>
      <Button>
        <Space>
          <div><p>{props.dname}</p></div>
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  </Space>
);

export default DropDown;