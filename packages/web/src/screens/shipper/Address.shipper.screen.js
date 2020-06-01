import React,{ useState } from 'react';

import { MasterHOC } from 'hocs/Master.hoc';
import { AddressForm } from 'forms/Address.form';

import { shipperItemColumn } from '@app/common/columns/shipperItem.column';
import { CloseSquareOutlined, EditOutlined } from '@ant-design/icons';
import { yantraColors } from 'helpers/yantraColors';
import { useAPI } from '@app/common/hooks/api';

export const AddressShipperScreen = () => {
  const { data, loading, reload } = useAPI(`/address/`);
  const [ selectedRow,setSelectedRow] = useState({
    id:0,
    isEditable:true,
    showModal:false,
  })
  const columns = [
    ...shipperItemColumn,
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
      title='Address'
      refresh={reload}
      columns={columns}
      data={data}
      loading={loading}
      modalBody={AddressForm}
      modalParams={{ ...selectedRow,setModalParams:setSelectedRow }}
    />
  );
};

export default AddressShipperScreen;
