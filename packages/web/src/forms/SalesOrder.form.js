import React, { useState, useEffect } from 'react';
import { Form, Col, Row, Button, Divider, Typography, Spin } from 'antd';
import { formItem } from 'hocs/formItem.hoc';
import {
  salesOrderFormFields,
  salesOrderItemFormField,
} from '@app/common/formsFields/salesOrder.formFields';
import { useAPI } from '@app/common/hooks/api';
import { useHandelForm } from 'hooks/form';
import { createOrders, editOrders, retrieveOrders } from '@app/common/api/shipper';

const { Text } = Typography;

export const SalesOrderForm = ({ id, onCancel, onDone }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  const { data: addresses, loading: addressLoading } = useAPI(`/address/`);
  const { form, data, submit, loading } = useHandelForm({
    create: async ({ order_id, shipment_type, sender_address, receiver_address }) =>
      // eslint-disable-next-line no-return-await
      await createOrders({
        order_id,
        shipment_type,
        sender_address,
        receiver_address,
        packages: items,
      }),
    edit: async (orderId, { order_id, shipment_type, sender_address, receiver_address }) =>
      // eslint-disable-next-line no-return-await
      await editOrders(orderId, {
        order_id,
        shipment_type,
        sender_address,
        receiver_address,
        packages: items,
      }),
    retrieve: retrieveOrders,
    success: 'Order created/edited successfully.',
    failure: 'Error in creating/editing order.',
    done: onDone,
    close: onCancel,
    id,
  });

  useEffect(() => {
    if (id && data) {
      console.log({ data });
      const { order_id, shipment_type, sender_address, receiver_address, package: packages } = data;
      form.setFieldsValue({ order_id, shipment_type, sender_address, receiver_address });
      setItems(packages);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    setTimeout(() => {
      setError(null);
    }, 5000);
  }, [error]);

  const itemRemove = (i) => {
    setError(null);
    setItems(
      items.filter((item, index) => {
        return i !== index;
      }),
    );
  };

  const addItem = () => {
    const newItem = form.getFieldsValue([
      'prod_name',
      'quantity',
      'length',
      'breadth',
      'height',
      'width',
      'unit_price',
      'weight',
    ]);
    console.log({ newItem });

    setError(null);
    if (
      newItem.prod_name !== undefined &&
      newItem.quantity !== undefined &&
      newItem.length !== undefined &&
      newItem.breadth !== undefined &&
      newItem.height !== undefined &&
      newItem.weight !== undefined &&
      newItem.unit_price !== undefined
    ) {
      if (
        items.every((i) => {
          return i.prod_name !== newItem.prod_name;
        })
      ) {
        setItems([...items, newItem]);
      } else {
        setError('Item name already exist!');
      }
    } else {
      setError('Please fill item details!');
    }
  };

  const otherConfigsDropdown = {
    selectOptions: addresses || [],
    key: 'id',
    customTitle: 'company',
    dataKeys: ['name', 'city', 'pin', 'street', 'state', 'phone'],
  };

  return (
    <Spin spinning={addressLoading || loading}>
      <Divider orientation='left'>Order Details</Divider>

      <Form onFinish={submit} form={form} layout='vertical' hideRequiredMark>
        <Row>
          <Col span={8}>
            {salesOrderFormFields.slice(0, 2).map((item) => (
              <div className='p-2'>
                {formItem(item.key, item.rules, item.kwargs, item.type, item.others, item.label)}
              </div>
            ))}
          </Col>
          <Col span={8}>
            {salesOrderFormFields.slice(2, 4).map((item) => (
              <div className='p-2'>
                {formItem(
                  item.key,
                  item.rules,
                  item.kwargs,
                  item.type,
                  otherConfigsDropdown,
                  item.label,
                )}
              </div>
            ))}
          </Col>
          <Col span={8}>
            {salesOrderFormFields.slice(4, 5).map((item) => (
              <div className='p-2'>
                {formItem(item.key, item.rules, item.kwargs, item.type, item.others, item.label)}
              </div>
            ))}
          </Col>
        </Row>
        <Divider orientation='left'>Items Details</Divider>

        <Row align='middle'>
          <Col span={7}>
            {salesOrderItemFormField.slice(0, 1).map((item) => (
              <div className='p-2'>
                {formItem(item.key, item.rules, item.kwargs, item.type, item.others, item.label)}
              </div>
            ))}
          </Col>
          <Col span={2}>
            {salesOrderItemFormField.slice(1, 2).map((item) => (
              <div className='p-2'>
                {formItem(item.key, item.rules, item.kwargs, item.type, item.others, item.label)}
              </div>
            ))}
          </Col>
          <Col span={4}>
            {salesOrderItemFormField.slice(2, 3).map((item) => (
              <div className='p-2'>
                {formItem(item.key, item.rules, item.kwargs, item.type, item.others, item.label)}
              </div>
            ))}
          </Col>
          <Col span={2}>
            {salesOrderItemFormField.slice(3, 4).map((item) => (
              <div className='p-2'>
                {formItem(item.key, item.rules, item.kwargs, item.type, item.others, item.label)}
              </div>
            ))}
          </Col>
          <Col span={2}>
            {salesOrderItemFormField.slice(4, 5).map((item) => (
              <div className='p-2'>
                {formItem(item.key, item.rules, item.kwargs, item.type, item.others, item.label)}
              </div>
            ))}
          </Col>
          <Col span={2}>
            {salesOrderItemFormField.slice(5, 6).map((item) => (
              <div className='p-2'>
                {formItem(item.key, item.rules, item.kwargs, item.type, item.others, item.label)}
              </div>
            ))}
          </Col>
          <Col span={2}>
            {salesOrderItemFormField.slice(6, 7).map((item) => (
              <div className='p-2'>
                {formItem(item.key, item.rules, item.kwargs, item.type, item.others, item.label)}
              </div>
            ))}
          </Col>
          <Col span={3}>
            <div className='p-2'>
              <Button type='primary' onClick={addItem}>
                Add Item
              </Button>
            </div>
          </Col>
        </Row>
        {error ? (
          <Row align='top'>
            <Col>
              <div className='p-2'>
                <Text type='danger'>{error}</Text>
              </div>
            </Col>
          </Row>
        ) : null}
        {(items || []).map((i, index) => (
          <Row key={i.name}>
            <Col span={7}>
              <div className='p-h-4 p-v-2'>{i.prod_name}</div>
            </Col>
            <Col span={2}>
              <div className='p-h-4 p-v-2'>{i.quantity}</div>
            </Col>
            <Col span={4}>
              <div className='p-h-4 p-v-2'>{i.unit_price}</div>
            </Col>
            <Col span={2}>
              <div className='p-h-4 p-v-2'>{i.length}</div>
            </Col>
            <Col span={2}>
              <div className='p-h-4 p-v-2'>{i.breadth}</div>
            </Col>
            <Col span={2}>
              <div className='p-h-4 p-v-2'>{i.height}</div>
            </Col>
            <Col span={2}>
              <div className='p-h-4 p-v-2'>{i.weight}</div>
            </Col>
            <Col span={3}>
              <div className='p-2'>
                <Button
                  type='danger'
                  onClick={() => {
                    itemRemove(index);
                  }}>
                  Remove
                </Button>
              </div>
            </Col>
          </Row>
        ))}
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
