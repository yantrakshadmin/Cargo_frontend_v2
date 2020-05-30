import React from 'react';
import { Form, Button } from 'antd';

import { formItemCreate } from 'helpers/formItemCreate';
import { shipperSignUpFormFields } from 'formFields/shipper.signUp.formFields';

export const ShipperSignUpScreen = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='App'>
      <div className='main-sign-up-shipper'>
        <h1 style={{ margin: 0 }}>Register for Shipper</h1>
        <p style={{ color: '#a5aeb6' }}>Create your account</p>
        <div className='sign-up-form-container'>
          <Form onSubmit={handleSubmit} layout='vertical' hideRequiredMark>
            {shipperSignUpFormFields.map((item) =>
              formItemCreate(item.key, item.rules, item.kwargs, item.type, item.others, item.label),
            )}
          </Form>
        </div>
        <p style={{ color: '#000' }}>
          Password and Confirm Password should be 
          {' '}
          <same className='' />
        </p>
        <Button type='primary' block>
          Create Account
        </Button>
      </div>
    </div>
  );
};

export default ShipperSignUpScreen;
