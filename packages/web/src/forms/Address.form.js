import React from 'react';
import { Form, Col, Row, Button, Spin } from 'antd';

import { createAddress, editAddress, retrieveAddress } from '@app/common/api/shipper';

import { formItem } from 'hocs/formItem.hoc';
import { mainAddressFormFields, addressFormFields } from '@app/common/formsFields/address.formFields';
import { useHandelForm } from 'hooks/form';

export const AddressForm = ({ onCancel, onDone, id }) => {
  const { form, loading, submit } = useHandelForm({
    create: createAddress,
    edit: editAddress,
    retrieve: retrieveAddress,
    success: 'Successfully added/edited new address',
    failure: 'Error in adding/editing address',
    done: onDone,
    close: onCancel,
    id,
  });

  return (
    <Spin spinning={loading}>
      <Form form={form} onFinish={submit} layout='horizontal' hideRequiredMark>
        <Row>
          <Col span={12}>
            {mainAddressFormFields.slice(0, 2).map((item) => (
              <div className='p-2'>
                {formItem(item.key, item.rules, item.kwargs, item.type, item.others, item.label)}
              </div>
            ))}
          </Col>
          <Col span={12}>
            {mainAddressFormFields.slice(2, 4).map((item) => (
              <div className='p-2'>
                {formItem(item.key, item.rules, item.kwargs, item.type, item.others, item.label)}
              </div>
            ))}
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            {addressFormFields.slice(0, 2).map((item) => (
              <div className='p-2'>
                {formItem(item.key, item.rules, item.kwargs, item.type, item.others, item.label)}
              </div>
            ))}
          </Col>
          <Col span={8}>
            {addressFormFields.slice(2, 4).map((item) => (
              <div className='p-2'>
                {formItem(item.key, item.rules, item.kwargs, item.type, item.others, item.label)}
              </div>
            ))}
          </Col>
          <Col span={8}>
            {addressFormFields.slice(4, 5).map((item) => (
              <div className='p-2'>
                {formItem(item.key, item.rules, item.kwargs, item.type, item.others, item.label)}
              </div>
            ))}
          </Col>
        </Row>
        <Row>
          <Button type='primary' htmlType='submit'>
            Save
          </Button>
          <div className='p-2' />
          <Button type='primary' onClick={onCancel}>
            Cancel
          </Button>
        </Row>
      </Form>
    </Spin>
  );
};
