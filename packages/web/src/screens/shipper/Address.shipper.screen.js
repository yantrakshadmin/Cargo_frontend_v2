import React from 'react';

import { MasterHOC } from 'hocs/Master.hoc';
import { AddressForm } from 'forms/Address.form';

import { shipperItemColumn } from '@app/common/columns/shipperItem.column';
import { CloseSquareOutlined, EditOutlined } from '@ant-design/icons';
import { yantraColors } from 'helpers/yantraColors';

export const AddressShipperScreen = () => {
  const data = [];

  const columns = [
    ...shipperItemColumn,
    {
      title: 'Action',
      key: 'operation',
      render: () => (
        <div className='row align-center justify-between'>
          <EditOutlined style={{ color: yantraColors.primary, fontSize: 30 }} />
          <CloseSquareOutlined style={{ color: '#ff0000', fontSize: 30 }} />
        </div>
      ),
    },
  ];

  return <MasterHOC title='Address' columns={columns} data={data} modalBody={AddressForm} />;
};

export default AddressShipperScreen;
