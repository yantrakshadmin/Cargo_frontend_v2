import { FORM_ELEMENT_TYPES } from 'constants/formFields.constant';

export const transportDirectoryFormFields = [

  {
    key: 'company_name',
    rules: [{ required: true, message: 'Please input company name!' }],
    kwargs: {
      placeholder: 'Company Name',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
    label: 'Company Name',
  },
  {
    key: 'contact_person_name',
    rules: [{ required: true, message: 'Please input contact person name!' }],
    kwargs: {
      placeholder: 'Contact Person Name',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
    label: 'Contact Person Name'
  },
  {
    key: 'primaryPhone',
    rules: [{ required: true, message: 'Please input your primary contact number!' }],
    kwargs: {
      placeholder: 'Primary Contact Number',
      type: 'number',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
    label: 'Primary Contact Number',
  },
  {
    key: 'secondaryPhone',
    rules: [{ required: true, message: 'Please input your secondary contact number!' }],
    kwargs: {
      placeholder: 'Secondary Contact Number',
      type: 'number',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
    label: 'Secondary Contact Number',
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
    key: 'address',
    rules: [{ required: true, message: 'Please enter address!' }],
    kwargs: {
      placeholder: 'E.g: D-XX/X, Okhla, New Delhi',
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
    key: 'state',
    rules: [{ required: true, message: 'Please enter state!' }],
    kwargs: {
      placeholder: 'State',
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
    key: 'services',
    rules: [{ required: true, message: 'Please enter services!' }],
    kwargs: {
      placeholder: 'Services',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
  },
];
