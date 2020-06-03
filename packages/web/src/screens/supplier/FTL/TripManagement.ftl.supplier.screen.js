import React,{ useState } from 'react';

import { MasterHOC } from 'hocs/Master.hoc';
import { supplierTripManagementColumn } from '@app/common/columns/supplierTripManagement.column';
import { CloseSquareOutlined, EditOutlined } from '@ant-design/icons';
import { yantraColors } from 'helpers/yantraColors';
import { useAPI } from '@app/common/hooks/api';
import { TripManagementForm } from '../../../forms/tripManagement.form';

export const TripManagementFtl = () => {
  const data = [{
    order_id:1,
    date:'19/12/2020'
  }]
  const {  loading, reload } = useAPI(`/address/`);
  const [ selectedRow,setSelectedRow] = useState({
    id:0,
    isEditable:true,
    showModal:false,
  })
  const columns = [
    ...supplierTripManagementColumn,
    {
      title: 'Action',
      key: 'operation',
      render: (row) => (
        <div className='row align-center justify-between'>
          <EditOutlined
            style={{ color: yantraColors.primary, fontSize: 30,margin:5 }}
            onClick={()=>{setSelectedRow({ id:row.id,isEditable:false,showModal:true })}} />
          <CloseSquareOutlined
            style={{ color: '#ff0000', fontSize: 30,margin:5 }}
            onClick={()=>{console.log(selectedRow)}} />
          
        </div>
      ),
    },
  ];

  return (
    <MasterHOC
      title='Trip Management'
      refresh={reload}
      columns={columns}
      data={data}
      customRightButtonLabel='Manage Trip'
      loading={loading}
      customModalTitle='Trip Details'
      modalBody={TripManagementForm}
      modalParams={{ ...selectedRow,setModalParams:setSelectedRow }}
    />
  );
};

export default TripManagementFtl;
