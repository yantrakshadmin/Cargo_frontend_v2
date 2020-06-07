import { FORM_ELEMENT_TYPES } from 'constants/formFields.constant';

export const salesOrderFormFields = [
  {
    key: 'order_id',
    rules: [{ required: true, message: 'Please order id!' }],
    kwargs: {
      placeholder: 'Order ID',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
    label: 'Order ID',
  },
  {
    key: 'shipment_type',
    rules: [{ required: true, message: 'Please select shipment type!' }],
    type: FORM_ELEMENT_TYPES.RADIO,
    others: {
      radioOptions: [
        { value: 'FTL', label: 'FTL' },
        { value: 'PTL', label: 'PTL & Parcel' },
      ],
    },
    label: 'Shipment Type',
  },
  {
    key: 'sender_address',
    rules: [{ required: true, message: 'Please select consignor!' }],
    type: FORM_ELEMENT_TYPES.SELECT,
    kwargs: {
      placeholder: 'Select',
    },
    label: 'Consignor',
  },
  {
    key: 'receiver_address',
    rules: [{ required: true, message: 'Please select consignee!' }],
    type: FORM_ELEMENT_TYPES.SELECT,
    kwargs: {
      placeholder: 'Select',
    },
    label: 'Consignee',
  },
  // {
  //   key: 'date',
  //   rules: [{ required: true, message: 'Please select date!' }],
  //   kwargs: {
  //     placeholder: 'E.g: 10/07/2019',
  //   },
  //   type: FORM_ELEMENT_TYPES.DATE,
  //   others: null,
  //   label: 'Date',
  // },
];

export const salesOrderItemFormField = [
  {
    key: 'prod_name',
    kwargs: {
      placeholder: 'Name',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
    label: 'Product Name',
  },
  {
    key: 'quantity',
    type: FORM_ELEMENT_TYPES.INPUT,
    kwargs: {
      placeholder: 'Quantity',
      type: 'number',
    },
    others: null,
  },
  {
    key: 'unit_price',
    kwargs: {
      placeholder: 'Per unit price',
      type: 'number',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
    label: 'Per unit price',
  },
  {
    key: 'length',
    kwargs: {
      placeholder: 'Length',
      type: 'number',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
  },
  {
    key: 'breadth',
    kwargs: {
      placeholder: 'Breadth',
      type: 'number',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
  },
  {
    key: 'height',
    kwargs: {
      placeholder: 'Height',
      type: 'number',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
  },
  {
    key: 'weight',
    kwargs: {
      placeholder: 'Weight',
      type: 'number',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
  },
];
