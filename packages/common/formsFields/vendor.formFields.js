import { FORM_ELEMENT_TYPES } from 'constants/formFields.constant';
import Countries from '@app/common/constants/countryAndState';

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
    key: 'states_dealtin',
    rules: [{ required: true, message: 'Please select states !' }],
    kwargs: {
      filterOption: (input, option) =>
        option.search.toLowerCase().indexOf(input.toLowerCase()) >= 0,
      mode: 'multiple',
      placeholder: 'Select',
    },
    type: FORM_ELEMENT_TYPES.SELECT,
    others: {
      selectOptions: ['All States', ...Countries.countries[81].states],
    },
    label: 'States Dealt In',
  },
  {
    key: 'truck_type',
    rules: [{ required: true, message: 'Please input truck type!' }],
    kwargs: {
      placeholder: 'Truck Type',
    },
    type: FORM_ELEMENT_TYPES.MULTIPLE_CHECKBOX,
    label: 'Truck Type',
  },
];
