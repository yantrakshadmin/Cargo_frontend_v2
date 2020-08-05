import React from 'react';
import { createItem, editItem, retrieveItem } from '@app/common/api/shipper';
import { FormWrapper } from '../components/formWrapper';
import { itemFormField } from '../formFields/itemShipper.formFields';

export const FormItemNative = ({ onDone, id, onCancel }) => {
  return (
    <FormWrapper
      fields={itemFormField}
      title='Add Item'
      buttonLabel='Save'
      create={createItem}
      edit={editItem}
      retrieve={retrieveItem}
      onDone={onDone}
      onCancel={onCancel}
      failure={{ create: 'Error in adding item', edit: 'Error in editing item' }}
      id={id}
      success={{ create: 'Successfully added new item', edit: 'Successfully adding new item' }}
    />
  );
};
