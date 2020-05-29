import React, { useEffect, useState } from 'react';
import { Form, Button, notification, Modal, Input } from 'antd';
import { useDispatch } from 'react-redux';

import * as jwtDecode from 'jwt-decode';
import { reactLocalStorage } from 'reactjs-localstorage';

import { Icon } from '@ant-design/compatible';
import { loadAPI } from '@app/common/helpers/api';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import { ACCESS_TOKEN, REFRESH_TOKEN } from '@app/common/constants/storage';
import { userAuthenticated } from '@app/common/actions/auth';
import { formItemCreate } from '../helpers/formItemCreate';
import { FORM_ELEMENT_TYPES } from '../constants/formFields.constant';

const { confirm } = Modal;

function VerifyUserModal({ username, password, signIn, close }) {
  const [otp, setOTP] = useState(0);

  const handleVerification = async (c) => {
    const { error } = await loadAPI('/verifyOTP/', {
      method: 'POST',
      data: { username, otp },
      secure: false,
    });
    if (error)
      notification.error({
        message: `Cant verify user: ${username}`,
        description: error.toString(),
      });
    else {
      await signIn({ username, password });
      c();
      close();
    }
  };

  useEffect(() => {
    confirm({
      title: 'Your account is not verified',
      icon: <ExclamationCircleOutlined />,
      okText: 'Verify',
      onOk: handleVerification,
      onCancel: close,
      content: (
        <div>
          Enter verification OTP you received in mail
          <Input
            prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder='6 digit OTP'
            onChange={(e) => setOTP(e.target.value)}
            type='number'
            onPressEnter={handleVerification}
          />
        </div>
      ),
    });
  }, [username]);

  return null;
}

function SignInComponent() {
  const [verify, setVerify] = useState({ open: false, username: '', password: '' });
  const dispatch = useDispatch();

  const handelSignIn = async ({ username, password }) => {
    try {
      const { data: tokens } = await loadAPI('/auth/token/', {
        method: 'POST',
        data: { username, password },
      });

      const accessToken = tokens.access_token;
      reactLocalStorage.setObject(ACCESS_TOKEN, accessToken);
      reactLocalStorage.setObject(REFRESH_TOKEN, tokens.refresh_token);

      const { type, name } = jwtDecode(accessToken);
      dispatch(userAuthenticated({ name, type }));
    } catch (e) {
      notification.error({ message: `Can't SignIn user: ${username}`, description: e.toString() });
    }
  };

  // eslint-disable-next-line consistent-return
  const handleSubmit = async ({ username, password }) => {
    const { data: verified, error } = await loadAPI('/user/meta/', {
      params: { username },
      secure: false,
    });
    if (error) notification.error({ message: `Error with user: ${username}`, description: error });
    else if (verified.verified) handelSignIn({ username, password });
    else setVerify({ open: true, username, password });
  };

  return (
    <div className='sign-in-form'>
      <div className='sign-heading-container'>
        <h1>Login</h1>
        <p>Sign in to your account</p>
      </div>
      {verify.open ? (
        <VerifyUserModal
          username={verify.username}
          password={verify.password}
          signIn={handelSignIn}
          close={() => setVerify({ open: false, username: '', password: '' })}
        />
      ) : null}
      <Form onFinish={handleSubmit} layout='vertical' hideRequiredMark>
        {formItemCreate(
          'username',
          [{ required: true, message: 'Please input your username!' }],
          {
            prefix: <Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />,
            placeholder: 'Username',
          },
          FORM_ELEMENT_TYPES.INPUT,
        )}
        {formItemCreate(
          'password',
          [{ required: true, message: 'Please input your password!' }],
          {
            prefix: <Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />,
            placeholder: 'Password',
            type: 'password',
          },
          FORM_ELEMENT_TYPES.INPUT,
        )}
        <Form.Item>
          <Button type='primary' htmlType='submit' className='login-form-button'>
            Sign in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default SignInComponent;
