import React from 'react';

import { MasterHOC } from 'hocs/Master.hoc';
import { PostTruckForm } from 'forms/PostTruck.form';

import { useAPI } from '@app/common/hooks/api';
import { supplierPostTruckColumn } from '@app/common/columns/supplierPostTruck.column';
import {dateFormatter} from '@app/common/helpers/dateFomatter';

export const PostTruckFtlSupplierScreen = () => {
  const { data, loading, reload } = useAPI(`/posted-trucks/`);
  console.log(data,"Post truck")
  const postTruckColumn = [
    ...supplierPostTruckColumn,

    {
      title: 'Scheduled Date',
      dataIndex: 'scheduled_date',
      key: 'scheduled_date',
      render:(element)=>{
        return(
          <div>
            {dateFormatter(element)}
          </div>
        )
      }
    },

  ]
  return (
    <MasterHOC
      title='Post Truck'
      columns={postTruckColumn}
      data={data}
      loading={loading}
      refresh={reload}
      modalBody={PostTruckForm}
      customRightButtonLabel='Post Truck'
    />
  );
};

export default PostTruckFtlSupplierScreen;
