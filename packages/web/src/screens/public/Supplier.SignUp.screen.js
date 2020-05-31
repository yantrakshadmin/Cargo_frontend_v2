import React from 'react';
import { Form, Button, notification } from 'antd';
import { createSupplierAccount } from '@app/common/api';

import { formItem } from 'hocs/formItem.hoc';
import { supplierSignUpFormFields } from 'formFields/supplier.signUp.formFields';

export const SupplierSignUpScreen = ({ navigate }) => {
  const handleSubmit = async (form) => {
    const { password, confirmPassword } = form;
    if (password !== confirmPassword) {
      notification.error({
        message: 'Password and confirm password should be same!',
      });

    } else {
      try {
        const { data: { username } } = await createSupplierAccount(form);
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
        <h1 style={{ margin: 0 }}>Register for Supplier</h1>
        <p style={{ color: '#a5aeb6' }}>Create your account</p>
        <div className='sign-up-form-container'>
          <Form
            onFinish={handleSubmit}
            layout='vertical'
            hideRequiredMark>
            {supplierSignUpFormFields.map((item) =>
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

export default SupplierSignUpScreen;
