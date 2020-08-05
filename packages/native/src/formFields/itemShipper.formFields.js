import { FORM_ELEMENT_TYPES } from '@app/web/src/constants/formFields.constant';

export const itemFormField = [
  {
    key: 'prod_name',
    title: 'Name',
    type: FORM_ELEMENT_TYPES.INPUT,
  },
  {
    key: 'unit_price',
    title: 'Per unit price',
    inputParams: { keyboardType: 'number-pad', maxLength: 13 },
    type: FORM_ELEMENT_TYPES.INPUT,
  },
  {
    key: 'length',
    title: 'Length',
    inputParams: { keyboardType: 'number-pad', maxLength: 13 },
    type: FORM_ELEMENT_TYPES.INPUT,
  },
  {
    key: 'breadth',
    title: 'Breadth',
    inputParams: { keyboardType: 'number-pad', maxLength: 13 },
    type: FORM_ELEMENT_TYPES.INPUT,
  },
  {
    key: 'height',
    title: 'Height',
    inputParams: { keyboardType: 'number-pad', maxLength: 13 },
    type: FORM_ELEMENT_TYPES.INPUT,
  },
  {
    key: 'weight',
    title: 'Weight',
    inputParams: { keyboardType: 'number-pad', maxLength: 13 },
    type: FORM_ELEMENT_TYPES.INPUT,
  },
];
