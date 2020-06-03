import React, { useEffect, useState } from 'react';
import { Typography, Button, Divider, Row, Col, Table, Modal } from 'antd';

const { Title } = Typography;

export const MasterHOC = ({
  title,
  data,
  columns,
  modalParams,
  modalBody: ModalBody,
  hideRightButton,
  customModalTitle,
  refresh = () => {
  },
  customRightButtonLabel,
  loading=false
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const onCancel = () =>{ setModalVisible(false);

    if(modalParams){
      modalParams.setModalParams({
        showModal:false,
        id:0,
        isEditable:false,
      });
    }};
  const onDone = () => {
    refresh();
    if(modalParams){
      modalParams.setModalParams({
        showModal:false,
        id:0,
        isEditable:false,
      });}
    onCancel();
  };
  useEffect(()=>
  {
    if(modalParams){
      setModalVisible(modalParams.showModal)
    }}
  ,[modalParams]  )
  return (
    <div>
      {hideRightButton ? null : (
        <Modal
          visible={modalVisible}
          onCancel={() => {
            setModalVisible(false);
          }}
          style={{ minWidth: '80vw' }}
          title={customModalTitle || customRightButtonLabel || `Add ${title}`}
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
              className='m-2'
              type='primary'
              onClick={() => {
                setModalVisible(true);
              }}>
              {customRightButtonLabel || `Add ${title}`}
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
