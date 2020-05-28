import React, { useState } from 'react';
import { Link, Router } from '@reach/router';
import { Layout, Menu, Breadcrumb, Divider, Avatar } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import logo from '@app/common/assets/Yantraksh Logo.png';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function ScreenWrapper({ children, routes }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [collapsedWidth, setCollapsedWidth] = useState(80);
  return (
    <Layout className=''>
      <Header
        className='header row align-center justify-between'
        style={{ backgroundColor: '#fff', paddingLeft: 20, paddingRight: 20 }}>
        <div className='bg-white m-0 row align-center'>
          <img style={{ width: 120, height: 30, marginRight: 10 }} alt='Yantraksh' src={logo} />
          {isCollapsed ? (
            <MenuUnfoldOutlined
              onClick={() => {
                setIsCollapsed(false);
                setCollapsedWidth(80);
              }}
              style={{ color: 'rgba(0,0,0,.65)', fontSize: 30 }}
            />
          ) : (
            <MenuFoldOutlined
              onClick={() => {
                setCollapsedWidth(0);
                setIsCollapsed(true);
              }}
              style={{ color: 'rgba(0,0,0,.65)', fontSize: 30 }}
            />
          )}
        </div>
        <div className='row align-center'>
          <p className='m-2'>Demo_shipper</p>
          <Avatar size='large' icon={<UserOutlined />} />
        </div>
      </Header>
      <Divider style={{ margin: 0, padding: 0 }} />
      <Layout>
        <Sider
          trigger={null}
          collapsible
          width={200}
          collapsed={isCollapsed}
          collapsedWidth={collapsedWidth}
          onCollapse={() => {
            setCollapsedWidth(80);
            setIsCollapsed(!isCollapsed);
          }}
          className='site-layout-background'>
          <Menu
            mode='inline'
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}>
            {routes.map((i) => {
              if (i.subMenu) {
                return (
                  <SubMenu key={i.name} icon={i.icon} title={i.name}>
                    {i.subMenu.map((subItem) => (
                      <Menu.Item key={subItem.name}>
                        <Link to={subItem.path} key={subItem.name}>
                          {subItem.name}
                        </Link>
                      </Menu.Item>
                    ))}
                  </SubMenu>
                );
              }
              return (
                <Menu.Item key={i.name} icon={i.icon}>
                  <Link to={i.path} key={i.name}>
                    {i.name}
                  </Link>
                </Menu.Item>
              );
            })}
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className='site-layout-background'
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}>
            <Router>
              {routes.map((i) => {
                return i.subMenu
                  ? i.subMenu.map((subI, ind) => (
                    <subI.component path={subI.path} key={ind.toString()} />
                  ))
                  : null;
              })}
              {routes.map((i, index) => {
                return <i.component path={i.path} key={index.toString()} />;
              })}
              {/* {children} */}
            </Router>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
export default ScreenWrapper;
