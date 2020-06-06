import React, { useState } from 'react';
import { MasterHOC } from 'hocs/Master.hoc';
import { VendorForm } from 'forms/Vendor.form';
import { CloseSquareOutlined, EditOutlined } from '@ant-design/icons';
import { yantraColors } from 'helpers/yantraColors';
import { useAPI } from '@app/common/hooks/api';
import { deleteHOC } from 'hocs/form';
import { deleteVendor } from '@app/common/api/shipper';
import { shipperVendorColumn } from '@app/common/columns/shipperVendor.column';
import { GetTruckType } from '../../helpers/getTruckType';
import { MapArray } from '../../helpers/mapArray';

export const VendorShipperScreen = () => {
  const { data, loading, reload } = useAPI(`/vendors/`);
  const [selectedRow, setSelectedRow] = useState(undefined);

  const columns = [
    ...shipperVendorColumn,
    {
      title: 'Truck Type',
      dataIndex: 'truck_type',
      key: 'truck_type',
      render:(row)=> (
        <GetTruckType array={row} />
      )
    },
    {
      title: 'States Dealt In',
      dataIndex: 'states_dealtin',
      key: 'states_dealtin',
      render:(row) => (
        <MapArray array={row} containerClass='column' />
      )
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      render: (row) => (
        <div className='row align-center justify-between'>
          <EditOutlined
            style={{ color: yantraColors.primary, fontSize: 30 }}
            onClick={() => {
              setSelectedRow({ id: row.id, isEditable: false, showModal: true });
            }}
          />
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
      tableOptions={{scroll:{ x: 1500 }}}
      modalParams={{ ...selectedRow, setModalParams: setSelectedRow }}
    />
  );
};

export default VendorShipperScreen;
