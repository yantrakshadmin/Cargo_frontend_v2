import Countries from '@app/common/constants/countryAndState.json';
import { FORM_ELEMENT_TYPES } from '@app/web/src/constants/formFields.constant';
import { getSwitchOptions } from '@app/common/helpers/getSwitchOptions';

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
    multiple:true,
    type: FORM_ELEMENT_TYPES.SWITCH,
    showModal:true,
    switchOptions: getSwitchOptions(['All States', ...Countries.countries[81].states]),
  },
  {
    key: 'truck_type',
    title: 'Truck Type',
    type: FORM_ELEMENT_TYPES.SWITCH,
    multiple:true,
    switchOptions:[{ label: 'Transporter', value: 1 },
      { label: 'Broker', value: 2 },
      { label: 'Fleet Owner', value: 3 }]
  },
];
