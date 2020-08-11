import React from 'react';
import { Table, Row, Col } from 'antd';
import { ptlRateColumn } from '@app/common/columns/ptlRate.column';

export const PTLRateTable = ({ loading }) => {
  const data = [
    {
      id: 1,
      carrier_name: 'DHFL',
      price: 1000,
    },
    {
      id: 2,
      carrier_name: 'FedEx',
      price: 1200,
    },
    {
      id: 3,
      carrier_name: 'Blue Dart',
      price: 900,
    },
    {
      id: 1,
      carrier_name: 'DHL',
      price: 1050,
    },
  ];
  return (
    <Row>
      <Col span={24}>
        <Table size='small' dataSource={data} loading={loading} columns={ptlRateColumn} />
      </Col>
    </Row>
  );
};
