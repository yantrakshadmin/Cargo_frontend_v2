import React from 'react';
import { CloseSquareOutlined, EditOutlined } from '@ant-design/icons';

import { TableWithTabHOC } from 'hocs/TableWithTab.hoc';
import { SalesOrderForm } from 'forms/SalesOrder.form';

import { shipperItemColumn } from '@app/common/columns/shipperItem.column';
import { yantraColors } from 'helpers/yantraColors';
import { useAPI } from '@app/common/hooks/api';
import { LoadAPI } from 'hocs/LoadAPI';

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
  const { data, loading, reload } = useAPI(`/orders/`);

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
      render: () => (
        <div className='row align-center justify-between'>
          <EditOutlined style={{ color: yantraColors.primary, fontSize: 30 }} />
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
      name: 'On Hold',
      key: 'onHold',
      data,
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
      name: 'Ready To Dispatch',
      key: 'readyToDispatch',
      data,
      loading,
      columns,
    },
    {
      name: 'Assigned',
      key: 'Assigned',
      data,
      loading,
      columns,
    },
  ];

  return (
    <TableWithTabHOC refresh={reload} tabs={tabs} title='Sales Orders' modalBody={SalesOrderForm} />
  );
};

export default SalesOrderShipperScreen;
