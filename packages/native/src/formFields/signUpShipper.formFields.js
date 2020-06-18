import { FORM_ELEMENT_TYPES } from '@app/web/src/constants/formFields.constant';

export const signUpShipperFields = [
  {
    type: FORM_ELEMENT_TYPES.INPUT,
    title: 'First Name',
    key: 'first_name',
    icon: {
      name: 'md-person',
      size: 30,
      color: '#000',
    },
  },
  {
    type: FORM_ELEMENT_TYPES.INPUT,
    title: 'Last Name',
    key: 'last_name',
    icon: {
      name: 'md-person',
      size: 30,
      color: '#000',
    },
  },
  {
    type: FORM_ELEMENT_TYPES.INPUT,
    title: 'Username',
    key: 'username',
    icon: {
      name: 'md-person',
      size: 30,
      color: '#000',
    },
  },
  {
    type: FORM_ELEMENT_TYPES.INPUT,
    title: 'Email',
    key: 'email',
    icon: {
      name: 'md-mail',
      size: 30,
      color: '#000',
    },
  },
];
