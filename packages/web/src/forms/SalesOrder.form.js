import React, { useState, useEffect } from 'react';
import { Form, Col, Row, Button, Divider, Typography, Spin, Space, Input } from 'antd';
import { formItem } from 'hocs/formItem.hoc';
import {
  salesOrderFormFields,
  salesOrderItemFormField,
} from '@app/common/formsFields/salesOrder.formFields';
import { useAPI } from '@app/common/hooks/api';
import { useHandelForm } from 'hooks/form';
import { createOrders, editOrders, retrieveOrders } from '@app/common/api/shipper';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';

const { Text } = Typography;

export const SalesOrderForm = ({ id, onCancel, onDone }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  const { data: addresses, loading: addressLoading } = useAPI(`/address/`);
  const { form, data, submit, loading } = useHandelForm({
    create: async ({ order_id, shipment_type, sender_address, receiver_address,packages }) =>
      // eslint-disable-next-line no-return-await
      await createOrders({
        order_id,
        shipment_type,
        sender_address,
        receiver_address,
        packages,
        // packages: items,
      }),
    edit: async (orderId, { order_id, shipment_type, sender_address, receiver_address, packages }) =>
      // eslint-disable-next-line no-return-await
      await editOrders(orderId, {
        order_id,
        shipment_type,
        sender_address,
        receiver_address,
        packages
        // packages: items,

      }),
    retrieve: retrieveOrders,
    success: 'Order created/edited successfully.',
    failure: 'Error in creating/editing order.',
    done: onDone,
    close: onCancel,
    id,
  });

  useEffect(() => {
    setTimeout(() => {
      setError(null);
    }, 5000);
    if (id && data) {
      const { order_id, shipment_type, sender_address, receiver_address, package: packages } = data;
      form.setFieldsValue({ order_id, shipment_type, sender_address, receiver_address,packages });
      // setItems(packages);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error]);

  // const itemRemove = (i) => {
  //   setError(null);
  //   setItems(
  //     items.filter((item, index) => {
  //       return i !== index;
  //     }),
  //   );
  // };

  // const addItem = (add) => {
  //   const packages = form.getFieldsValue(['packages']);
  //   const newItem = packages[packages.length-1]
  //
  //   setError(null);
  //   if (
  //     newItem.prod_name !== undefined &&
  //     newItem.quantity !== undefined &&
  //     newItem.length !== undefined &&
  //     newItem.breadth !== undefined &&
  //     newItem.height !== undefined &&
  //     newItem.weight !== undefined &&
  //     newItem.unit_price !== undefined
  //   ) {
  //     if (
  //       packages.every((i) => {
  //         return i.prod_name !== newItem.prod_name;
  //       })
  //     ) {
  //       add();
  //     } else {
  //       setError('Item name already exist!');
  //     }
  //   } else {
  //     setError('Please fill item details!');
  //   }
  // };

  const otherConfigsDropdown = {
    selectOptions: addresses || [],
    key: 'id',
    customTitle: 'company',
    dataKeys: ['name', 'city', 'pin', 'street', 'state', 'phone'],
  };

  return (
    <Spin spinning={addressLoading || loading}>
      <Divider orientation='left'>Order Details</Divider>
      <Form
        onFinish={submit}
        form={form}
        layout='vertical'
        // onFieldsChange={()=>{setItems(form.getFieldsValue(['packages']).packages);}}
        hideRequiredMark
        autoComplete='off'>
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

        <Form.List name='packages'>
          {(fields, { add, remove }) => {
            return (
              <div>
                {fields.map(field => (
                  <Row align='middle'>
                    <Col span={7}>
                      {salesOrderItemFormField.slice(0, 1).map((item) => (
                        <div className='p-2'>
                          {formItem(item.key,
                            item.rules,
                            item.kwargs,
                            item.type,
                            {
                              ...item.others,formOptions:
                                  {
                                    ...field,
                                    name: [field.name, 'prod_name'],
                                    fieldKey: [field.fieldKey, 'prod_name']
                                  } },
                            item.label)}
                        </div>
                      ))}
                    </Col>
                    {salesOrderItemFormField.slice(1, 2).map((item) => (
                      <Col span={2}>
                        <div className='p-2'>
                          {formItem(item.key,
                            item.rules, item.kwargs, item.type,
                            {
                              ...item.others,
                              formOptions:
                                  {
                                    ...field,
                                    name: [field.name, item.key],
                                    fieldKey: [field.fieldKey, item.key]
                                  } },
                            item.label)}
                        </div>
                      </Col>
                    ))}
                    {salesOrderItemFormField.slice(2, 3).map((item) => (
                      <Col span={4}>
                        <div className='p-2'>
                          {formItem(item.key,
                            item.rules, item.kwargs, item.type,
                            {
                              ...item.others,
                              formOptions:
                                  {
                                    ...field,
                                    name: [field.name, item.key],
                                    fieldKey: [field.fieldKey, item.key]
                                  } },
                            item.label)}
                        </div>
                      </Col>
                    ))}
                    {salesOrderItemFormField.slice(3, 7).map((item) => (
                      <Col span={2}>
                        <div className='p-2'>
                          {formItem(item.key,
                            item.rules, item.kwargs, item.type,
                            {
                              ...item.others,
                              formOptions:
                                  {
                                    ...field,
                                    name: [field.name, item.key],
                                    fieldKey: [field.fieldKey, item.key]
                                  } },
                            item.label)}
                        </div>
                      </Col>
                    ))}
                    <Button
                      type='danger'
                      onClick={() => {
                        remove(field.name);
                      }}
                    >
                      <MinusCircleOutlined />
                      {' '}
                      Delete
                    </Button>
                  </Row>
                ))}
                <Form.Item>
                  <Button
                    type='dashed'
                    onClick={() => {
                      add();
                    }}
                    block
                  >
                    <PlusOutlined />
                    {' '}
                    Add Item
                  </Button>
                </Form.Item>
              </div>
            );
          }}
        </Form.List>
        {error ? (
          <Row align='top'>
            <Col>
              <div className='p-2'>
                <Text type='danger'>{error}</Text>
              </div>
            </Col>
          </Row>
        ) : null}
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
