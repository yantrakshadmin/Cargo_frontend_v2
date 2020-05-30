import React, { useState, Suspense } from 'react';
import { Layout, Menu, Divider, Avatar } from 'antd';
import { Link } from '@reach/router';
import { UserOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import logo from '@app/common/assets/Yantraksh Logo.png';

import { Loading } from 'components/Loding';

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

export const ScreenWrapper = ({ children, routes }) => {
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
          <p className='m-2'>demo_shipper</p>
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
            theme='dark'
            mode='inline'
            defaultSelectedKeys={[routes[0].name]}
            defaultOpenKeys={[routes[0].name]}
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
        <Layout style={{ padding: '24px' }}>
          <Suspense fallback={Loading}>
            <Content
              className='site-layout-background content-style'
              style={{ minHeight: `calc( 100vh - 184px )` }}>
              {children}
            </Content>
          </Suspense>
        </Layout>
      </Layout>
      <Divider style={{ margin: 0, padding: 0 }} />
      <Footer className='row justify-end '>
        <span>
          <a target='_blank' rel='noopener noreferrer' href='https://yantraksh.com'>
            Yantraksh Logistics Pvt. Ltd
          </a>
          {' '}
          &copy; All rights reserved
        </span>
      </Footer>
    </Layout>
  );
};
