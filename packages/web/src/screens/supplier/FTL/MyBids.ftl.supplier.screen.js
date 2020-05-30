import React, { useState } from 'react';
import { Button, Row, Col, Typography, Modal, Divider } from 'antd';

import { MasterHOC } from 'hocs/Master.hoc';
import { supplierMyBidsColumn } from '@app/common/columns/supplierMyBids.column';

const { Text } = Typography;

export const MyBidsFTLSupplierScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const bids = [];
  const data = [];

  const columns = [
    ...supplierMyBidsColumn,
    {
      title: 'Action',
      key: 'operation',
      render: () => (
        <Row justify='center'>
          <Col>
            <Button type='primary' onClick={() => setModalVisible(true)}>
              View
            </Button>
          </Col>
        </Row>
      ),
    },
  ];

  return (
    <div>
      <MasterHOC title='My Bids' columns={columns} data={data} hideRightButton />
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
};

export default MyBidsFTLSupplierScreen;
