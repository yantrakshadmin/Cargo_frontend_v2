import React, { useState } from 'react';
import { Form, Button, notification, Modal, Input, Typography } from 'antd';
import { useDispatch } from 'react-redux';

import { Icon } from '@ant-design/compatible';
import { loadAPI } from '@app/common/helpers/api';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import { ACCESS_TOKEN, REFRESH_TOKEN } from '@app/common/constants/storage';
import { getUserMeta } from '@app/common/helpers/auth';
import { formItemCreate } from '../helpers/formItemCreate';
import { FORM_ELEMENT_TYPES } from '../constants/formFields.constant';

const { Title } = Typography;

function VerifyUserModal({ username, password, signIn, close, open }) {
  const [otp, setOTP] = useState('');

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
      close();
    }
  };

  return (
    <Modal onOk={handleVerification} onCancel={close} visible={open} okText='Verify my account'>
      <Title level={4}>
        <ExclamationCircleOutlined style={{ color: '#FFB108' }} />
        {' '}
        Your account is not verified yet
      </Title>
      <div>
        Enter verification OTP you received in mail
        <Input
          value={otp}
          prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder='6 digit OTP'
          onChange={(e) => setOTP(e.target.value)}
          type='number'
          onPressEnter={handleVerification}
        />
      </div>
    </Modal>
  );
}

function SignInComponent() {
  const [verify, setVerify] = useState({ open: false, username: '', password: '' });
  const dispatch = useDispatch();

  const handelSignIn = async ({ username, password }) => {
    try {
      const { data: tokens } = await loadAPI('/api/token/', {
        method: 'POST',
        data: { username, password },
        secure: false,
      });

      const { access, refresh } = tokens;
      await window.storage.set(ACCESS_TOKEN, access);
      await window.storage.set(REFRESH_TOKEN, refresh);

      await getUserMeta(dispatch);
    } catch (e) {
      notification.error({ message: `Can't SignIn user: ${username}`, description: e.toString() });
    }
  };

  // eslint-disable-next-line consistent-return
  const handleSubmit = async ({ username, password }) => {
    const { data: verified, error } = await loadAPI('/verification/', {
      params: { username },
      secure: false,
    });
    if (error)
      notification.error({ message: `Error with user: ${username}`, description: error.toString() });
    else if (verified.verified) handelSignIn({ username, password });
    else setVerify({ open: true, username, password });
  };

  return (
    <div className='sign-in-form'>
      <div className='sign-heading-container'>
        <h1>Login</h1>
        <p>Sign in to your account</p>
      </div>
      <VerifyUserModal
        {...verify}
        signIn={handelSignIn}
        close={() => setVerify({ open: false, username: '', password: '' })}
      />

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
