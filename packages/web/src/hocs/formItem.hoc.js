import React from 'react';
import { Form, Input, Upload, Select, Radio, DatePicker,Checkbox,List } from 'antd';
import { Icon } from '@ant-design/compatible';
import { FORM_ELEMENT_TYPES } from 'constants/formFields.constant';

const { Option } = Select;
const CheckboxGroup = Checkbox.Group;
const list =[{
  href: 'https://ant.design',
  title: `ant design part `,
  avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  description:
    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}]


export const formItem = (key, rules, kwargs, type, others, customLabel, noLabel) => {
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
              <Option
                key={index.toString()}
                value={others.valueIndex?index:item.value || item[others.key]}>
                {others.customTitle? (
                  <text style={{ fontSize:13,fontWeight:'bold' }}>
                    {item[others.customTitle]}
                  </text>
                ) : (item.label || item[others.key] || item)}
                {others.dataKeys? (
                  <div className='row' style={{ flexWrap:'wrap', }}>
                    {others.dataKeys.map(i=>(
                      <text style={{ fontSize:11,marginLeft:5,marginRight:5, }}>{item[i]}</text>
                    ))}
                  </div>
                ):null}
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
          <Radio.Group value='Ggg'>
            {others.radioOptions.map((item) => (
              <Radio key={item.value} value={item.value}>{item.label}</Radio>
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
    case FORM_ELEMENT_TYPES.MULTIPLE_CHECKBOX: return(
      <Form.Item
        key={key}
        label={noLabel ? null : customLabel || key.charAt(0).toUpperCase() + key.slice(1)}
        name={key}
        rules={rules}>
        <div className=''>
          <Checkbox
            indeterminate={others.indeterminate}
            onChange={others.onCheckAllChange}
            checked={others.checkAll}
          >
            Check all
          </Checkbox>
        </div>
        <br />
        <CheckboxGroup
          options={others.checkOptions}
          value={others.checkedList}
          onChange={others.onChange}
        />

      </Form.Item>
    )
    default:
      return null;
  }
};
