import React from 'react';
import { Button, Col, Form, Row } from 'antd';
import { formItem } from 'hocs/formItem.hoc';

import { postTruckFormFields } from '@app/common/formsFields/postTruck.formFields';
import { postTruck } from '@app/common/api/supplier';
import { handleSubmitHOC } from 'hocs/form';

export const PostTruckForm = ({ onCancel, onDone }) => {
  const handleSubmit = handleSubmitHOC({
    api: postTruck,
    failure: 'Error in posting truck',
    success: 'Successfully posted new truck',
    onDone,
    onCancel,
  });


  return (
    <Form onFinish={handleSubmit} layout='vertical' hideRequiredMark>
      <Row>
        <Col span={8}>
          {postTruckFormFields.slice(0, 2).map((item) => (
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
          {postTruckFormFields.slice(3, 5).map((item) => (
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
          {postTruckFormFields.slice(5, 7).map((item) => (
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
          {postTruckFormFields.slice(2, 3).map((item) => (
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
