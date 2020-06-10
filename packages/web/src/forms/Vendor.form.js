import React, { useState } from 'react';
import { Form, Col, Row, Button, Divider, Spin } from 'antd';
import { formItem } from 'hocs/formItem.hoc';
import { addressFormFields } from '@app/common/formsFields/address.formFields';
import { vendorFormField } from '@app/common/formsFields/vendor.formFields';
import Countries from '@app/common/constants/countryAndState';
import { createVendor, editVendor, retrieveVendor } from '@app/common/api/shipper';
import { useHandelForm } from 'hooks/form';
import { getStates } from '@app/common/constants/getStates';

export const VendorForm = ({ onCancel, onDone, id }) => {
  const { form, loading, submit } = useHandelForm({
    create: createVendor,
    edit: editVendor,
    retrieve: retrieveVendor,
    success: 'Successfully added/edited vendor',
    failure: 'Error in adding/editing vendor',
    done: onDone,
    close: onCancel,
    id,
  });

  const [states, setStates] = useState(
    Countries.countries.filter((i) => i.country === 'India')[0].states,
  );
  const [checkBoxConfig, setCheckBoxConfig] = useState({
    checkedList: [],
    checkOptions: [
      { label: 'Transporter', value: 1 },
      { label: 'Broker', value: 2 },
      { label: 'Fleet Owner', value: 3 },
    ],
    allOptions: [1, 2, 3],
  });

  const onChange = (checkedList) => {
    setCheckBoxConfig({
      ...checkBoxConfig,
      checkedlist: checkedList,
    });
  };

  const fieldChange = () => {
    console.log('values', form.getFieldValue('country'));
    if (form.getFieldValue('country')) {
      setStates(getStates(form.getFieldValue('country')));
    }
  };

  return (
    <Spin spinning={loading} className=''>
      <Form
        form={form}
        onFinish={submit}
        onFieldsChange={fieldChange}
        layout='vertical'
        hideRequiredMark>
        <Row>
          <Col span={8}>
            {vendorFormField.slice(0, 2).map((item) => (
              <div className='p-2'>
                {formItem(item.key, item.rules, item.kwargs, item.type, item.others, item.label)}
              </div>
            ))}
            {vendorFormField.slice(6, 7).map((item) => (
              <div className='p-2'>
                {formItem(
                  item.key,
                  item.rules,
                  item.kwargs,
                  item.type,
                  { ...checkBoxConfig, onChange },
                  item.label,
                )}
              </div>
            ))}
          </Col>
          <Col span={8}>
            {vendorFormField.slice(2, 4).map((item) => (
              <div className='p-2'>
                {formItem(item.key, item.rules, item.kwargs, item.type, item.others, item.label)}
              </div>
            ))}
          </Col>
          <Col span={8}>
            {vendorFormField.slice(4, 6).map((item) => (
              <div className='p-2'>
                {formItem(item.key, item.rules, item.kwargs, item.type, item.others, item.label)}
              </div>
            ))}
          </Col>
        </Row>
        <Divider orientation='left'>Address Details</Divider>
        <Row>
          <Col span={12}>
            {addressFormFields.slice(0, 1).map((item) => (
              <div className='p-2'>
                {formItem(item.key, item.rules, item.kwargs, item.type, item.others, item.label)}
              </div>
            ))}
          </Col>
          <Col span={12}>
            {addressFormFields.slice(1, 2).map((item) => (
              <div className='p-2'>
                {formItem(item.key, item.rules, item.kwargs, item.type, item.others, item.label)}
              </div>
            ))}
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            {addressFormFields.slice(2, 3).map((item) => (
              <div className='p-2'>
                {formItem(item.key, item.rules, item.kwargs, item.type, item.others, item.label)}
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
                  { selectOptions: states },
                  item.label,
                )}
              </div>
            ))}
          </Col>
          <Col span={8}>
            {addressFormFields.slice(3, 4).map((item) => (
              <div className='p-2'>
                {formItem(item.key, item.rules, item.kwargs, item.type, item.others, item.label)}
              </div>
            ))}
          </Col>
        </Row>
        <Row />
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
