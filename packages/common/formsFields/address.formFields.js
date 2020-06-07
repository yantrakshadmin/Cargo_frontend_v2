import { FORM_ELEMENT_TYPES } from 'constants/formFields.constant';
import Countries from '@app/common/constants/countryAndState';

export const mainAddressFormFields = [
  {
    key: 'name',
    rules: [{ required: true, message: 'Please input name!' }],
    kwargs: {
      placeholder: 'Name',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
    label: 'Name',
  },
  {
    key: 'company',
    rules: [{ required: true, message: 'Please input company!' }],
    kwargs: {
      placeholder: 'Company',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
  },
  {
    key: 'email',
    rules: [{ required: true, message: 'Please input your email!' }],
    kwargs: {
      placeholder: 'Email',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
  },
  {
    key: 'phone',
    rules: [{ required: true, message: 'Please input your primary phone number!' }],
    kwargs: {
      placeholder: 'Phone',
      type: 'number',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
    label: 'Phone',
  },
];

export const addressFormFields = [
  {
    key: 'street',
    rules: [{ required: true, message: 'Please enter street!' }],
    kwargs: {
      placeholder: 'E.g: D-XX/X',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
  },
  {
    key: 'pin',
    rules: [{ required: true, message: 'Please input pin!' }],
    kwargs: {
      placeholder: 'Pin',
      type: 'number',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
  },
  {
    key: 'city',
    rules: [{ required: true, message: 'Please enter city!' }],
    kwargs: {
      placeholder: 'E.g: Delhi',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
  },
  {
    key: 'country',
    rules: [{ required: true, message: 'Please enter country!' }],
    kwargs: {
      placeholder: 'Country',
      defaultValue: 'India',
    },
    type: FORM_ELEMENT_TYPES.SELECT,
    others: {
      selectOptions: Countries.countries,
      key: 'country',
      formOptions: {
        initialValue: 'India',
      },
    },
  },
  {
    key: 'state',
    rules: [{ required: true, message: 'Please enter state!' }],
    kwargs: {
      placeholder: 'State',
    },
    type: FORM_ELEMENT_TYPES.SELECT,
  },
];
