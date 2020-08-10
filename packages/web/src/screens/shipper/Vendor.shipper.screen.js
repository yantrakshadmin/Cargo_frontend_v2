import React, { useState } from 'react';
import { MasterHOC } from 'hocs/Master.hoc';
import { VendorForm } from 'forms/Vendor.form';
import { CloseSquareOutlined, EditOutlined } from '@ant-design/icons';
import { yantraColors } from 'helpers/yantraColors';
import { useAPI } from '@app/common/hooks/api';
import { deleteHOC } from 'hocs/form';
import { deleteVendor } from '@app/common/api/shipper';
import { shipperVendorColumn } from '@app/common/columns/shipperVendor.column';
import { Popconfirm } from 'antd';
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
      width: 150,
      key: 'truck_type',
      render: (row) => <GetTruckType array={row} />,
    },
    {
      title: 'States Dealt In',
      dataIndex: 'states_dealtin',
      width: 150,
      key: 'states_dealtin',
      render: (row) => <MapArray array={row} containerClass='column' />,
    },
    {
      title: 'Action',
      key: 'operation',
      width: 100,
      fixed: 'right',
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
              api: deleteVendor,
              success: 'Deleted item successfully',
              failure: 'Error in deleting item',
            })}>
            <CloseSquareOutlined style={{ color: '#ff0000', fontSize: 30, margin: 5 }} />
          </Popconfirm>
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
      tableOptions={{ scroll: { x: 1500 } }}
      modalParams={{ ...selectedRow, setModalParams: setSelectedRow }}
    />
  );
};

export default VendorShipperScreen;
