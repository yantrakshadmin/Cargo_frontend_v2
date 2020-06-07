import React, { useState } from 'react';
import { Row, Col, Form, Button, Modal, Descriptions } from 'antd';
import { useAPI } from '@app/common/hooks/api';
import { shipperTransportDirectoryColumn } from '@app/common/columns/shipperTransportDirectory.column';
import States from '@app/common/constants/statesAndCity';
import { MasterHOC } from 'hocs/Master.hoc';
import { formItem } from 'hocs/formItem.hoc';
import { FORM_ELEMENT_TYPES } from 'constants/formFields.constant';
import { ContactsFilled } from '@ant-design/icons';

const initialStateCity = { city: 'Ajmer', state: 'Rajasthan' };

export const TransportDirectory = () => {
  const [form] = Form.useForm();
  const [modal, setModal] = useState({ visible: false, data: {} });
  const [cities, setCites] = useState(States.Rajasthan);
  const [requestData, setRequestData] = useState(initialStateCity);
  const { data, loading, reload } = useAPI(`/directory/`, { method: 'get', params: requestData });

  const columns = [
    ...shipperTransportDirectoryColumn,
    {
      title: 'Contact',
      key: 'contact',
      render: (row) => (
        <Button
          block
          type='primary'
          icon={<ContactsFilled />}
          onClick={() => {
            console.log(row);
            setModal({ visible: true, data: row });
          }}>
          View Contact
        </Button>
      ),
    },
  ];

  const onChange = () => {
    const newCity = form.getFieldValue('city');
    const newState = form.getFieldValue('state');
    const isOfState = (States[newState] || []).indexOf(newCity) > -1;

    setCites(States[newState]);
    if (isOfState) setRequestData({ city: newCity, state: newState });
    else {
      form.setFieldsValue({ city: null });
      setRequestData({ city: null, state: null });
    }
  };

  return (
    <Form form={form} hideRequiredMark layout='vertical' onFieldsChange={onChange}>
      <Row>
        <Col span={8}>
          <div className='m-1'>
            {formItem(
              'state',
              null,
              {
                placeholder: 'Select State',
              },
              FORM_ELEMENT_TYPES.SELECT,
              {
                selectOptions: Object.keys(States),
                formOptions: { initialValue: initialStateCity.state },
              },
              'State',
            )}
          </div>
        </Col>
        <Col span={8}>
          <div className='m-1'>
            {formItem(
              'city',
              null,
              {
                placeholder: 'Select City',
              },
              FORM_ELEMENT_TYPES.SELECT,
              { selectOptions: cities, formOptions: { initialValue: initialStateCity.city } },
              'City',
            )}
          </div>
        </Col>
      </Row>
      <Modal
        visible={modal.visible}
        footer={null}
        destroyOnClose
        onCancel={() => setModal({ visible: false, data: {} })}>
        <Descriptions title={modal.data['Company Name']} bordered>
          <Descriptions.Item label='Services' span={4}>
            {modal.data.Services}
          </Descriptions.Item>
          <Descriptions.Item label='Contact Person Name' span={3}>
            {modal.data['Contact Person Name']}
          </Descriptions.Item>
          <Descriptions.Item label='Email' span={4}>
            {modal.data.Email}
          </Descriptions.Item>
          <Descriptions.Item label='Contact Numbers' span={4}>
            {modal.data['Contact Number']}
            <br />
            {modal.data['Contact Number 1']}
            <br />
            {modal.data['Contact Number 2']}
          </Descriptions.Item>
          <Descriptions.Item label='City' span={2}>
            {modal.data.City}
          </Descriptions.Item>
          <Descriptions.Item label='State' span={2}>
            {modal.data.State}
          </Descriptions.Item>
          <Descriptions.Item label='Address' span={4}>
            {modal.data.Address}
          </Descriptions.Item>
          <Descriptions.Item label='Pincode'>{modal.data['Pin Code']}</Descriptions.Item>
        </Descriptions>
      </Modal>
      <MasterHOC
        title='Transport Directory'
        columns={columns}
        data={JSON.parse(data || '[]')}
        loading={loading}
        refresh={reload}
        hideRightButton
      />
    </Form>
  );
};

export default TransportDirectory;
