import React from 'react';
import { Button, Col, Form, Row } from 'antd';
import { formItemCreate } from 'helpers/formItemCreate';
import { FORM_ELEMENT_TYPES } from 'constants/formFields.constant';
// Post Truck Form

// name = models.CharField(max_length=255)
// truck_type = models.ForeignKey(TruckType, on_delete=models.CASCADE)
// origin = models.CharField(max_length=255, default=0)
// destination = models.CharField(max_length=255, default=0)
// total_trucks = models.IntegerField(default=0)
// scheduled_date = models.CharField(max_length=255, default=0)
// offered_price = models.IntegerField(default=0)

function PostTruckForm({ onCancel }) {
  const mainFields = [
    {
      key: 'name',
      rules: [{ required: true, message: 'Please input vendor name!' }],
      kwargs: {
        placeholder: 'Name',
      },
      type: FORM_ELEMENT_TYPES.INPUT,
      others: null,
      label: 'Name',
    },

    {
      key: 'scheduled_date',
      rules: [{ required: true, message: 'Please select Scheduled Date!' }],
      kwargs: {
        placeholder: 'E.g: 10/07/2019',
      },
      type: FORM_ELEMENT_TYPES.DATE,
      others: null,
      label: 'Scheduled Date',
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
    {
      key: 'origin',
      rules: [{ required: true, message: 'Please input origin!' }],
      kwargs: {
        placeholder: 'Origin',
      },
      type: FORM_ELEMENT_TYPES.INPUT,
      others: null,
    },
    {
      key: 'total_trucks',
      rules: [{ required: true, message: 'Please input number of total trucks!' }],
      kwargs: {
        placeholder: 'Total Trucks',
        type: 'number',
      },
      type: FORM_ELEMENT_TYPES.INPUT,
      others: null,
      label: 'Total Trucks',
    },
    {
      key: 'destination',
      rules: [{ required: true, message: 'Please input your destination!' }],
      kwargs: {
        placeholder: 'Destination',
      },
      type: FORM_ELEMENT_TYPES.INPUT,
      others: null,
    },
    {
      key: 'offered_price',
      rules: [{ required: true, message: 'Please input number of Price Offered!' }],
      kwargs: {
        placeholder: 'Price Offered',
        type: 'number',
      },
      type: FORM_ELEMENT_TYPES.INPUT,
      others: null,
      label: 'Price Offered',
    },
  ];
  return (
    <Form onFinish={() => {}} layout='horizontal' hideRequiredMark>
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
          {mainFields.slice(3, 5).map((item) => (
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
          {mainFields.slice(5, 7).map((item) => (
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
          {mainFields.slice(2, 3).map((item) => (
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
}

export default PostTruckForm;
