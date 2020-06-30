import React from 'react';
import { FormWrapper } from '../components/formWrapper';
import { mainAddressShipperFields, addressFormField } from '../formFields/addressShipper.formFields';

export const FormAddressNative = () => {
  const fields = [...mainAddressShipperFields, ...addressFormField];

  return <FormWrapper fields={fields} title='Add Address' buttonLabel='Save' />;
};
