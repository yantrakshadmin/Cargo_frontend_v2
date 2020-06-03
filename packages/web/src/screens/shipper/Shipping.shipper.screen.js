import React from 'react';
import { Row,Col,Button } from 'antd'
import { MasterHOC } from 'hocs/Master.hoc';
import { useAPI } from '@app/common/hooks/api';
import {assignTruck, locationDetails} from '@app/common/columns/shipperShipping.column';

export const ShippingShipperScreen = () => {
  const { data, loading, reload } = useAPI(`/vendors/`);

  const assignTruckColumns = [
    ...assignTruck,
    {
      title: 'Track Now',
      key: 'operation',
      render: () => (
        <div className='row align-center justify-between'>
          <Button type='primary'>Track Now</Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Row>
        <Col span={12}>
          <br />
          <MasterHOC
            title='Assigned Trucks'
            columns={assignTruckColumns}
            data={data}
            loading={loading}
            refresh={reload}
            hideRightButton />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <br />
          <MasterHOC
            title='Location Details'
            columns={locationDetails}
            data={data}
            loading={loading}
            refresh={reload}
            hideRightButton
         />
        </Col>
      </Row>
    </div>

  );
};

export default ShippingShipperScreen;
