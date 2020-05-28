import React, { Component } from 'react';
import { Button, Typography } from 'antd';
import { ApartmentOutlined } from '@ant-design/icons';
import { Link } from '@reach/router';

import SignInComponent from '../../components/signInComponent';

const { Title } = Typography;

function SignInScreen() {
  return (
    <div className='App'>
      <div className='main-sign-in'>
        <div className='sign-in-left-container'>
          <SignInComponent />
        </div>
        <div className='sign-in-right-container'>
          <Title level={3} style={{ color: '#fff' }}>
            Sign Up
          </Title>
          <br />
          <br />
          <Link to='/sign-up-shipper/'>
            <Button type='default' htmlType='submit' icon={<ApartmentOutlined />}>
              Sign-Up as Shipper
            </Button>
          </Link>

          <br />
          <Link to='/sign-up-supplier/'>
            <Button type='default' htmlType='submit' icon={<ApartmentOutlined />}>
              Sign-Up as Supplier
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignInScreen;
