import React from 'react';
import { MasterHOC } from 'hocs/Master.hoc';
import { VendorForm } from 'forms/Vendor.form';

import { shipperItemColumn } from '@app/common/columns/shipperItem.column';
import { CloseSquareOutlined, EditOutlined } from '@ant-design/icons';
import { yantraColors } from 'helpers/yantraColors';
import { useAPI } from '@app/common/hooks/api';
import { deleteHOC } from 'hocs/form';
import { deleteVendor } from '@app/common/api/shipper';

export const VendorShipperScreen = () => {
  const { data, loading, reload } = useAPI(`/vendors/`);

  const columns = [
    ...shipperItemColumn,
    {
      title: 'Action',
      key: 'operation',
      render: (row) => (
        <div className='row align-center justify-between'>
          <EditOutlined style={{ color: yantraColors.primary, fontSize: 30 }} />
          <CloseSquareOutlined
            style={{ color: '#ff0000', fontSize: 30 }}
            onClick={deleteHOC({
              row,
              reload,
              api: deleteVendor,
              success: 'Deleted address successfully',
              failure: 'Error in deleting address',
            })}
          />
        </div>
      ),
    },
  ];

  return (
    <MasterHOC
      title='Vendor'
      columns={columns}
      data={data}
      loading={loading}
      refresh={reload}
      modalBody={VendorForm}
    />
  );
};

export default VendorShipperScreen;
