import { FORM_ELEMENT_TYPES } from 'constants/formFields.constant';

export const mainTripManagementFormFields = [
  {
    key: 'date',
    rules: [{ required: true, message: 'Please select date!' }],
    kwargs: {
      placeholder: 'E.g: 10/07/2019',
    },
    type: FORM_ELEMENT_TYPES.DATE,
    others: null,
  },
  {
    key: 'consignment',
    rules: [{ required: true, message: 'Required please fill!' }],
    kwargs: {
      placeholder: 'Consignment',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
  },
  {
    key: 'loading_address',
    rules: [{ required: true, message: 'Please input loading address!' }],
    kwargs: {
      placeholder: 'Loading Address',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
    label: 'Loading Address',
  },
  {
    key: 'driver_name',
    rules: [{ required: true, message: 'Please input driver name!' }],
    kwargs: {
      placeholder: 'Driver Name',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
    label: 'Driver Name',
  },
  {
    key: 'vehicle_number',
    rules: [{ required: true, message: 'Required please fill!' }],
    kwargs: {
      placeholder: 'Vehicle Number',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
    label: 'Vehicle Number'
  },
  {
    key: 'unloading_address',
    rules: [{ required: true, message: 'Please input unloading address!' }],
    kwargs: {
      placeholder: 'Unloading Address',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
    label: 'Unloading Address',
  },
  {
    key: 'driver_number',
    rules: [{ required: true, message: 'Please input driver number!' }],
    kwargs: {
      placeholder: 'Driver Number',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
    label: 'Driver Number',
  },
  {
    key: 'invoice_number',
    rules: [{ required: true, message: 'Please input invoice number!' }],
    kwargs: {
      placeholder: 'Invoice Number',
      type:'number'
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
    label: 'Invoice Number',
  },
  {
    key: 'vehicle_source',
    rules: [{ required: true, message: 'Please input vehicle source!' }],
    type: FORM_ELEMENT_TYPES.RADIO,
    others: { radioOptions:[{ value:'own',label:'Own' },
      { value:'broker',label:'Broker' }] },
    label: 'Vehicle Source',
  },
  {
    key: 'broker_name',
    rules: [{ required: true, message: 'Required please broker name!' }],
    kwargs: {
      placeholder: 'Broker Name',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
    label: 'Broker Name'
  },
  {
    key: 'advance_freight',
    rules: [{ required: true, message: 'Required please Advance Freight!' }],
    kwargs: {
      placeholder: 'Advance Freight',
      type:'number'
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
    label: 'Advance Freight'
  },
  {
    key: 'balance_freight',
    rules: [{ required: true, message: 'Please input balance freight!' }],
    kwargs: {
      placeholder: 'Balance Freight',
      type:'number'
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
    label: 'Balance Freight',
  },{
    key: 'vehicle_charges',
    rules: [{ required: true, message: 'Please input Vehicle Charges!' }],
    kwargs: {
      placeholder: 'Vehicle Charges',
      type:'number'
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
    label: 'Vehicle Charges',
  },{
    key: 'other_charges',
    rules: [{ required: true, message: 'Please input Other Charges!' }],
    kwargs: {
      placeholder: 'Detention or other charges',
      type:'number'
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
    label: 'Other Charges',
  },
];
