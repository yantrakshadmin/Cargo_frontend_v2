import React, { Component, useState } from 'react';
import { Button, Row, Col, Typography, Modal, Divider } from 'antd';
import MasterTemplateComponent from '../../../../components/shipper/masterTemplateComponent';

const { Text } = Typography;

function MyBids() {
  const [modalVisible, setModalVisible] = useState(false);

  const bids = [
    {
      price_offered: 5000,
      date: '12/10/2019',
    },
    {
      price_offered: 3000,
      date: '12/11/2019',
    },
    {
      price_offered: 4000,
      date: '11/10/2019',
    },
  ];
  const dataSource = [
    {
      key: '1',
      order_id: '1',
      origin: 'Mike',
      date: '13/02/2020',
      destination: '10 Downing Street',
    },
    {
      key: '1',
      order_id: '1',
      origin: 'Mike',
      date: '13/02/2020',
      destination: '10 Downing Street',
    },
    {
      key: '1',
      order_id: '1',
      origin: 'Mike',
      date: '13/02/2020',
      destination: '10 Downing Street',
    },
  ];
  const columns = [
    {
      title: 'Order ID',
      dataIndex: 'order_id',
      key: 'order_id',
    },
    {
      title: 'Origin',
      dataIndex: 'origin',
      key: 'origin',
    },
    {
      title: 'Destination',
      dataIndex: 'destination',
      key: 'destination',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Action',
      key: 'operation',
      render: (row) => (
        <Row justify='center'>
          <Col>
            <Button
              type='primary'
              onClick={() => {
                console.log(row);
                setModalVisible(true);
              }}>
              View
            </Button>
          </Col>
        </Row>
      ),
    },
  ];

  return (
    <div>
      <MasterTemplateComponent
        title='My Bids'
        columns={columns}
        data={dataSource}
        hideRightButton
      />
      <Modal
        visible={modalVisible}
        onCancel={() => {
          setModalVisible(false);
        }}
        // style={{ minWidth: '80vw' }}
        title='Bid Now'
        onOk={() => {
          console.log('Okay');
        }}>
        <Row>
          <Col span={24}>
            <Divider orientation='left'>Recent Bid</Divider>
            <Row justify='space-between'>
              <Col>
                <Text>{bids[0].date}</Text>
              </Col>
              <Col>
                <Text>{bids[0].price_offered}</Text>
              </Col>
            </Row>
            <Divider orientation='left'>Previous Bids</Divider>
            {bids.slice(1, bids.length).map((bid, index) => (
              <Row justify='space-between' key={index.toString()}>
                <Col>
                  <Text>{bid.date}</Text>
                </Col>
                <Col>
                  <Text delete>{bid.price_offered}</Text>
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
      </Modal>
    </div>
  );
}

export default MyBids;
