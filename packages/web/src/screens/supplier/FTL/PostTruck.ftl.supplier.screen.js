import React from 'react';

import { MasterHOC } from 'hocs/Master.hoc';
import { PostTruckForm } from 'forms/PostTruck.form';

import { shipperItemColumn } from '@app/common/columns/shipperItem.column';
import { useAPI } from '@app/common/hooks/api';

export const PostTruckFtlSupplierScreen = () => {
  const { data, loading, reload } = useAPI(`/posted-trucks/`);

  return (
    <MasterHOC
      title='Post Truck'
      columns={shipperItemColumn}
      data={data}
      loading={loading}
      refresh={reload}
      modalBody={PostTruckForm}
      customRightButtonLabel='Post Truck'
    />
  );
};

export default PostTruckFtlSupplierScreen;
