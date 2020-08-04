import { FORM_ELEMENT_TYPES }
  from '@app/web/src/constants/formFields.constant';
import Countries from '@app/common/constants/countriesArray';
import CountryAndState from '@app/common/constants/countryAndState';

export const mainAddressShipperFields = [
  {
    type: FORM_ELEMENT_TYPES.INPUT,
    title: 'Name',
    key: 'name',
  },
  {
    type: FORM_ELEMENT_TYPES.INPUT,
    title: 'Company',
    key: 'company',
  },
  {
    type: FORM_ELEMENT_TYPES.INPUT,
    title: 'Email',
    key: 'email',
  },
  {
    type: FORM_ELEMENT_TYPES.INPUT,
    title: 'Phone',
    key: 'phone',
    inputParams: { keyboardType: 'number-pad', maxLength: 13 },
  },
];

export const addressFormField = [
  {
    key: 'street',
    title: 'Street',
    type: FORM_ELEMENT_TYPES.INPUT,
  },
  {
    key: 'pin',
    title: 'Pin',
    type: FORM_ELEMENT_TYPES.INPUT,
  },
  {
    key: 'city',
    title: 'City',
    type: FORM_ELEMENT_TYPES.INPUT,
  },
  {
    key: 'country',
    title: 'Country',
    defaultValue: 'India',
    type: FORM_ELEMENT_TYPES.RADIO,
    radioOptions: Countries,
    dependantOn: true,
  },
  {
    key: 'state',
    title: 'State',
    type: FORM_ELEMENT_TYPES.RADIO,
    isDepandant: true,
    dependingKey: 'country',
    dependantKey: 'radioOptions',
    radioOptions: CountryAndState.countries.filter((i) => i.country === 'India')[0].states,
    getDependantData: (country) => {
      return CountryAndState.countries.filter((i) => i.country === country)[0].states;
    },
  },
];
