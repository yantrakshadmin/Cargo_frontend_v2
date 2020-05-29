import React, { useState } from 'react';
import { Button, Input, Modal } from 'antd';
import { Icon } from '@ant-design/compatible';
import MasterTemplateComponent from '../../../../components/shipper/masterTemplateComponent';
import AddressForm from '../../../../components/forms/address.form';

function ViewAvailableLoads() {
  const [modalVisible, setModalVisible] = useState(false);
  const [biddingLoading, setBiddingLoad] = useState({});
  const [bidPrice, setBidPrice] = useState(0);

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: 'State',
      dataIndex: 'state',
      key: 'state',
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Primary Phone',
      dataIndex: 'primaryPhone',
      key: 'primaryPhone',
    },
    {
      title: 'Secondary Phone',
      dataIndex: 'secondaryPhone',
      key: 'secondaryPhone',
    },
    {
      title: 'Truck Type',
      dataIndex: 'truckType',
      key: 'truckType',
    },
    {
      title: 'Action',
      key: 'operation',
      render: (row) => (
        <Button
          type='primary'
          onClick={() => {
            console.log(row);
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
      <MasterTemplateComponent
        title='View Available Loads'
        columns={columns}
        data={dataSource}
        modalBody={() => {}}
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
        <div>
          Enter Bid Amount
          <br />
          <Input
            placeholder='Price in Rupees'
            onChange={(e) => setBidPrice(e.target.value)}
            type='number'
            onPressEnter={() => {
              console.log('Ggg');
            }}
          />
        </div>
      </Modal>
    </div>
  );
}

export default ViewAvailableLoads;
