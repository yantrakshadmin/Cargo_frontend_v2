import React from 'react';
import { CloseSquareOutlined, EditOutlined } from '@ant-design/icons';
import MasterTemplateComponent from 'components/shipper/masterTemplateComponent';
import { yantraColors } from 'helpers/yantraColors';
import AddressForm from 'components/forms/address.form';

function AddressShipper() {
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

  return (
    <MasterTemplateComponent
      title='Address'
      columns={columns}
      data={dataSource}
      modalBody={AddressForm}
    />
  );
}

export default AddressShipper;
