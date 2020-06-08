import React, { useState } from 'react';
import { CloseSquareOutlined, EditOutlined } from '@ant-design/icons';

import { TableWithTabHOC } from 'hocs/TableWithTab.hoc';
import { SalesOrderForm } from 'forms/SalesOrder.form';

import { shipperItemColumn } from '@app/common/columns/shipperItem.column';
import { yantraColors } from 'helpers/yantraColors';
import { useAPI } from '@app/common/hooks/api';
import { LoadAPI } from 'hocs/LoadAPI';
import { Popconfirm } from 'antd';
import { deleteOrder } from '@app/common/api/shipper';
import { deleteHOC } from '../../hocs/form';

const Address = ({ id }) => (
  <LoadAPI
    url={`/edit-address/${id}/`}
    error={() => 'Error'}
    success={({ data: address }) => (
      <>
        {address.name}
        {' - '}
        {address.company}
        <br />
        {address.email}
      </>
    )}
  />
);

export const FreightExchange = () => {
  const { data, loading, reload } = useAPI(`/orders/`, {});
  const [selected, setSelected] = useState([]);
  const [editingId, setEditingId] = useState(undefined);

  const columns = [
    ...shipperItemColumn,
    {
      title: 'Sender address',
      // dataIndex: 'sender_address',
      key: 'sender_address',
      render: ({ sender_address }) => <Address id={sender_address} />,
    },
    {
      title: 'Receiver address',
      // dataIndex: 'receiver_address',
      key: 'receiver_address',
      render: ({ receiver_address }) => <Address id={receiver_address} />,
    },
    {
      title: 'Action',
      key: 'operation',
      render: (row) => (
        <div className='row align-center justify-between'>
          <EditOutlined
            style={{ color: yantraColors.primary, fontSize: 30 }}
            onClick={() => setEditingId(row.id)}
          />
          <Popconfirm
            title='Confirm Delete'
            onConfirm={deleteHOC({
              row,
              reload,
              api: deleteOrder,
              success: 'Deleted address successfully',
              failure: 'Error in deleting address',
            })}
          >
            <CloseSquareOutlined style={{ color: '#ff0000', fontSize: 30 }} />
          </Popconfirm>
        </div>
      ),
    },
  ];

  const tabs = [

    {
      name: 'Freight Exchange',
      key: 'freightExchange',
      data,
      loading,
      columns,
    },
  ];

  const onChange = (selectedRowKeys) => {
    setSelected(selectedRowKeys);
  };

  const reset = () => {
    setSelected([]);
  };

  const cancelEditing = () => setEditingId(undefined);

  return (
    <TableWithTabHOC
      reset={reset}
      rowKey={(record) => record.id}
      rowSelection={{ type:  'checkbox', selectedRowKeys: selected, onChange }}
      refresh={reload}
      tabs={tabs}
      title='Freight Exchange'
      editingId={editingId}
      hideRightButton
      showModal
      cancelEditing={cancelEditing}
      modalBody={SalesOrderForm}
      />
  );
};

export default FreightExchange;
