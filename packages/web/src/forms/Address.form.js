import React from 'react';
import { Form, Col, Row, Button } from 'antd';

import { createAddress } from '@app/common/api/shipper';

import { formItem } from 'hocs/formItem.hoc';
import {
  mainAddressFormFields,
  addressFormFields
} from '@app/common/formsFields/address.formFields';
import { handleSubmitHOC } from 'hocs/form';

export const AddressForm = ({ onCancel }) => {

  const handleSubmit = handleSubmitHOC({
    api: createAddress,
    failure: 'Error in adding address',
    success: 'Successfully added new address',
    onCancel
  });

  return (
    <Form onFinish={handleSubmit} layout='horizontal' hideRequiredMark>
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
      <Row>
        <Col span={8}>
          {addressFormFields.slice(0, 2).map((item) => (
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
          {addressFormFields.slice(2, 4).map((item) => (
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
          {addressFormFields.slice(4, 5).map((item) => (
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
