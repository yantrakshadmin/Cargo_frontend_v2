import React from 'react';
import { Form, Col, Row, Button, Spin } from 'antd';
import { createAddress, editAddress, retrieveAddress } from '@app/common/api/shipper';
import {salesOrderItemFormField} from '@app/common/formsFields/salesOrder.formFields';
import { formItem } from 'hocs/formItem.hoc';
import { useHandelForm } from 'hooks/form';

export const ItemForm = ({ onCancel, onDone, id }) => {


  const { form, loading, submit } = useHandelForm({
    create: createAddress,
    edit: editAddress,
    retrieve: retrieveAddress,
    success: 'Successfully added/edited new address',
    failure: 'Error in adding/editing address',
    done: onDone,
    close: onCancel,
    id,
  });


  return (
    <Spin spinning={loading}>
      <Form
        form={form}
        onFinish={submit}
        layout='vertical'
        hideRequiredMark>
        <Row>
          <Col span={8}>
            {salesOrderItemFormField.slice(0, 1).map((item) => (
              <div className='p-2'>
                {formItem(item.key, item.rules, item.kwargs, item.type, item.others, item.label)}
              </div>
            ))}
          </Col>
          <Col span={8}>
            {salesOrderItemFormField.slice(1, 2).map((item) => (
              <div className='p-2'>
                {formItem(item.key, item.rules, item.kwargs, item.type, item.others, item.label)}
              </div>
            ))}
          </Col>
          <Col span={8}>
            {salesOrderItemFormField.slice(2, 3).map((item) => (
              <div className='p-2'>
                {formItem(item.key, item.rules, item.kwargs, item.type, item.others, item.label)}
              </div>
            ))}
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            {salesOrderItemFormField.slice(3,5).map((item) => (
              <div className='p-2'>
                {formItem(item.key, item.rules, item.kwargs, item.type, item.others, item.label)}
              </div>
            ))}
          </Col>
          <Col span={12}>
            {salesOrderItemFormField.slice(5,7).map((item) => (
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
