import React, { useState } from 'react';
import { Button, Input, Modal } from 'antd';

import { MasterHOC } from 'hocs/Master.hoc';
import { shipperItemColumn } from '@app/common/columns/shipperItem.column';

function AvailableLoadsFtlSupplierScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  const [, setBiddingLoad] = useState({});
  const [, setBidPrice] = useState(0);

  const data = [];

  const columns = [
    ...shipperItemColumn,
    {
      title: 'Action',
      key: 'operation',
      render: (row) => (
        <Button
          type='primary'
          onClick={() => {
            setBiddingLoad(row);
            setModalVisible(true);
          }}>
          Bid Now
        </Button>
      ),
    },
  ];
  return (
    <div>

      <MasterHOC
        title='View Available Loads'
        columns={columns}
        data={data}
        modalBody={() => {}}
        hideRightButton
      />
      <Modal
        visible={modalVisible}
        onCancel={() => {
          setModalVisible(false);
        }}
        title='Bid Now'
        onOk={() => {}}>
        <div>
          Enter Bid Amount
          <br />
          <Input
            placeholder='Price in Rupees'
            onChange={(e) => {
              setBidPrice(e.target.value)
            }}
            type='number'
            onPressEnter={() => {}}
          />
        </div>
      </Modal>
    </div>
  );
}

export default AvailableLoadsFtlSupplierScreen;
