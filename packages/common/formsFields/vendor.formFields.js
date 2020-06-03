import { FORM_ELEMENT_TYPES } from 'constants/formFields.constant';

export const vendorFormField = [
  {
    key: 'name',
    rules: [{ required: true, message: 'Please input vendor name!' }],
    kwargs: {
      placeholder: 'Vendor Name',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
    label: 'Vendor Name',
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
    key: 'primary_phone',
    rules: [{ required: true, message: 'Please input your primary phone number!' }],
    kwargs: {
      placeholder: 'Primary Phone',
      type: 'number',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
    label: 'Primary Phone',
  },
  {
    key: 'secondary_phone',
    rules: [{ required: true, message: 'Please input your secondary phone number!' }],
    kwargs: {
      placeholder: 'Secondary Phone',
      type: 'number',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
    label: 'Secondary Phone',
  },
  {
    key: 'truck_type',
    rules: [{ required: true, message: 'Please input truck type!' }],
    kwargs: {
      placeholder: 'Truck Type',
    },
    type: FORM_ELEMENT_TYPES.RADIO,
    others: {
      radioOptions: [
        { value: 'fleetOwner', label: 'Fleet Owner' },
        { value: 'transporter', label: 'Transporter' },
        { value: 'broker', label: 'Broker' },
      ],
    },
    label: 'Truck Type',
  },
];
