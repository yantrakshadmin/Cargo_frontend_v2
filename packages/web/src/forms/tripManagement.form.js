import React, { useEffect, useState } from 'react';
import { Form, Col, Row, Button, Divider, Spin } from 'antd';

import { formItem } from 'hocs/formItem.hoc';
import { mainTripManagementFormFields } from '@app/common/formsFields/tripManagement.formFields';
import { useAPI } from '@app/common/hooks/api';
import { useHandelForm } from 'hooks/form';
import {
  tripManagementCreate,
  tripManagementRetrieve,
  tripManagementEdit,
} from '@app/common/api/supplier';
import { FORM_ELEMENT_TYPES } from '../constants/formFields.constant';

export const TripManagementForm = ({ onCancel, onDone }) => {
  const [shouldGetBrokerName, setShouldGetBrokerName] = useState(false);

  const { submit, form } = useHandelForm({
    create: tripManagementCreate,
    retrieve: tripManagementRetrieve,
    edit: tripManagementEdit,
    failure: 'Error in adding trip',
    success: 'Successfully added trip',
    close: onCancel,
    done: onDone,
  });

  const { data: orders, loading: orderLoading } = useAPI(`/assigned-orders/`);
  const changeOnChange = () => {
    const orderId = form.getFieldValue('order');
    let order;

    (orders || []).map((oo) => {
      console.log({ oo });
      if (oo.order.id === orderId) order = oo;

      return null;
    });

    console.log({ orderId, order, orders });

    if (order)
      form.setFieldsValue({
        loading_address: order.order.sender_address.name,
        unloading_address: order.order.receiver_address.name,
      });
  };

  const checkVehicleSource = () => {
    const newItem = form.getFieldsValue(['vehicle_source']);
    setShouldGetBrokerName(newItem.vehicle_source === 'broker');
  };

  const mainFormFields = [
    {
      key: 'order',
      rules: [{ required: true, message: 'Please input order id!' }],
      kwargs: {
        placeholder: 'Order ID',
      },
      type: FORM_ELEMENT_TYPES.SELECT,
      others: {
        selectOptions: (orders || []).map((order) => ({
          value: order.order.id,
          label: order.order.order_id,
        })),
      },
      label: 'Order ID',
    },
    ...mainTripManagementFormFields,
  ];

  return (
    <Spin spinning={orderLoading}>
      <Form
        onFormChange={changeOnChange}
        onFinish={submit}
        form={form}
        onFieldsChange={changeOnChange}
        layout='vertical'
        hideRequiredMark>
        <Row>
          <Col span={8}>
            {mainFormFields.slice(0, 3).map((item) => (
              <div className='p-2'>
                {formItem(item.key, item.rules, item.kwargs, item.type, item.others, item.label)}
              </div>
            ))}
          </Col>
          <Col span={8}>
            {mainFormFields.slice(3, 6).map((item) => (
              <div className='p-2'>
                {formItem(item.key, item.rules, item.kwargs, item.type, item.others, item.label)}
              </div>
            ))}
          </Col>
          <Col span={8}>
            {mainFormFields.slice(6, 9).map((item) => (
              <div className='p-2'>
                {formItem(item.key, item.rules, item.kwargs, item.type, item.others, item.label)}
              </div>
            ))}
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            {mainFormFields.slice(9, 10).map((item) => (
              <div className='p-2'>
                {formItem(item.key, item.rules, item.kwargs, item.type, item.others, item.label)}
              </div>
            ))}
          </Col>
          {console.log(shouldGetBrokerName)}
          {shouldGetBrokerName ? (
            <Col span={8}>
              {mainFormFields.slice(10, 11).map((item) => (
                <div className='p-2'>
                  {formItem(item.key, item.rules, item.kwargs, item.type, item.others, item.label)}
                </div>
              ))}
            </Col>
          ) : null}
        </Row>
        <Divider type='horizontal'>Billing Details</Divider>
        <Row>
          <Col span={6}>
            {mainFormFields.slice(11, 12).map((item) => (
              <div className='p-2'>
                {formItem(item.key, item.rules, item.kwargs, item.type, item.others, item.label)}
              </div>
            ))}
          </Col>
          <Col span={6}>
            {mainFormFields.slice(12, 13).map((item) => (
              <div className='p-2'>
                {formItem(item.key, item.rules, item.kwargs, item.type, item.others, item.label)}
              </div>
            ))}
          </Col>
          <Col span={6}>
            {mainFormFields.slice(13, 14).map((item) => (
              <div className='p-2'>
                {formItem(item.key, item.rules, item.kwargs, item.type, item.others, item.label)}
              </div>
            ))}
          </Col>
          <Col span={6}>
            {mainFormFields.slice(14, 15).map((item) => (
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
