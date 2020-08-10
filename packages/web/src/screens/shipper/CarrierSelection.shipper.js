import React, { useState } from 'react';
import { CloseSquareOutlined, EditOutlined } from '@ant-design/icons';
import { Link } from '@reach/router';
import { TableWithTabHOC } from 'hocs/TableWithTab.hoc';
import { SalesOrderForm } from 'forms/SalesOrder.form';

import { shipperSalesOrderColumn } from '@app/common/columns/shipperSalesOrder.column';
import { yantraColors } from 'helpers/yantraColors';
import { useAPI } from '@app/common/hooks/api';
import { LoadAPI } from 'hocs/LoadAPI';
import { Button, Modal, Popconfirm } from 'antd';
import { deleteOrders } from '@app/common/api/shipper';
import { deleteHOC } from '../../hocs/form';
import { ItemTable } from '../../components/ItemTable';
import { PTLRateTable } from '../../components/PTLRateTable';

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

export const CarrierSelection = () => {
  const { data, loading, reload } = useAPI(`/orders/`, {});
  const [editingId, setEditingId] = useState(undefined);
  const [modalVisible, setModalVisible] = useState(false);

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
      width: 100,
      render: (row) => (
        <div className='row align-center justify-center'>
          <EditOutlined
            style={{ color: yantraColors.primary, fontSize: 30, margin: 5 }}
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
            <CloseSquareOutlined style={{ color: '#ff0000', fontSize: 30, margin: 5 }} />
          </Popconfirm>
          {/* eslint-disable-next-line no-nested-ternary */}

          {row.shipment_type === 'FTL' ? (
            <Link to={`/freight-exchange/view-bid/${row.id}`}>
              <Button type='primary'>View Bid</Button>
            </Link>
          ) : (
            <Button
              onClick={() => {
                setModalVisible(true);
              }}
              type='primary'>
              View Rates
            </Button>
          )}
        </div>
      ),
    },
  ];

  const tabs = [
    {
      name: 'FTL',
      key: 'ftl',
      data: (data || []).filter((row) => row.shipment_type === 'FTL'),
      loading,
      columns,
    },
    {
      name: 'PTL',
      key: 'ptl',
      data: (data || []).filter((row) => row.shipment_type === 'PTL'),
      loading,
      columns,
    },
  ];

  const cancelEditing = () => setEditingId(undefined);

  return (
    <div>
      <TableWithTabHOC
        reset={() => {}}
        refresh={reload}
        tabs={tabs}
        title='Carrier Selection'
        editingId={editingId}
        hideRightButton
        showModal
        cancelEditing={cancelEditing}
        modalBody={SalesOrderForm}
        expandHandleKey='package'
        expandParams={{ loading }}
        ExpandBody={ItemTable}
      />
      <Modal
        visible={modalVisible}
        destroyOnClose
        style={{ minWidth: '40vw', padding: 0 }}
        title='PTL Rates'
        onCancel={() => {
          setModalVisible(false);
        }}
        footer={null}>
        <PTLRateTable />
      </Modal>
    </div>
  );
};

export default CarrierSelection;
