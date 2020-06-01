import { FORM_ELEMENT_TYPES } from 'constants/formFields.constant';

export const salesOrderFormFields = [
  {
    key: 'orderId',
    rules: [{ required: true, message: 'Please order id!' }],
    kwargs: {
      placeholder: 'Order ID',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
    label: 'Order ID',
  },
  {
    key: 'shipmentType',
    rules: [{ required: true, message: 'Please select shipment type!' }],
    type: FORM_ELEMENT_TYPES.RADIO,
    others: {
      radioOptions: [
        { value: 'ftl', label: 'FTL' },
        { value: 'ptl', label: 'PTL & Parcel' },
      ],
    },
    label: 'Shipment Type',
  },
  {
    key: 'consignor',
    rules: [{ required: true, message: 'Please select consignor!' }],
    type: FORM_ELEMENT_TYPES.SELECT,
    kwargs: {
      placeholder: 'Select',
    },
    others: {
      selectOptions: [
        { value: 'ftl', label: 'Consignor 1' },
        { value: 'ptl', label: 'Consignor 2' },
      ],
    },
  },
  {
    key: 'consignee',
    rules: [{ required: true, message: 'Please select consignee!' }],
    type: FORM_ELEMENT_TYPES.SELECT,
    kwargs: {
      placeholder: 'Select',
    },
    others: {
      selectOptions: [
        { value: 'ftl', label: 'Consignee 1' },
        { value: 'ptl', label: 'Consignee 2' },
      ],
    },
  },
  {
    key: 'date',
    rules: [{ required: true, message: 'Please select date!' }],
    kwargs: {
      placeholder: 'E.g: 10/07/2019',
    },
    type: FORM_ELEMENT_TYPES.DATE,
    others: null,
    label: 'Date',
  },
];

export const salesOrderItemFormField = [
  {
    key: 'name',
    rules: [{ required: true, message: 'Please enter item name!' }],
    kwargs: {
      placeholder: 'Name',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
  },
  {
    key: 'quantity',
    rules: [{ required: true, message: 'Please enter item quantity!' }],
    type: FORM_ELEMENT_TYPES.INPUT,
    kwargs: {
      placeholder: 'Quantity',
      type: 'number',
    },
    others: null,
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
    rules: [{ required: true, message: 'Please enter height!' }],
    kwargs: {
      placeholder: 'Height',
      type: 'number',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
  },
];
