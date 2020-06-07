import React, { useState } from 'react';
import { Row, Col, Form } from 'antd';
import { useAPI } from '@app/common/hooks/api';
import { shipperTransportDirectoryColumn } from '@app/common/columns/shipperTransportDirectory.column';
import States from '@app/common/constants/statesAndCity';
import { MasterHOC } from '../../hocs/Master.hoc';
import { formItem } from '../../hocs/formItem.hoc';
import { FORM_ELEMENT_TYPES } from '../../constants/formFields.constant';

export const TransportDirectory = () => {
  const [form] = Form.useForm();
  const [cities, setCites] = useState(States.Andamans);
  const [requestData, setRequestData] = useState({ city: 'Andamans', state: 'Andamans' });
  const { data, loading, reload } = useAPI(`/directory/`, { method: 'get', params: requestData });

  const onChange = () => {
    const newState = form.getFieldValue('state');
    setCites(States[newState]);
    setRequestData({ city: form.getFieldValue('city'), state: form.getFieldValue('state') });
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
              { selectOptions: Object.keys(States), formOptions: { initialValue: 'Andamans' } },
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
              { selectOptions: cities, formOptions: { initialValue: 'Andamans' } },
              'City',
            )}
          </div>
        </Col>
      </Row>
      <MasterHOC
        title='Transport Directory'
        columns={shipperTransportDirectoryColumn}
        data={[]}
        loading={loading}
        refresh={reload}
        hideRightButton
      />
    </Form>
  );
};

export default TransportDirectory;
