import React, { Component } from 'react';
import { CloseSquareOutlined, EditOutlined } from '@ant-design/icons';
import TableTemplateWithTabComponent
  from '../../../components/shipper/tableTemplateWithTabComponent';
import { yantraColors } from '../../../helpers/yantraColors';

function SalesOrder() {
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
      render: () => (
        <div className='row align-center justify-between'>
          <EditOutlined style={{ color: yantraColors.primary, fontSize: 30 }} />
          <CloseSquareOutlined style={{ color: '#ff0000', fontSize: 30 }} />
        </div>
      ),
    },
  ];

  const tabs = [
    {
      name:'All Sales Orders',
      key:'allSalesOrder',
      data:dataSource,
      columns
    },{
      name:'On Hold',
      key:'onHold',
      data:dataSource,
      columns
    },{
      name:'Ready To Dispatch',
      key:'readyToDispatch',
      data:dataSource,
      menu:[
        { title:'dispatch',
          onClick:()=>{console.log('worked')},type:'danger' },
        { title:'dispatch',
          onClick:()=>{console.log('worked')}, },
        { title:'dispatch',
          onClick:()=>{console.log('worked')},type:'default' },],
      columns
    },{
      name:'Dispatched',
      key:'dispatched',
      data:dataSource,
      columns

    },
  ]
  return (
    <TableTemplateWithTabComponent tabs={tabs} title='Sales Orders' modalBody={null} />
  );
}

export default SalesOrder;
