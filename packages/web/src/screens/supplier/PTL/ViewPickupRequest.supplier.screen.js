import React from 'react';
import { MasterHOC } from 'hocs/Master.hoc';
import { useAPI } from '@app/common/hooks/api';
import {supplierPTLViewPRColumn} from '@app/common/columns/supplierPTLViewPR.column';
import {Button} from 'antd';

const ViewPickupRequest = () =>{
  const { data, loading, reload } = useAPI(`/vendors/`);
  const viewPRColumns = [
    ...supplierPTLViewPRColumn,
    {
      title: 'Assign',
      key: 'operation',
      render: () => (
        <div className='row align-center justify-between'>
          <Button type='primary'>Assign Now</Button>
        </div>
      ),
    },
  ];
  return(
    <MasterHOC
      title='View Pickup Request'
      columns={viewPRColumns}
      data={data}
      loading={loading}
      refresh={reload}
      hideRightButton />
  )
}
export default ViewPickupRequest;

