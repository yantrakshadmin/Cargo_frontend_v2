import { FORM_ELEMENT_TYPES } from 'constants/formFields.constant';

export const bidCreateFormFields = [
  {
    key: 'bid_amount',
    rules: [{ required: true, message: 'Please input bid_amount!' }],
    kwargs: {
      placeholder: 'Bid Amount',
      type : 'number'
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
    label: 'Bid Amount',
  },
  {
    key: 'comments',
    kwargs: {
      placeholder: 'Comment',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
  },
];
