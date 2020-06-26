import React, { useState } from 'react';
import { Form, Button, notification } from 'antd';
import { useDispatch } from 'react-redux';

import { Icon } from '@ant-design/compatible';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@app/common/constants/storage';
import { getUserMeta } from '@app/common/helpers/auth';

import { formItem } from 'hocs/formItem.hoc';
import { FORM_ELEMENT_TYPES } from 'constants/formFields.constant';

import { VerifyUserModal } from 'components/VerifyUserModal';

import { getJWTTokens, isUserVerified } from '@app/common/api/auth';

export const SignInCard = () => {
  const [verify, setVerify] = useState({ open: false, username: '', password: '' });
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handelSignIn = async ({ username, password }) => {
    try {
      setLoading(true);
      const { data: tokens } = await getJWTTokens({ username, password });

      const { access, refresh } = tokens;
      await window.storage.set(ACCESS_TOKEN, access);
      await window.storage.set(REFRESH_TOKEN, refresh);

      await getUserMeta(dispatch);
    } catch (e) {
      notification.error({ message: `Can't SignIn user: ${username}`, description: e.toString() });
    }

    setLoading(false);
  };

  // eslint-disable-next-line consistent-return
  const handleSubmit = async ({ username, password }) => {
    const { data: verified, error } = await isUserVerified({ username });

    if (error)
      notification.error({
        message: `Error with user: ${username}`,
        description: error.toString(),
      });
    else if (verified.verified) await handelSignIn({ username, password });
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
        {formItem(
          'username',
          [{ required: true, message: 'Please input your username!' }],
          {
            prefix: <Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />,
            placeholder: 'Username',
          },
          FORM_ELEMENT_TYPES.INPUT,
        )}
        {formItem(
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
          <Button type='primary' htmlType='submit' className='login-form-button' loading={loading}>
            Sign in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
