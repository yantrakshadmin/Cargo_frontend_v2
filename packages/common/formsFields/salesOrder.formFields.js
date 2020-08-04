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
    rules: [{ required: true, message: 'Please enter product name!' }],
    kwargs: {
      placeholder: 'Name',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
    label: 'Product Name',
  },
  {
    key: 'unit_price',
    rules: [{ required: true, message: 'Please enter unit price!' }],
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
    rules: [{ required: true, message: 'Please enter length!' }],
    kwargs: {
      placeholder: 'Length',
      type: 'number',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
  },
  {
    key: 'breadth',
    rules: [{ required: true, message: 'Please enter breadth!' }],
    kwargs: {
      placeholder: 'Breadth',
      type: 'number',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
  },
  {
    key: 'height',
    rules: [{ required: true, message: 'Please enter name!' }],
    kwargs: {
      placeholder: 'Height',
      type: 'number',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
  },
  {
    key: 'weight',
    rules: [{ required: true, message: 'Please enter weight!' }],
    kwargs: {
      placeholder: 'Weight',
      type: 'number',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
  },
];

export const itemDropDown = [
  {
    key: 'selected',
    rules: [{ required: true, message: 'Please select consignor!' }],
    type: FORM_ELEMENT_TYPES.SELECT,
    kwargs: {
      placeholder: 'Select',
    },
    label: 'Add Item',
  },
  {
    key: 'quantity',
    rules: [{ required: true, message: 'Please enter quantity!' }],
    type: FORM_ELEMENT_TYPES.INPUT,
    kwargs: {
      placeholder: 'Quantity',
      type: 'number',
    },
    others: null,
  },
]
