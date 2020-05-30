import { Icon } from '@ant-design/compatible';
import { FORM_ELEMENT_TYPES } from 'constants/formFields.constant';
import React from 'react';

export const supplierSignUpFormFields = [
  {
    key: 'fname',
    rules: [{ required: true, message: 'Please input your first name!' }],
    kwargs: {
      prefix: <Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />,
      placeholder: 'First Name',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
    label: 'First Name',
  },
  {
    key: 'lname',
    rules: [{ required: true, message: 'Please input your last name!' }],
    kwargs: {
      prefix: <Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />,
      placeholder: 'Last Name',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
    label: 'Last Name',
  },
  {
    key: 'username',
    rules: [{ required: true, message: 'Please input your username!' }],
    kwargs: {
      prefix: <Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />,
      placeholder: 'Username',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
  },
  {
    key: 'email',
    rules: [{ required: true, message: 'Please input your email!' }],
    kwargs: {
      prefix: <Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />,
      placeholder: 'Email',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
  },
  {
    key: 'password',
    rules: [{ required: true, message: 'Please input your password!' }],
    kwargs: {
      prefix: <Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />,
      placeholder: 'Password',
      type: 'password',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
  },
  {
    key: 'confirmPassword',
    rules: [{ required: true, message: 'Please input your confirm password!' }],
    kwargs: {
      prefix: <Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />,
      placeholder: 'Confirm Password',
      type: 'password',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
    label: 'Confirm Password',
  },
  {
    key: 'userType',
    rules: [{ required: true, message: 'Please input user type!' }],
    kwargs: {
      prefix: <Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />,
      placeholder: 'User Type',
    },
    type: FORM_ELEMENT_TYPES.RADIO,
    others: {
      radioOptions: [
        { value: 'ftl', label: 'FTL' },
        { value: 'ptl', label: 'PTL' },
      ],
    },
    label: 'User Type',
  },
];
