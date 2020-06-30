import React, { useEffect, useState } from 'react';
import { CloseSquareOutlined, EditOutlined } from '@ant-design/icons';
import { Link } from '@reach/router';
import { TableWithTabHOC } from 'hocs/TableWithTab.hoc';
import { SalesOrderForm } from 'forms/SalesOrder.form';

import { shipperSalesOrderColumn } from '@app/common/columns/shipperSalesOrder.column';
import { yantraColors } from 'helpers/yantraColors';
import { useAPI } from '@app/common/hooks/api';
import { LoadAPI } from 'hocs/LoadAPI';
import { Button, Popconfirm } from 'antd';
import { deleteOrders } from '@app/common/api/shipper';
import { deleteHOC } from '../../hocs/form';
import { ItemTable } from '../../components/ItemTable';

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
  const [assigned, setAssigned] = useState([]);
  const [notAssigned, setNotAssigned] = useState([]);
  const [editingId, setEditingId] = useState(undefined);

  useEffect(() => {
    if (data) {
      setAssigned(data.filter((i) => i.status === 'Active'));
      setNotAssigned(data.filter((i) => i.status !== 'Active'));
    }
  }, [data]);

  const columns = [
    ...shipperSalesOrderColumn,
    {
      title: 'Sender address',
      key: 'sender_address',
      render: ({ sender_address }) => <Address id={sender_address.id} />,
    },
    {
      title: 'Receiver address',
      // dataIndex: 'receiver_address',
      key: 'receiver_address',
      render: ({ receiver_address }) => {
        return <Address id={receiver_address.id} />;
      },
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
              api: deleteOrders,
              success: 'Deleted address successfully',
              failure: 'Error in deleting address',
            })}>
            <CloseSquareOutlined style={{ color: '#ff0000', fontSize: 30 }} />
          </Popconfirm>
          <Link to={`/freight-exchange/view-bid/${row.id}`}>
            <Button type='primary'>View Bid</Button>
          </Link>
        </div>
      ),
    },
  ];

  const tabs = [
    {
      name: 'Bid not assigned',
      key: 'not_assigned',
      data: notAssigned,
      loading,
      columns,
    },
    {
      name: 'Bid Assigned',
      key: 'assigned',
      data: assigned,
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
    <div>
      <TableWithTabHOC
        reset={reset}
        rowKey={(record) => record.id}
        rowSelection={{ type: 'checkbox', selectedRowKeys: selected, onChange }}
        refresh={reload}
        tabs={tabs}
        title='Freight Exchange'
        editingId={editingId}
        hideRightButton
        showModal
        cancelEditing={cancelEditing}
        modalBody={SalesOrderForm}
        expandHandleKey='package'
        expandParams={{ loading }}
        ExpandBody={ItemTable}
      />
    </div>
  );
};

export default FreightExchange;
