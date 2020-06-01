import React, { useState } from 'react';
import { Typography, Button, Divider, Row, Col, Table, Modal } from 'antd';

const { Title } = Typography;

export const MasterHOC = ({
  title,
  data,
  columns,
  modalBody: ModalBody,
  hideRightButton,
  refresh = () => {
  },
  customRightButtonLabel,
  loading=false
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const onCancel = () => setModalVisible(false);
  const onDone = () => {
    refresh();
    onCancel();
  };

  return (
    <div>
      {hideRightButton ? null : (
        <Modal
          visible={modalVisible}
          onCancel={() => {
            setModalVisible(false);
          }}
          style={{ minWidth: '80vw' }}
          title={customRightButtonLabel || `Add ${title}`}
          footer={null}>
          <ModalBody onCancel={onCancel} onDone={onDone} />
        </Modal>
      )}
      <Row justify='space-between'>
        <Col>
          <Title level={3}>{title}</Title>
        </Col>
        <Col>
          {hideRightButton ? null : (
            <Button
              type='primary'
              onClick={() => {
                setModalVisible(true);
              }}>
              Add
              {' '}
              {title}
            </Button>
          )}
        </Col>
      </Row>
      <Divider style={{ margin: 0, padding: 0 }} />
      <Row>
        <Col span={24}>
          <Table bordered dataSource={data} columns={columns} loading={loading} />
        </Col>
      </Row>
    </div>
  );
};
