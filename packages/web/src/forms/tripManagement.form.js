import React, { useState } from 'react';
import { Form, Col, Row, Button, Divider } from 'antd';

import { createAddress } from '@app/common/api/shipper';

import { formItem } from 'hocs/formItem.hoc';
import { mainTripManagementFormFields } from '@app/common/formsFields/tripManagement.formFields';
import { handleSubmitHOC } from 'hocs/form';
import { FORM_ELEMENT_TYPES } from '../constants/formFields.constant';



export const TripManagementForm = ({ onCancel, onDone }) => {
  const [ shouldGetBrokerName, setShouldGetBrokerName] = useState(false)
  const [form] = Form.useForm();
  const checkVehicleSource = () =>{
    const newItem = form.getFieldsValue(['vehicle_source']);
    setShouldGetBrokerName(newItem.vehicle_source === 'broker');
  }
  const mainFormFields = [
    {
      key: 'order_id',
      rules: [{ required: true, message: 'Please input order id!' }],
      kwargs: {
        placeholder: 'Order ID',
      },
      type: FORM_ELEMENT_TYPES.SELECT,
      others: { selectOptions:[{ value:'1',label :'1 | Mumbai | Delhi | 20-12-19 ' }] },
      label: 'Order ID',
    },...mainTripManagementFormFields
  ]
  const handleSubmit = handleSubmitHOC({
    api: createAddress,
    failure: 'Error in adding address',
    success: 'Successfully added new address',
    onDone,
    onCancel
  });

  return (
    <Form
      onFinish={handleSubmit}
      form={form}
      onFieldsChange={checkVehicleSource}
      layout='vertical'
      hideRequiredMark>
      <Row>
        <Col span={8}>
          {mainFormFields.slice(0, 3).map((item) => (
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
          {mainFormFields.slice(3, 6).map((item) => (
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
          {mainFormFields.slice(6, 9).map((item) => (
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
          {mainFormFields.slice(9, 10).map((item) => (
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
        {console.log(shouldGetBrokerName)}
        {shouldGetBrokerName?(
          <Col span={8}>
            {mainFormFields.slice(10, 11).map((item) => (
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
        ):null}
      </Row>
      <Divider type='horizontal'>Billing Details</Divider>
      <Row>
        <Col span={6}>
          {mainFormFields.slice(11, 12).map((item) => (
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
        <Col span={6}>
          {mainFormFields.slice(12, 13).map((item) => (
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
        <Col span={6}>
          {mainFormFields.slice(13, 14).map((item) => (
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
        <Col span={6}>
          {mainFormFields.slice(14, 15).map((item) => (
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
