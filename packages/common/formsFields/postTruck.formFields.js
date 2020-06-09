import { FORM_ELEMENT_TYPES } from 'constants/formFields.constant';

export const postTruckFormFields = [
  {
    key: 'name',
    rules: [{ required: true, message: 'Please input vendor name!' }],
    kwargs: {
      placeholder: 'Name',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
    label: 'Name',
  },

  {
    key: 'scheduled_date',
    rules: [{ required: true, message: 'Please select Scheduled Date!' }],
    kwargs: {
      placeholder: 'E.g: 10/07/2019',
    },
    type: FORM_ELEMENT_TYPES.DATE,
    others: null,
    label: 'Scheduled Date',
  },
  {
    key: 'truck_type',
    rules: [{ required: true, message: 'Please input truck type!' }],
    kwargs: {
      placeholder: 'Truck Type',
    },
    type: FORM_ELEMENT_TYPES.RADIO,
    others: {
      radioOptions: [
        { value: 'Open', label: 'Open' },
        { value: 'Container', label: 'Container' },
        { value: 'Trailer', label: 'Trailer' },
      ],
    },
    label: 'Truck Type',
  },
  {
    key: 'origin',
    rules: [{ required: true, message: 'Please input origin!' }],
    kwargs: {
      placeholder: 'Origin',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
  },
  {
    key: 'total_trucks',
    rules: [{ required: true, message: 'Please input number of total trucks!' }],
    kwargs: {
      placeholder: 'Total Trucks',
      type: 'number',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
    label: 'Total Trucks',
  },
  {
    key: 'destination',
    rules: [{ required: true, message: 'Please input your destination!' }],
    kwargs: {
      placeholder: 'Destination',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
  },
  {
    key: 'offered_price',
    rules: [{ required: true, message: 'Please input number of Price Offered!' }],
    kwargs: {
      placeholder: 'Price Offered',
      type: 'number',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
    label: 'Price Offered',
  },
];
