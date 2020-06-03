import React, { useState } from 'react';
import { Form, Col, Row, Button, Divider } from 'antd';

import { createAddress } from '@app/common/api/shipper';

import { formItem } from 'hocs/formItem.hoc';
import {
  mainAddressFormFields,
  addressFormFields
} from '@app/common/formsFields/address.formFields';
import { handleSubmitHOC } from 'hocs/form';
import Countries from '@app/common/constants/countryAndState'


export const AddressForm = ({ onCancel, onDone }) => {
  const [form] = Form.useForm();
  const [countryIndex,setCountryIndex] = useState(81)

  const handleSubmit = handleSubmitHOC({
    api: createAddress,
    failure: 'Error in adding address',
    success: 'Successfully added new address',
    onDone,
    onCancel
  });

  const fieldChange = () =>{
    const index = form.getFieldValue('country')
    setCountryIndex(index);
  }
  return (
    <Form
      onFinish={handleSubmit}
      onFieldsChange={fieldChange}
      layout='vertical'
      hideRequiredMark>
      <Row>
        <Col span={12}>
          {mainAddressFormFields.slice(0, 2).map((item) => (
            <div className='p-2'>
              {formItem(
                item.key,
                item.rules,
                item.kwargs,
                item.type,
                item.others,
                item.label,
              )}
            </div>
          ))}
        </Col>
        <Col span={12}>
          {mainAddressFormFields.slice(2, 4).map((item) => (
            <div className='p-2'>
              {formItem(
                item.key,
                item.rules,
                item.kwargs,
                item.type,
                item.others,
                item.label,
              )}
            </div>
          ))}
        </Col>
      </Row>
      <Divider orientation='left'>Address Details</Divider>
      <Row>
        <Col span={8}>
          {addressFormFields.slice(0, 1).map((item) => (
            <div className='p-2'>
              {formItem(
                item.key,
                item.rules,
                item.kwargs,
                item.type,
                item.others,
                item.label,
              )}
            </div>
          ))}
        </Col>
        <Col span={8}>
          {addressFormFields.slice(2, 3).map((item) => (
            <div className='p-2'>
              {formItem(
                item.key,
                item.rules,
                item.kwargs,
                item.type,
                item.others,
                item.label,
              )}
            </div>
          ))}
        </Col>
        <Col span={8}>
          {addressFormFields.slice(1,2).map((item) => (
            <div className='p-2'>
              {formItem(
                item.key,
                item.rules,
                item.kwargs,
                item.type,
                item.others,
                item.label,
              )}
            </div>
          ))}
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          {addressFormFields.slice(4, 5).map((item) => (
            <div className='p-2'>
              {formItem(
                item.key,
                item.rules,
                item.kwargs,
                item.type,
                { selectOptions:Countries.countries[countryIndex].states, },
                item.label,
              )}
            </div>
          ))}
        </Col>
        <Col span={8}>
          {addressFormFields.slice(3, 4).map((item) => (
            <div className='p-2'>
              {formItem(
                item.key,
                item.rules,
                item.kwargs,
                item.type,
                item.others,
                item.label,
              )}
            </div>
          ))}
        </Col>
      </Row>
      <Row>
        <Button
          type='primary'
          htmlType='submit'
        >
          Save
        </Button>
        <div className='p-2' />
        <Button type='primary' onClick={onCancel}>
          Cancel
        </Button>
      </Row>
    </Form>
  );
};
