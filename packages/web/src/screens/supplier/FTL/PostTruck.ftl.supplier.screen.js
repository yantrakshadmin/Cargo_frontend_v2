import React from 'react';

import { MasterHOC } from 'hocs/Master.hoc';
import { PostTruckForm } from 'forms/PostTruck.form';

import { shipperItemColumn } from '@app/common/columns/shipperItem.column';

export const PostTruckFtlSupplierScreen = () => {
  const dataSource = [];

  return (
    <MasterHOC
      title='Post Truck'
      columns={shipperItemColumn}
      data={dataSource}
      modalBody={PostTruckForm}
      customRightButtonLabel='Post Truck'
    />
  );
};

export default PostTruckFtlSupplierScreen;
