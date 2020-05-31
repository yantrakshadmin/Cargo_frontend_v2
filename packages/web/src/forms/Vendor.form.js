import React from 'react';
import { Form, Col, Row, Button } from 'antd';
import { formItem } from 'hocs/formItem.hoc';

import { addressFormFields } from '@app/common/formsFields/address.formFields';
import { vendorFormField } from '@app/common/formsFields/vendor.formFields';
import { createVendor } from '@app/common/api/shipper';
import { handleSubmitHOC } from 'hocs/form';

export const VendorForm = ({ onCancel }) => {
  const handleSubmit = handleSubmitHOC({
    api: createVendor,
    failure: 'Error in creating vendor.',
    success: 'Error in creating vendor.',
    onCancel,
  });


  return (
    <div className=''>
      <Form onFinish={handleSubmit} layout='horizontal' hideRequiredMark>
        <Row>
          <Col span={8}>
            {vendorFormField.slice(0, 2).map((item) => (
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
            {vendorFormField.slice(2, 4).map((item) => (
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
            {vendorFormField.slice(4, 6).map((item) => (
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
          <Col span={12}>
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
          <Col span={12}>
            {addressFormFields.slice(1, 2).map((item) => (
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
            onClick={() => {
              onCancel();
            }}>
            Save
          </Button>
          <div className='p-2'/>
          <Button type='primary' onClick={onCancel}>
            Cancel
          </Button>
        </Row>
      </Form>
    </div>
  );
};
