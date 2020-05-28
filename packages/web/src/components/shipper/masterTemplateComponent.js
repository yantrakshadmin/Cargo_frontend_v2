import React, { Component, useState } from 'react';
import { Typography, Button, Divider, Row, Col, Table, Modal } from 'antd';

const { Title } = Typography;

function MasterTemplateComponent({ title, data, columns, modalBody }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <div>
      <Modal
        visible={modalVisible}
        onCancel={() => {
          setModalVisible(false);
        }}
        style={{ minWidth: '80vw' }}
        title={`Add ${title}`}
        footer={null}>
        {modalBody({
          onCancel: () => {
            setModalVisible(false);
          },
        })}
      </Modal>
      <Row justify='space-between'>
        <Col>
          <Title level={3}>{title}</Title>
        </Col>
        <Col>
          <Button
            type='primary'
            onClick={() => {
              setModalVisible(true);
            }}>
            Add 
            {' '}
            {title}
          </Button>
        </Col>
      </Row>
      <Divider style={{ margin: 0, padding: 0 }} />
      <Row>
        <Col span={24}>
          <Table bordered dataSource={data} columns={columns} />
        </Col>
      </Row>
    </div>
  );
}

export default MasterTemplateComponent;
