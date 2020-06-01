import React, { useState } from 'react';
import { Typography, Button, Divider, Row, Col, Table, Modal, Tabs } from 'antd';

const { Title } = Typography;
const { TabPane } = Tabs;

export const TableWithTabHOC = ({ title, tabs, modalBody: ModalBody=() => null, loading=false, refresh }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0].key);
  const callback = (key) => {
    setActiveTab(key);
  };
  
  const onCancel = () => {
    setModalVisible(false);
  };

  const onDone = () => {
    refresh();
    onCancel();
  };

  const getIndex = () => {
    let activeIndex = 0;
    tabs.filter((i, index) => {
      if (i.key === activeTab) {
        activeIndex = index;
      }
      return null;
    });
    return activeIndex;
  };

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
        <ModalBody onCancel={onCancel} onDone={onDone} />
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
      <Row />
      {
        // eslint-disable-next-line no-nested-ternary
        tabs[getIndex()] ? (
          tabs[getIndex()].menu ? (
            <Row>
              <Col span={24}>
                {tabs[getIndex()].menu.map((i) => (
                  <Button
                    className='m-2 '
                    type={i.type || 'primary'}
                    key={i.title}
                    onClick={i.onClick}>
                    {i.title}
                  </Button>
                ))}
              </Col>
            </Row>
          ) : null
        ) : null
      }
      <Row>
        <Col span={24}>
          {tabs ? (
            <Tabs defaultActiveKey={tabs[0].key} onChange={callback}>
              {tabs.map((tab) => (
                <TabPane tab={tab.name} key={tab.key}>
                  <Table bordered dataSource={tab.data} loading={tab.loading} columns={tab.columns} />
                </TabPane>
              ))}
            </Tabs>
          ) : null}
        </Col>
      </Row>
    </div>
  );
};
