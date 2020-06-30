import React from 'react';
import { FormWrapper } from '../components/formWrapper';
import { addressFormField } from '../formFields/addressShipper.formFields';
import { vendorFormField } from '../formFields/vendorShipper.formFields';

export const FormVendorNative = () => {
  const fields = [...vendorFormField, ...addressFormField];

  return <FormWrapper fields={fields} title='Add Vendor' buttonLabel='Save' />;
};
