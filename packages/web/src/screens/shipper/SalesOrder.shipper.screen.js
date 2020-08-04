import React, { useState } from 'react';
import { CloseSquareOutlined, EditOutlined } from '@ant-design/icons';
import { TableWithTabHOC } from 'hocs/TableWithTab.hoc';
import { SalesOrderForm } from 'forms/SalesOrder.form';
import { shipperSalesOrderColumn } from '@app/common/columns/shipperSalesOrder.column';
import { yantraColors } from 'helpers/yantraColors';
import { useAPI } from '@app/common/hooks/api';
import { LoadAPI } from 'hocs/LoadAPI';
import { Popconfirm, Modal } from 'antd';
import { loadAPI } from '@app/common/helpers/api';
import {deleteOrders} from '@app/common/api/shipper';
import { deleteHOC } from '../../hocs/form';
import {ItemTable} from '../../components/ItemTable';

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
    ...shipperSalesOrderColumn,
    {
      title: 'Sender address',
      // dataIndex: 'sender_address',
      key: 'sender_address',
      render: ({ sender_address }) => <Address id={sender_address.id} />,
    },
    {
      title: 'Receiver address',
      // dataIndex: 'receiver_address',
      key: 'receiver_address',
      render: ({ receiver_address }) => <Address id={receiver_address.id} />,
    },
    {
      title: 'Action',
      key: 'operation',
      render: (row) => (
        <div className='row align-center justify-start'>
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
            })}
          >
            <CloseSquareOutlined style={{ color: '#ff0000', fontSize: 30,margin:5 }} />
          </Popconfirm>
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
      name: 'Pending',
      key: 'pending',
      data: (data || []).filter((row) => row.status === 'Hold'),
      columns,
      loading,
      menu: [
        {
          title: 'Ready To Dispatch',
          onClick: async () => {
            // eslint-disable-next-line no-restricted-syntax
            for (const id of selected)
              try {
                const raw = data.find((row) => row.id === id);
                // eslint-disable-next-line no-await-in-loop
                await loadAPI(`/edit-order/${id}/`, {
                  method: 'PATCH',
                  data: {
                    ...raw,
                    status: 'Active',
                  },
                });
              } catch (e) {
                // ignore
              }

            reload();
          },
          type: 'primary',
        },
      ],
    },
    {
      name: 'Planned',
      key: 'planned',
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
        rowSelection={{ type:'checkbox', selectedRowKeys: selected, onChange }}
        refresh={reload}
        tabs={tabs}
        customRowSelectionType={{ allSalesOrder:'checkbox',
          onHoldFTL:'checkbox',onHoldPTL:'radio',Assigned:'checkbox' }}
        title='Sales Orders'
        editingId={editingId}
        cancelEditing={cancelEditing}
        modalBody={SalesOrderForm}
        expandHandleKey='package'
        expandParams={{ loading }}
        ExpandBody={ItemTable}
      />
    </div>
  );
};

export default SalesOrderShipperScreen;
