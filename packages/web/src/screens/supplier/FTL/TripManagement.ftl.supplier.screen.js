import React, { useState } from 'react';

import { MasterHOC } from 'hocs/Master.hoc';
import { supplierTripManagementColumn } from '@app/common/columns/supplierTripManagement.column';
import { CloseSquareOutlined, EditOutlined } from '@ant-design/icons';
import { yantraColors } from 'helpers/yantraColors';
import { useAPI } from '@app/common/hooks/api';
import { dateFormatter } from '@app/common/helpers/dateFomatter';
import { Popconfirm } from 'antd';
import { deleteTripManagement } from '@app/common/api/supplier';
import { deleteHOC } from '../../../hocs/form';
import { TripManagementForm } from '../../../forms/tripManagement.form';

export const TripManagementFtl = () => {
  const { data, loading, reload } = useAPI(`trip-list/`);
  const [selectedRow, setSelectedRow] = useState({
    id: 0,
    isEditable: true,
    showModal: false,
  });
  const columns = [
    ...supplierTripManagementColumn,
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (row) => <div>{dateFormatter(row)}</div>,
    },
    {
      title: 'Action',
      key: 'operation',
      render: (row) => (
        <div className='row align-center justify-between'>
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
              api: deleteTripManagement,
              success: 'Deleted trip successfully',
              failure: 'Error in deleting Trip',
            })}>
            <CloseSquareOutlined style={{ color: '#ff0000', fontSize: 30, margin: 5 }} />
          </Popconfirm>
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
      modalParams={{ ...selectedRow, setModalParams: setSelectedRow }}
    />
  );
};

export default TripManagementFtl;
