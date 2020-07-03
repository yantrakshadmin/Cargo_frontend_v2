import React from 'react';
import { createAddress, editAddress, retrieveAddress } from '@app/common/api/shipper';
import { postTruck } from '@app/common/api/supplier';
import { FormWrapper } from '../components/formWrapper';
import { postTruckFormFields } from '../formFields/postTruckSupplierFtl.formFields';

export const FormPostTruckNative = ({ onDone,onCancel }) => {
  return (
    <FormWrapper
      fields={postTruckFormFields}
      title='Post Truck'
      buttonLabel='Save'
      create={postTruck}
      onDone={onDone}
      onCancel={onCancel}
      failure={{ create:'Error in adding truck',
        edit:'Error in editing truck' }}
      id={undefined}
      success={{ create:'Successfully added new truck',
        edit:'Successfully adding new truck' }} />
  );
};
