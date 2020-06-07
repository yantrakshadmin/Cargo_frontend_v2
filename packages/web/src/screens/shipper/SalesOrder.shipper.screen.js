import React, { useState } from 'react';
import { CloseSquareOutlined, EditOutlined } from '@ant-design/icons';

import { TableWithTabHOC } from 'hocs/TableWithTab.hoc';
import { SalesOrderForm } from 'forms/SalesOrder.form';

import { shipperItemColumn } from '@app/common/columns/shipperItem.column';
import { yantraColors } from 'helpers/yantraColors';
import { useAPI } from '@app/common/hooks/api';
import { LoadAPI } from 'hocs/LoadAPI';
import { Input, Modal } from 'antd';

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

export const SalesOrderShipperScreen = () => {
  const { data, loading, reload } = useAPI(`/orders/`, {});
  const [selected, setSelected] = useState([]);
  const [editingId, setEditingId] = useState(undefined);
  const [modalVisible, setModalVisible] = useState(false);

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
      render: ({ id }) => (
        <div className='row align-center justify-between'>
          <EditOutlined
            style={{ color: yantraColors.primary, fontSize: 30 }}
            onClick={() => setEditingId(id)}
          />
          <CloseSquareOutlined style={{ color: '#ff0000', fontSize: 30 }} />
        </div>
      ),
    },
  ];

  const tabs = [
    {
      name: 'All Sales Orders',
      key: 'allSalesOrder',
      data,
      columns,
      loading,
    },
    {
      name: 'On Hold FTL',
      key: 'onHoldFTL',
      data: (data || []).filter((row) => row.status === 'Hold' && row.shipment_type === 'FTL'),
      columns,
      loading,
      menu: [
        {
          title: 'Ready To Dispatch',
          onClick: () => {},
          type: 'primary',
        },
      ],
    },
    {
      name: 'On Hold PTL',
      key: 'onHoldPTL',
      data: (data || []).filter((row) => row.status === 'Hold' && row.shipment_type === 'PTL'),
      columns,
      loading,
      menu: [
        {
          title: 'Check Rates',
          onClick: () => {            setModalVisible(true);
          },
          type: 'primary',
        },
      ],
    },
    {
      name: 'Ready To Dispatch',
      key: 'readyToDispatch',
      data,
      loading,
      columns,
    },
    {
      name: 'Assigned',
      key: 'Assigned',
      data: (data || []).filter((row) => row.status === 'Assigned'),
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
      <Modal
        visible={modalVisible}
        onCancel={() => {
          setModalVisible(false);
        }}
        title='Bid Now'
        onOk={() => {}}>
        <div>
          Content here
          <br />
          Ggg
        </div>
      </Modal>
      <TableWithTabHOC
        reset={reset}
        rowKey={(record) => record.id}
        rowSelection={{ type: 'checkbox', selectedRowKeys: selected, onChange }}
        refresh={reload}
        tabs={tabs}
        title='Sales Orders'
        editingId={editingId}
        cancelEditing={cancelEditing}
        modalBody={SalesOrderForm}
    />
    </div>
  );
};

export default SalesOrderShipperScreen;
