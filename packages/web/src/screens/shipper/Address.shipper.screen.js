import React, { useState } from 'react';

import { MasterHOC } from 'hocs/Master.hoc';
import { AddressForm } from 'forms/Address.form';
import { CloseSquareOutlined, EditOutlined } from '@ant-design/icons';
import { yantraColors } from 'helpers/yantraColors';
import { useAPI } from '@app/common/hooks/api';
import { deleteAddress } from '@app/common/api/shipper';
import { deleteHOC } from 'hocs/form';
import { shipperAddressColumn } from '@app/common/columns/shipperAddress.column';
import { Popconfirm } from 'antd';

export const AddressShipperScreen = () => {
  const { data, loading, reload } = useAPI(`/address/`);
  const [selectedRow, setSelectedRow] = useState(undefined);

  const columns = [
    ...shipperAddressColumn,
    {
      title: 'Action',
      width: 100,
      key: 'operation',
      render: (row) => (
        <div className='row align-center justify-center'>
          <EditOutlined
            style={{ color: yantraColors.primary, fontSize: 30, margin: 5 }}
            onClick={() => {
              setSelectedRow({ id: row.id, isEditable: false, showModal: true });
            }}
          />
          <Popconfirm
            title='Confirm Delete'
            onConfirm={deleteHOC({
              row,
              reload,
              api: deleteAddress,
              success: 'Deleted address successfully',
              failure: 'Error in deleting address',
            })}>
            <CloseSquareOutlined style={{ color: '#ff0000', fontSize: 30, margin: 5 }} />
          </Popconfirm>
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
      modalParams={{ ...selectedRow, setModalParams: setSelectedRow }}
    />
  );
};

export default AddressShipperScreen;
