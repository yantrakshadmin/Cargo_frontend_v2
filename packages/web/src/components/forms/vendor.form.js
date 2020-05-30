import React from 'react';
import { Typography, Form, Col, Row, Button } from 'antd';
import { formItemCreate } from 'helpers/formItemCreate';
import { FORM_ELEMENT_TYPES } from 'constants/formFields.constant';

const { Title } = Typography;

function VendorForm({ onCancel }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const mainFields = [
    {
      key: 'name',
      rules: [{ required: true, message: 'Please input vendor name!' }],
      kwargs: {
        placeholder: 'Vendor Name',
      },
      type: FORM_ELEMENT_TYPES.INPUT,
      others: null,
      label: 'Vendor Name',
    },
    {
      key: 'company',
      rules: [{ required: true, message: 'Please input company!' }],
      kwargs: {
        placeholder: 'Company',
      },
      type: FORM_ELEMENT_TYPES.INPUT,
      others: null,
    },
    {
      key: 'email',
      rules: [{ required: true, message: 'Please input your email!' }],
      kwargs: {
        placeholder: 'Email',
      },
      type: FORM_ELEMENT_TYPES.INPUT,
      others: null,
    },
    {
      key: 'primaryPhone',
      rules: [{ required: true, message: 'Please input your primary phone number!' }],
      kwargs: {
        placeholder: 'Primary Phone',
        type: 'number',
      },
      type: FORM_ELEMENT_TYPES.INPUT,
      others: null,
      label: 'Primary Phone',
    },
    {
      key: 'secondaryPhone',
      rules: [{ required: true, message: 'Please input your secondary phone number!' }],
      kwargs: {
        placeholder: 'Secondary Phone',
        type: 'number',
      },
      type: FORM_ELEMENT_TYPES.INPUT,
      others: null,
      label: 'Secondary Phone',
    },
    {
      key: 'truck_type',
      rules: [{ required: true, message: 'Please input truck type!' }],
      kwargs: {
        placeholder: 'Truck Type',
      },
      type: FORM_ELEMENT_TYPES.RADIO,
      others: {
        radioOptions: [
          { value: 'fleetOwner', label: 'Fleet Owner' },
          { value: 'transporter', label: 'Transporter' },
          { value: 'broker', label: 'Broker' },
        ],
      },
      label: 'Truck Type',
    },
  ];
  const addressFiels = [
    {
      key: 'street',
      rules: [{ required: true, message: 'Please enter street!' }],
      kwargs: {
        placeholder: 'E.g: D-XX/X',
      },
      type: FORM_ELEMENT_TYPES.INPUT,
      others: null,
    },
    {
      key: 'city',
      rules: [{ required: true, message: 'Please enter city!' }],
      kwargs: {
        placeholder: 'E.g: Delhi',
      },
      type: FORM_ELEMENT_TYPES.INPUT,
      others: null,
    },
    {
      key: 'state',
      rules: [{ required: true, message: 'Please enter state!' }],
      kwargs: {
        placeholder: 'State',
      },
      type: FORM_ELEMENT_TYPES.INPUT,
      others: null,
    },
    {
      key: 'pin',
      rules: [{ required: true, message: 'Please input pin!' }],
      kwargs: {
        placeholder: 'Pin',
        type: 'number',
      },
      type: FORM_ELEMENT_TYPES.INPUT,
      others: null,
    },
    {
      key: 'country',
      rules: [{ required: true, message: 'Please enter country!' }],
      kwargs: {
        placeholder: 'Country',
        type: 'number',
      },
      type: FORM_ELEMENT_TYPES.INPUT,
      others: null,
    },
  ];

  return (
    <div className=''>
      <Form onSubmit={handleSubmit} layout='horizontal' hideRequiredMark>
        <Row>
          <Col span={8}>
            {mainFields.slice(0, 2).map((item) => (
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
            {mainFields.slice(2, 4).map((item) => (
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
            {mainFields.slice(4, 6).map((item) => (
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
          <Col span={12}>
            {addressFiels.slice(0, 1).map((item) => (
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
            {addressFiels.slice(1, 2).map((item) => (
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
            {addressFiels.slice(2, 3).map((item) => (
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
            {addressFiels.slice(3, 4).map((item) => (
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
            {addressFiels.slice(4, 5).map((item) => (
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
    </div>
  );
}
export default VendorForm;
