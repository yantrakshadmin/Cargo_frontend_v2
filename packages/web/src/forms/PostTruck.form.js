import React from 'react';
import { Button, Col, Form, Row } from 'antd';
import { formItemCreate } from 'helpers/formItemCreate';

import { postTruckFormFields } from '@app/common/formsFields/postTruck.formFields';

export const PostTruckForm = ({ onCancel }) => {
  return (
    <Form onFinish={() => {}} layout='horizontal' hideRequiredMark>
      <Row>
        <Col span={8}>
          {postTruckFormFields.slice(0, 2).map((item) => (
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
          {postTruckFormFields.slice(3, 5).map((item) => (
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
          {postTruckFormFields.slice(5, 7).map((item) => (
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
          {postTruckFormFields.slice(2, 3).map((item) => (
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
};
