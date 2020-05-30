import React, { useState } from 'react';
import { Typography, Form, Col, Row, Button, Divider, Modal } from 'antd';
import { formItemCreate } from '../../helpers/formItemCreate';
import { FORM_ELEMENT_TYPES } from '../../constants/formFields.constant';

const { Title } = Typography;

function SalesOrderForm(props) {
  const [items, setItems] = useState([]);
  const [form] = Form.useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    // props.form.validateFields((err, values) => {
    console.log(e.target.value, 'Ggg');
    // });
  };
  const itemRemove = (i) => {
    setItems(
      items.filter((item, index) => {
        return i !== index;
      }),
    );
  };
  const addItem = () => {
    const newItem = form.getFieldsValue(['name', 'quantity', 'length', 'breadth', 'height']);
    setItems([...items, newItem]);
  };
  const mainFields = [
    {
      key: 'orderId',
      rules: [{ required: true, message: 'Please order id!' }],
      kwargs: {
        placeholder: 'Order ID',
      },
      type: FORM_ELEMENT_TYPES.INPUT,
      others: null,
      label: 'Order ID',
    },
    {
      key: 'shipmentType',
      rules: [{ required: true, message: 'Please select shipment type!' }],
      type: FORM_ELEMENT_TYPES.RADIO,
      others: {
        radioOptions: [
          { value: 'ftl', label: 'FTL' },
          { value: 'ptl', label: 'PTL & Parcel' },
        ],
      },
      label: 'Shipment Type',
    },
    {
      key: 'consignor',
      rules: [{ required: true, message: 'Please select consignor!' }],
      type: FORM_ELEMENT_TYPES.SELECT,
      kwargs: {
        placeholder: 'Select',
      },
      others: {
        selectOptions: [
          { value: 'ftl', label: 'Consignor 1' },
          { value: 'ptl', label: 'Consignor 2' },
        ],
      },
    },
    {
      key: 'consignee',
      rules: [{ required: true, message: 'Please select consignee!' }],
      type: FORM_ELEMENT_TYPES.SELECT,
      kwargs: {
        placeholder: 'Select',
      },
      others: {
        selectOptions: [
          { value: 'ftl', label: 'Consignee 1' },
          { value: 'ptl', label: 'Consignee 2' },
        ],
      },
    },
    {
      key: 'date',
      rules: [{ required: true, message: 'Please select date!' }],
      kwargs: {
        placeholder: 'E.g: 10/07/2019',
      },
      type: FORM_ELEMENT_TYPES.DATE,
      others: null,
      label: 'Date',
    },
  ];

  const itemsFields = [
    {
      key: 'name',
      rules: [{ required: true, message: 'Please enter item name!' }],
      kwargs: {
        placeholder: 'Name',
      },
      type: FORM_ELEMENT_TYPES.INPUT,
      others: null,
    },
    {
      key: 'quantity',
      rules: [{ required: true, message: 'Please enter item quantity!' }],
      type: FORM_ELEMENT_TYPES.INPUT,
      kwargs: {
        placeholder: 'Quantity',
        type: 'number',
      },
      others: null,
    },
    {
      key: 'length',
      rules: [{ required: true, message: 'Please enter length!' }],
      kwargs: {
        placeholder: 'Length',
        type: 'number',
      },
      type: FORM_ELEMENT_TYPES.INPUT,
      others: null,
    },
    {
      key: 'breadth',
      rules: [{ required: true, message: 'Please enter breadth!' }],
      kwargs: {
        placeholder: 'Breadth',
        type: 'number',
      },
      type: FORM_ELEMENT_TYPES.INPUT,
      others: null,
    },
    {
      key: 'height',
      rules: [{ required: true, message: 'Please enter height!' }],
      kwargs: {
        placeholder: 'Height',
        type: 'number',
      },
      type: FORM_ELEMENT_TYPES.INPUT,
      others: null,
    },
  ];

  return (
    <div>
      <Divider orientation='left'>Order Details</Divider>
      <Form onFinish={handleSubmit} form={form} layout='vertical' hideRequiredMark>
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
            {mainFields.slice(4, 5).map((item) => (
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
        <Divider orientation='left'>Items Details</Divider>
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
          <Col span={9}>
            {itemsFields.slice(0, 1).map((item) => (
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
          <Col span={3}>
            {itemsFields.slice(1, 2).map((item) => (
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
          <Col span={3}>
            {itemsFields.slice(2, 3).map((item) => (
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
          <Col span={3}>
            {itemsFields.slice(3, 4).map((item) => (
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
          <Col span={3}>
            {itemsFields.slice(4, 5).map((item) => (
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
          <Col span={3}>
            <div className='p-2'>
              <Button type='primary' onClick={addItem}>
                Add More
              </Button>
            </div>
          </Col>
        </Row>
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
}
export default SalesOrderForm;
