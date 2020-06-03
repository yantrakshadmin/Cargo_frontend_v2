import React, { useState } from 'react';
import { Row,Col,Form } from 'antd';
import { useAPI } from '@app/common/hooks/api';
import { shipperTransportDirectoryColumn }
  from '@app/common/columns/shipperTransportDirectory.column';
import { MasterHOC } from '../../hocs/Master.hoc';
import { formItem } from '../../hocs/formItem.hoc';
import { FORM_ELEMENT_TYPES } from '../../constants/formFields.constant';

export const TransportDirectory = () => {
  const [form] = Form.useForm();
  const { loading, reload } = useAPI(`/vendors/`);
  const [currentState,setCurrentState] = useState(null)
  const data = [
    {
      company_name:'Airtel',
      contact_person_name:'+919557807977',
      state:'uttarpradesh'
    }, {
      company_name:'Ggg',
      contact_person_name:'+919557807977',
      state:'maharashtra'
    },{
      company_name:'More',
      contact_person_name:'+919557807977',
      state:'delhi'
    },
  ]
  const onChange = () =>{
    const newState = form.getFieldValue('state')

    console.log(newState);
    setCurrentState(newState)
  }
  return(
    <Form form={form} onFieldsChange={onChange}>
      <Row>
        <Col span={8}>
          {formItem(
            'state',
            null,
            {
              placeholder: 'Select State',
            },
            FORM_ELEMENT_TYPES.SELECT,
            { selectOptions:[
              { value:'uttarpradesh',label :'Uttar Pradesh' },
              { value:'delhi',label :'Delhi' },
              { value:'maharashtra',label :'Maharashtra' },
            ] },
            'Filter',
          )}
        </Col>
      </Row>
      <MasterHOC
        title='Transport Directory'
        columns={shipperTransportDirectoryColumn}
        data={data.filter(i => {return i.state === currentState} )}
        loading={loading}
        refresh={reload}
        hideRightButton />
    </Form>
  )
}

export default TransportDirectory;