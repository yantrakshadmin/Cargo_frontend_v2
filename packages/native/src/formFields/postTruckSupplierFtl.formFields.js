import { FORM_ELEMENT_TYPES } from '@app/web/src/constants/formFields.constant';

export const postTruckFormFields = [
  {
    key: 'name',
    title:'Name',
    type: FORM_ELEMENT_TYPES.INPUT,
    label: 'Name',
  },
  {
    key: 'origin',
    title: 'Origin',
    type: FORM_ELEMENT_TYPES.INPUT,
  },
  {
    key: 'destination',
    title: 'Destination',
    type: FORM_ELEMENT_TYPES.INPUT,
  },
  {
    key: 'total_trucks',
    title: 'Total Trucks',
    inputParams: { keyboardType: 'number-pad', maxLength: 4 },
    type: FORM_ELEMENT_TYPES.INPUT,
  },
  {
    key: 'offered_price',
    title: 'Price Offered',
    inputParams: { keyboardType: 'number-pad', maxLength: 4 },
    type: FORM_ELEMENT_TYPES.INPUT,
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
  {
    key: 'scheduled_date',
    title: 'Scheduled Date',
    type: FORM_ELEMENT_TYPES.DATE,
    defaultValue:new Date(1598051730000)
  },
];
