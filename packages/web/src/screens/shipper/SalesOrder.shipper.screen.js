import React from 'react';
import { CloseSquareOutlined, EditOutlined } from '@ant-design/icons';

import { TableWithTabHOC } from 'hocs/TableWithTab.hoc';
import { SalesOrderForm } from 'forms/SalesOrder.form';

import { shipperItemColumn } from '@app/common/columns/shipperItem.column';
import { yantraColors } from 'helpers/yantraColors';

export const SalesOrderShipperScreen = () => {
  const data = [];
  const columns = [
    ...shipperItemColumn,
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
    },
    {
      name: 'On Hold',
      key: 'onHold',
      data,
      columns,
    },
    {
      name: 'Ready To Dispatch',
      key: 'readyToDispatch',
      data,
      menu: [
        {
          title: 'dispatch',
          onClick: () => {},
          type: 'danger',
        },
        {
          title: 'dispatch',
          onClick: () => {},
        },
        {
          title: 'dispatch',
          onClick: () => {},
          type: 'default',
        },
      ],
      columns,
    },
    {
      name: 'Dispatched',
      key: 'dispatched',
      data,
      columns,
    },
  ];

  return <TableWithTabHOC tabs={tabs} title='Sales Orders' modalBody={SalesOrderForm} />;
};

export default SalesOrderShipperScreen;
