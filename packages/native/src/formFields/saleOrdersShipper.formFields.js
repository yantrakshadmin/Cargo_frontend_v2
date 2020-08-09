import { FORM_ELEMENT_TYPES } from '@app/web/src/constants/formFields.constant';

export const salesOrderFormFields = [
  {
    key: 'order_id',
    title: 'Order ID',
    type: FORM_ELEMENT_TYPES.INPUT,
  },
  {
    key: 'shipment_type',
    type: FORM_ELEMENT_TYPES.RADIO,
    defaultValue: 'FTL',
    radioOptions: [
      { value: 'FTL', label: 'FTL' },
      { value: 'PTL', label: 'PTL & Parcel' },
    ],
    title: 'Shipment Type',
  },
  {
    key: 'sender_address',
    type: FORM_ELEMENT_TYPES.RADIO,
    title: 'Select',
  },
  {
    key: 'receiver_address',
    type: FORM_ELEMENT_TYPES.RADIO,
    title: 'Select',
  },
];
