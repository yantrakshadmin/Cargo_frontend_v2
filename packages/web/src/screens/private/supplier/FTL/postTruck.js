import React, { useState } from 'react';
import MasterTemplateComponent from '../../../../components/shipper/masterTemplateComponent';
import AddressForm from '../../../../components/forms/address.form';
import PostTruckForm from '../../../../components/forms/postTruckForm';

function PostTruck() {
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
    // {
    //   title: 'Action',
    //   key: 'operation',
    //   render: (row) => (
    //     // <Button
    //     //   type='primary'
    //     //   onClick={()=>{console.log(row);setBiddingLoad(row);
    //     //     setModalVisible(true)}}>
    //     //   Bid Now
    //     // </Button>
    //   ),
    // },
  ];

  return (
    <MasterTemplateComponent
      title='Post Truck'
      columns={columns}
      data={dataSource}
      modalBody={PostTruckForm}
      customRightButtonLabel='Post Truck'
    />
  );
}

export default PostTruck;
