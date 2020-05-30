import React from 'react';
import { Form, Col, Row, Button } from 'antd';
import { formItemCreate } from 'helpers/formItemCreate';

import { mainFormFields, addressFormFields } from '@app/common/formsFields/address.formFields';

export const AddressForm = ({ onCancel }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form onFinish={handleSubmit} layout='horizontal' hideRequiredMark>
      <Row>
        <Col span={12}>
          {mainFormFields.slice(0, 2).map((item) => (
            <div className='p-2'>
              {formItemCreate(
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
          {mainFormFields.slice(2, 4).map((item) => (
            <div className='p-2'>
              {formItemCreate(
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
              {formItemCreate(
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
              {formItemCreate(
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
              {formItemCreate(
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
          onClick={() => {
            onCancel();
          }}>
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
export default AddressForm;
