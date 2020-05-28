import React from 'react';
import { Typography, Form, Button } from 'antd';
import { Icon } from '@ant-design/compatible';
import { formItemCreate } from '../helpers/formItemCreate';
import { FORM_ELEMENT_TYPES } from '../constants/formFields.constant';

const { Title } = Typography;

function SignInComponent(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {});
  };

  return (
    <div className='sign-in-form'>
      <Title level={3}>Welcome to Yantraksh</Title>
      <Title level={4}>Sign In</Title>
      <Form onSubmit={handleSubmit} layout='vertical'>
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
