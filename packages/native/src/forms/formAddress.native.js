import React from 'react';
import { createAddress, editAddress, retrieveAddress } from '@app/common/api/shipper';
import { FormWrapper } from '../components/formWrapper';
import { mainAddressShipperFields, addressFormField }
  from '../formFields/addressShipper.formFields';

export const FormAddressNative = ({ onDone,id,onCancel }) => {
  const fields = [...mainAddressShipperFields, ...addressFormField];

  return (
    <FormWrapper
      fields={fields}
      title='Add Address'
      buttonLabel='Save'
      create={createAddress}
      edit={editAddress}
      retrieve={retrieveAddress}
      onDone={onDone}
      onCancel={onCancel}
      failure={{ create:'Error in adding address',
        edit:'Error in editing address' }}
      id={id}
      success={{ create:'Successfully added new address',
        edit:'Successfully adding new address' }} />
  );
};
