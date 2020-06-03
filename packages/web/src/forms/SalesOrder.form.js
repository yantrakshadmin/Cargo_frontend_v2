import React, { useState, useEffect } from 'react';
import { Form, Col, Row, Button, Divider, Typography } from 'antd';
import { formItem } from 'hocs/formItem.hoc';
import {
  salesOrderFormFields,
  salesOrderItemFormField,
} from '@app/common/formsFields/salesOrder.formFields';
import { useAPI } from '@app/common/hooks/api';

const { Text } = Typography;

export const SalesOrderForm = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    setTimeout(() => {
      setError(null);
    }, 5000);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const itemRemove = (i) => {
    setError(null);
    setItems(
      items.filter((item, index) => {
        return i !== index;
      }),
    );
  };

  const addItem = () => {
    const newItem = form.getFieldsValue(['name', 'quantity', 'length', 'breadth', 'height']);
    setError(null);
    if (
      newItem.name !== undefined &&
      newItem.quantity !== undefined &&
      newItem.length !== undefined &&
      newItem.breadth !== undefined &&
      newItem.height !== undefined
    ) {
      if (
        items.every((i) => {
          return i.name !== newItem.name;
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
  const { data } = useAPI(`/address/`);
  const otherConfigsDropdown = {
    selectOptions: data||[],
    key:'id',
    customTitle:'company',
    dataKeys:['name','city','pin','street','state','phone']
  }
  return (
    <div>
      <Divider orientation='left'>Order Details</Divider>
      <Form onFinish={handleSubmit} form={form} layout='vertical' hideRequiredMark>
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
          <Col span={9}>
            {salesOrderItemFormField.slice(0, 1).map((item) => (
              <div className='p-2'>
                {formItem(item.key, item.rules, item.kwargs, item.type, item.others, item.label)}
              </div>
            ))}
          </Col>
          <Col span={3}>
            {salesOrderItemFormField.slice(1, 2).map((item) => (
              <div className='p-2'>
                {formItem(item.key, item.rules, item.kwargs, item.type, item.others, item.label)}
              </div>
            ))}
          </Col>
          <Col span={3}>
            {salesOrderItemFormField.slice(2, 3).map((item) => (
              <div className='p-2'>
                {formItem(item.key, item.rules, item.kwargs, item.type, item.others, item.label)}
              </div>
            ))}
          </Col>
          <Col span={3}>
            {salesOrderItemFormField.slice(3, 4).map((item) => (
              <div className='p-2'>
                {formItem(item.key, item.rules, item.kwargs, item.type, item.others, item.label)}
              </div>
            ))}
          </Col>
          <Col span={3}>
            {salesOrderItemFormField.slice(4, 5).map((item) => (
              <div className='p-2'>
                {formItem(item.key, item.rules, item.kwargs, item.type, item.others, item.label)}
              </div>
            ))}
          </Col>
          <Col span={3}>
            <div className='p-2'>
              <Button type='primary' onClick={addItem}>
                Add More
              </Button>
            </div>
          </Col>
        </Row>
        {error?(
          <Row align='top'>
            <Col>
              <div className='p-2'>
                <Text type='danger'>
                  {error}
                </Text>
              </div>
            </Col>
          </Row>
        ):null}
        {items.map((i, index) => (
          <Row key={i.name}>
            <Col span={9}>
              <div className='p-h-4 p-v-2'>{i.name}</div>
            </Col>
            <Col span={3}>
              <div className='p-h-4 p-v-2'>{i.quantity}</div>
            </Col>
            <Col span={3}>
              <div className='p-h-4 p-v-2'>{i.length}</div>
            </Col>
            <Col span={3}>
              <div className='p-h-4 p-v-2'>{i.breadth}</div>
            </Col>
            <Col span={3}>
              <div className='p-h-4 p-v-2'>{i.height}</div>
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
          <Button type='primary'>Cancel</Button>
        </Row>
      </Form>
    </div>
  );
};
