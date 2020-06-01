import React from 'react';
import { CloseSquareOutlined, EditOutlined } from '@ant-design/icons';

import { MasterHOC } from 'hocs/Master.hoc';
import { VendorForm } from 'forms/Vendor.form';

import { shipperItemColumn } from '@app/common/columns/shipperItem.column';
import { yantraColors } from 'helpers/yantraColors';

export const ItemsShipperScreen = () => {
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

  return <MasterHOC title='Item' columns={columns} data={data} modalBody={VendorForm} />;
};

export default ItemsShipperScreen;
