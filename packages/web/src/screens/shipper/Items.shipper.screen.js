import React, { useState } from 'react';
import { CloseSquareOutlined, EditOutlined } from '@ant-design/icons';

import { MasterHOC } from 'hocs/Master.hoc';
import { yantraColors } from 'helpers/yantraColors';
import { shipperItemColumn } from '@app/common/columns/shipperItems.column';
import { useAPI } from '@app/common/hooks/api';
import { Popconfirm } from 'antd';
import { deleteItem } from '@app/common/api/shipper';
import { ItemForm } from '../../forms/item.form';
import { deleteHOC } from '../../hocs/form';

export const ItemsShipperScreen = () => {
  const { data, loading, reload } = useAPI(`/items/`);
  const [selectedRow, setSelectedRow] = useState(undefined);

  const columns = [
    ...shipperItemColumn,
    {
      width: 100,
      title: 'Action',
      key: 'operation',
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
              api: deleteItem,
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
      title='Item'
      oading={loading}
      refresh={reload}
      columns={columns}
      data={data}
      modalBody={ItemForm}
      modalStyle={{ minWidth: '40vw' }}
      modalParams={{ ...selectedRow, setModalParams: setSelectedRow }}
    />
  );
};

export default ItemsShipperScreen;
