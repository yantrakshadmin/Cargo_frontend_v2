import Countries from '@app/common/constants/countryAndState.json';
import { FORM_ELEMENT_TYPES } from '@app/web/src/constants/formFields.constant';

export const vendorFormField = [
  {
    key: 'name',
    title: 'Vendor Name',
    type: FORM_ELEMENT_TYPES.INPUT,
  },
  {
    key: 'company',
    title: 'Company',
    type: FORM_ELEMENT_TYPES.INPUT,
  },
  {
    key: 'email',
    title: 'Email',
    type: FORM_ELEMENT_TYPES.INPUT,
  },
  {
    key: 'primary_phone',
    title: 'Primary Phone',
    type: FORM_ELEMENT_TYPES.INPUT,
  },
  {
    key: 'secondary_phone',
    title: 'Secondary Phone',
    type: FORM_ELEMENT_TYPES.INPUT,
  },
  {
    key: 'states_dealtin',
    title: 'States Dealt In',
    type: FORM_ELEMENT_TYPES.RADIO,
    radioOptions: ['All States', ...Countries.countries[81].states],
  },
  // {
  //   key: 'truck_type',
  //   rules: [{ required: true, message: 'Please input truck type!' }],
  //   title: 'Truck Type',
  //   type: FORM_ELEMENT_TYPES.MULTIPLE_CHECKBOX,
  //   name: 'Truck Type',
  // },
];
