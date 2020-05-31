import React from 'react';
import { Form, Input, Upload, Select, Radio, DatePicker } from 'antd';
import { Icon } from '@ant-design/compatible';
import { FORM_ELEMENT_TYPES } from 'constants/formFields.constant';

const { Option } = Select;

export const formItem = (key, rules, kwargs, type, others, customLabel, noLabel) => {
  const onChange = () => {
  };

  switch (type) {
    case FORM_ELEMENT_TYPES.INPUT:
      return (
        <Form.Item
          key={key}
          label={noLabel ? null : customLabel || key.charAt(0).toUpperCase() + key.slice(1)}
          name={key}
          rules={rules}>
          <Input {...kwargs} />
        </Form.Item>
      );

    case FORM_ELEMENT_TYPES.FILE_DRAG_DROP:
      return (
        <Form.Item
          key={key}
          label={noLabel ? null : customLabel || key.charAt(0).toUpperCase() + key.slice(1)}
          name={key}
          rules={rules}>
          <Upload.Dragger {...kwargs}>
            <p className='ant-upload-drag-icon'>
              <Icon type='inbox' />
            </p>
            <p className='ant-upload-text p-1'>{others.p1}</p>
            <p className='ant-upload-hint p-1'>{others.p2}</p>
          </Upload.Dragger>
        </Form.Item>
      );

    case FORM_ELEMENT_TYPES.SELECT:
      return (
        <Form.Item
          key={key}
          label={noLabel ? null : customLabel || key.charAt(0).toUpperCase() + key.slice(1)}
          name={key}
          rules={rules}>
          <Select {...kwargs}>
            {others.selectOptions.map((item, index) => (
              <Option key={index.toString()} value={item.value}>
                {item.label}
              </Option>
            ))}
          </Select>
        </Form.Item>
      );

    case FORM_ELEMENT_TYPES.RADIO:
      return (
        <Form.Item
          key={key}
          label={noLabel ? null : customLabel || key.charAt(0).toUpperCase() + key.slice(1)}
          name={key}
          rules={rules}>
          <Radio.Group onChange={onChange} value='Ggg'>
            {others.radioOptions.map((item) => (
              <Radio value={item.value}>{item.label}</Radio>
            ))}
          </Radio.Group>
        </Form.Item>
      );

    case FORM_ELEMENT_TYPES.DATE:
      return (
        <Form.Item
          key={key}
          label={noLabel ? null : customLabel || key.charAt(0).toUpperCase() + key.slice(1)}
          name={key}
          rules={rules}>
          <DatePicker />
        </Form.Item>
      );
    default:
      return null;
  }
};
