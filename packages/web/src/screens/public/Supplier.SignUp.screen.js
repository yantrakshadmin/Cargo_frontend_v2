import React from 'react';
import { Form, Button } from 'antd';

import { formItem } from 'hocs/formItem.hoc';
import { supplierSignUpFormFields } from 'formFields/supplier.signUp.formFields';

export const SupplierSignUpScreen = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='App'>
      <div className='main-sign-up-shipper'>
        <h1 style={{ margin: 0 }}>Register for Supplier</h1>
        <p style={{ color: '#a5aeb6' }}>Create your account</p>
        <div className='sign-up-form-container'>
          <Form onSubmit={handleSubmit} layout='vertical' hideRequiredMark>
            {supplierSignUpFormFields.map((item) =>
              formItem(item.key, item.rules, item.kwargs, item.type, item.others, item.label),
            )}
          </Form>
        </div>
        <p style={{ color: '#000' }}>Password and Confirm Password should be same.</p>
        <Button type='primary' block>
          Create Account
        </Button>
      </div>
    </div>
  );
};

export default SupplierSignUpScreen;
