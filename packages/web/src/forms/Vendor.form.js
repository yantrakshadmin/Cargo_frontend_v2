import React, { useState } from 'react';
import { Form, Col, Row, Button, Divider } from 'antd';
import { formItem } from 'hocs/formItem.hoc';
import { addressFormFields } from '@app/common/formsFields/address.formFields';
import { vendorFormField } from '@app/common/formsFields/vendor.formFields';
import { createVendor } from '@app/common/api/shipper';
import { handleSubmitHOC } from 'hocs/form';
import Countries from '@app/common/constants/countryAndState'


export const VendorForm = ({ onCancel, onDone }) => {
  const [form] = Form.useForm();
  const [countryIndex,setCountryIndex] = useState(81)
  const handleSubmit = handleSubmitHOC({
    api: createVendor,
    failure: 'Error in creating vendor.',
    success: 'Error in creating vendor.',
    onDone,
    onCancel,
  });

  const [checkBoxConfig , setCheckBoxConfig] = useState({
    checkList:[],
    checkOptions:['Fleet Owner', 'Transporter', 'Broker'],
    indeterminate:true,
    checkAll: false,
  })

  const onChange = (checkedList) =>{
    setCheckBoxConfig({
      ...checkBoxConfig,
      checkedList,
      indeterminate: !!checkedList.length &&
        checkedList.length < checkBoxConfig.checkOptions.length,
      checkAll: checkedList.length === checkBoxConfig.checkOptions.length,
    });
  }

  const onCheckAllChange = (e) => {
    setCheckBoxConfig({
      ...checkBoxConfig,
      checkedList: e.target.checked ? checkBoxConfig.checkOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    })
  }

  const fieldChange = () =>{
    const index = form.getFieldValue('country')
    console.log('index',countryIndex,index)
    setCountryIndex(index !== undefined?index:81);
  }
  return (
    <div className=''>
      <Form
        form={form}
        onFinish={handleSubmit}
        onFieldsChange={fieldChange}
        layout='vertical'
        hideRequiredMark>
        <Row>
          <Col span={8}>
            {vendorFormField.slice(0, 2).map((item) => (
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
            {vendorFormField.slice(6, 7).map((item) => (
              <div className='p-2'>
                {formItem(
                  item.key,
                  item.rules,
                  item.kwargs,
                  item.type,
                  { ...checkBoxConfig, onChange,onCheckAllChange },
                  item.label,
                )}
              </div>
            ))}
          </Col>
          <Col span={8}>
            {vendorFormField.slice(2, 4).map((item) => (
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
            {vendorFormField.slice(4, 6).map((item) => (
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
        <Divider orientation='left'>Address Details</Divider>
        <Row>
          <Col span={12}>
            {addressFormFields.slice(0, 1).map((item) => (
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
          <Col span={12}>
            {addressFormFields.slice(1, 2).map((item) => (
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
          <Col span={8}>
            {addressFormFields.slice(2, 3).map((item) => (
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
            {addressFormFields.slice(4, 5).map((item) => (
              <div className='p-2'>
                {formItem(
                  item.key,
                  item.rules,
                  item.kwargs,
                  item.type,
                  { selectOptions:Countries.countries[countryIndex].states, },
                  item.label,
                )}
              </div>
            ))}
          </Col>
          <Col span={8}>
            {addressFormFields.slice(3, 4).map((item) => (
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
        <Row />
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
    </div>
  );
};
