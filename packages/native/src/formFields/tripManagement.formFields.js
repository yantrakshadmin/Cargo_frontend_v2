import { FORM_ELEMENT_TYPES } from '@app/web/src/constants/formFields.constant';

export const mainTripManagementFormFields = [
  {
    key: 'loading_address',
    title: 'Loading Address',
    type: FORM_ELEMENT_TYPES.INPUT,
    inputParams: { editable:false, },
    showHeading:true
  },
  {
    key: 'unloading_address',
    title: 'Unloading Address',
    type: FORM_ELEMENT_TYPES.INPUT,
    inputParams: { editable:false, },
    showHeading:true,
  },
  {
    key: 'driver_name',
    title: 'Driver Name',
    type: FORM_ELEMENT_TYPES.INPUT,
  },
  {
    key: 'driver_number',
    title: 'Driver Number',
    type: FORM_ELEMENT_TYPES.INPUT,
  },
  {
    key: 'vehicle_number',
    title: 'Vehicle Number',
    type: FORM_ELEMENT_TYPES.INPUT,
  },


  {
    key: 'invoice_number',
    title: 'Invoice Number',
    inputParams:{ type:'number' },
    type: FORM_ELEMENT_TYPES.INPUT,
  },

  {
    key: 'consignment',
    title: 'Consignment',
    type: FORM_ELEMENT_TYPES.INPUT,
  },

  {
    key: 'vehicle_source',
    type: FORM_ELEMENT_TYPES.RADIO,
    radioOptions:[{ value:'Own',label:'Own' },
      { value:'Broker',label:'Broker' }] },
  {
    key: 'broker_name',
    title: 'Broker Name',
    type: FORM_ELEMENT_TYPES.INPUT,
  },
  {
    key: 'date',
    title:'Date',
    type: FORM_ELEMENT_TYPES.DATE,
    defaultValue:new Date(1598051730000)
  },
  {
    key: 'advance_freight',
    title: 'Advance Freight',
    inputParams:{ type:'number' },
    type: FORM_ELEMENT_TYPES.INPUT,

  },
  {
    key: 'balance_freight',
    title: 'Balance Freight',
    inputParams:{ type:'number' },
    type: FORM_ELEMENT_TYPES.INPUT,
  },{
    key: 'vehicle_charges',
    title: 'Vehicle Charges',
    inputParams:{ type:'number' },
    type: FORM_ELEMENT_TYPES.INPUT,
  },{
    key: 'other_charges',
    title: 'Detention or other charges',
    inputParams:{ type:'number' },
    type: FORM_ELEMENT_TYPES.INPUT,
  },
];
