import React from 'react';
import { Row, Col, Button } from 'antd';
import { MasterHOC } from 'hocs/Master.hoc';
import { useAPI } from '@app/common/hooks/api';
import { assignTruck, locationDetails } from '@app/common/columns/shipperShipping.column';
import Iframe from 'react-iframe';

export const ShippingShipperScreen = () => {
  const { data, loading, reload } = useAPI(`/vendors/`);
  const assignTruckColumns = [
    ...assignTruck,
    {
      title: 'Track Now',
      key: 'operation',
      width: 100,
      render: () => (
        <div className='row align-center justify-center'>
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
            hideRightButton
          />
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
        <Col span={12}>
          <div className='row justify-center align-center '>
            <Iframe
              url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448183.73913991346!2d76.81306505114875!3d28.646677243574906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfdeb2202d249%3A0x9b07f2205242de4e!2sRed%20Line!5e0!3m2!1sen!2sin!4v1596549160232!5m2!1sen!2sin'
              width='500px'
              height='400px'
              id='myId'
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ShippingShipperScreen;
