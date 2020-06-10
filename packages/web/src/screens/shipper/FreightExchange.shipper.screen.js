import React, { useState } from 'react';
import { CloseSquareOutlined, EditOutlined } from '@ant-design/icons';

import { TableWithTabHOC } from 'hocs/TableWithTab.hoc';
import { SalesOrderForm } from 'forms/SalesOrder.form';

import { shipperSalesOrderColumn } from '@app/common/columns/shipperSalesOrder.column';
import { yantraColors } from 'helpers/yantraColors';
import { useAPI } from '@app/common/hooks/api';
import { LoadAPI } from 'hocs/LoadAPI';
import { Button, Col, Typography, Divider, Modal, Popconfirm, Row } from 'antd';
import { deleteOrders, viewBid } from '@app/common/api/shipper';
import { dateFormatter } from '@app/common/helpers/dateFomatter';
import { deleteHOC } from '../../hocs/form';
import { ItemTable } from '../../components/ItemTable';

const { Text }  = Typography;

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

export const ViewBidBody= ({ bids }) =>{
  return(
    <Row>
      <Col span={24}>
        <Divider orientation='left'>Recent Bid</Divider>
        <Row justify='space-between'>
          <Col>
            <Text>{dateFormatter(bids[0].bid_date)}</Text>
          </Col>
          <Col>
            <Text>{bids[0].bid_amount}</Text>
          </Col>
        </Row>
        <Divider orientation='left'>Previous Bids</Divider>
        {bids.slice(1, bids.length).map((bid, index) => (
          <Row justify='space-between' key={index.toString()}>
            <Col>
              <Text>{dateFormatter(bid.bid_date)}</Text>
            </Col>
            <Col>
              <Text delete>{bid.bid_amount}</Text>
            </Col>
          </Row>
        ))}
      </Col>
    </Row>
  )
}

export const FreightExchange = () => {
  const { data, loading, reload } = useAPI(`/orders/`, {});
  const [modalVisible, setModalVisible] = useState(false);
  const [bids, setBids] = useState([{ bid_amount:0,bid_date:'' }]);
  const [selected, setSelected] = useState([]);
  const [editingId, setEditingId] = useState(undefined);

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
      render: ({ receiver_address }) => {return <Address id={receiver_address.id} />},
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
            })}
          >
            <CloseSquareOutlined style={{ color: '#ff0000', fontSize: 30 }} />
          </Popconfirm>
          <Button
            type='primary'
            onClick={async ()=>{
              const bid = await viewBid(row.id)
              setBids(bid.data)
              console.log(bid.data)
              setModalVisible(true);
            }}>
            View Bid
          </Button>
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
    <div>
      <Modal
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        header={null}
        onOk={() => {}}>
        <ViewBidBody bids={bids} />
      </Modal>
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
        expandHandleKey='package'
        expandParams={{ loading }}
        ExpandBody={ItemTable}
      />
    </div>
  );
};

export default FreightExchange;
