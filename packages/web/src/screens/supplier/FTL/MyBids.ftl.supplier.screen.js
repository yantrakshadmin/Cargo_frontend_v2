import React, { useState,useEffect } from 'react';
import { Button, Row, Col, Typography, Modal, Divider } from 'antd';

import { MasterHOC } from 'hocs/Master.hoc';
import { supplierMyBidsColumn } from '@app/common/columns/supplierMyBids.column';
import { useAPI } from '@app/common/hooks/api';
import {dateFormatter} from '@app/common/helpers/dateFomatter';

const { Text } = Typography;

export const MyBidsFTLSupplierScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [bids, setBids] = useState([{ bid_amount:0,bid_date:'' }]);
  const { data, loading, reload } = useAPI(`/mybids/`);

  const filterTableData=(array)=>{
    const filtered = []
    array.forEach((i)=>{
      if(filtered.some(item => {return i.order.id === item.order.id })){
        return null
      }
      filtered.push(i)
      return null
    })
    return filtered
  }

  const getViewBidData = (array,id) => {
    return array.filter(i=>(i.order.id===id))
  }

  useEffect(()=>{
    if(data) {
      if(data[0]){
        setBids(getViewBidData(data,data[0].order.id))
        setFilteredData(filterTableData(data))
      }
    }},[data,loading])


  const columns = [
    {
      title: 'Order ID',
      dataIndex: 'order',
      key: 'order_id',
      render:(row)=>(<div>{row.order_id}</div>)
    },
    {
      title: 'Sender Address',
      dataIndex: 'order',
      key: 'sender_address',
      render:(row)=>(
        <div>
          {row.sender_address.city}
          ,
          {row.sender_address.state}
        </div>
      )
    }, {
      title: 'Receiver Address',
      dataIndex: 'order',
      key: 'receiver_address',
      render:(row)=>(
        <div>
          {row.receiver_address.city}
          ,
          {row.receiver_address.state}
        </div>
      )
    },
    {
      title: 'Is Confirmed?',
      dataIndex: 'is_confirmed',
      key: 'is_confirmed',
      render:(row)=>(
        <div>
          {row?'Yes':'No'}
        </div>
      )
    },
    ...supplierMyBidsColumn,
    {
      title: 'Action',
      key: 'operation',
      render: (row) => (
        <Row justify='center'>
          <Col>
            <Button
              type='primary'
              onClick={
              () => {
                setBids(getViewBidData(data,row.order.id))
                setModalVisible(true);}
            }>
              View
            </Button>
          </Col>
        </Row>
      ),
    },
  ];

  return (
    <div>
      <MasterHOC
        title='My Bids'
        columns={columns}
        loading={loading}
        refresh={reload}
        data={filteredData}
        hideRightButton />
      <Modal
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        title='Bid Now'
        onOk={() => {}}>
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
      </Modal>
    </div>
  );
};

export default MyBidsFTLSupplierScreen;
