import { FORM_ELEMENT_TYPES } from '@app/web/src/constants/formFields.constant';

export const bidCreateFormFields = [
  {
    key: 'bid_amount',
    title: 'Bid Amount',
    inputParams:{
      type: 'number'
    },
    type: FORM_ELEMENT_TYPES.INPUT,
  },
  {
    key: 'comments',
    title:'Comment',
    type: FORM_ELEMENT_TYPES.INPUT,
  },
];
