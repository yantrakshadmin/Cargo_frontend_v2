import React from 'react';
import {
  createVendor,
  editVendor,
  retrieveVendor,
} from '@app/common/api/shipper';
import { FormWrapper } from '../components/formWrapper';
import { addressFormField } from '../formFields/addressShipper.formFields';
import { vendorFormField } from '../formFields/vendorShipper.formFields';

export const FormVendorNative = ({ onDone,id,onCancel }) => {
  const fields = [...vendorFormField, ...addressFormField];

  return (
    <FormWrapper
      fields={fields}
      title='Add Vendor'
      buttonLabel='Save'
      create={createVendor}
      edit={editVendor}
      retrieve={retrieveVendor}
      onDone={onDone}
      onCancel={onCancel}
      failure={{ create:'Error in adding vendor',
        edit:'Error in editing vendor' }}
      id={id}
      success={{ create:'Successfully added new vendor',
        edit:'Successfully adding new vendor' }}
    />
  );
};
