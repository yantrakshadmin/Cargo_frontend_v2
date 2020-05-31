import React from 'react';
import { Form, Button, notification } from 'antd';

import { formItem } from 'hocs/formItem.hoc';
import { shipperSignUpFormFields } from 'formFields/shipper.signUp.formFields';

import { createShipperAccount } from '@app/common/api';

export const ShipperSignUpScreen = ({ navigate }) => {
  const handleSubmit = async (data) => {
    const { password, confirmPassword } = data;
    if (password !== confirmPassword) {
      notification.error({
        message: 'Password and confirm password should be same!',
      });

    } else {
      try {
        const { data: { username } } = await createShipperAccount(data);
        notification.success({
          message: `Create your account`,
          description: `Sign in as username: ${username} to continue`,
        });
        navigate('/');
      } catch (e) {
        notification.error({
          message: 'Error in creating user!',
          description: e.toString(),
        });
      }
    }
  };

  return (
    <div className='App'>
      <div className='main-sign-up-shipper'>
        <h1 style={{ margin: 0 }}>Register for Shipper</h1>
        <p style={{ color: '#a5aeb6' }}>Create your account</p>
        <div className='sign-up-form-container'>
          <Form onFinish={handleSubmit} layout='vertical' hideRequiredMark>
            {shipperSignUpFormFields.map((item) =>
              formItem(item.key, item.rules, item.kwargs, item.type, item.others, item.label),
            )}
            <Form.Item>
              <Button type='primary' htmlType='submit' block>
                Create my account
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ShipperSignUpScreen;
