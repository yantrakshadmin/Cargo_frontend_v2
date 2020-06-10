import React from 'react';
import { Table,Row,Col } from 'antd';
import { shipperItemColumn } from '@app/common/columns/shipperItems.column';

export const ItemTable = ({ package:data,loading }) =>{
  return(
    <Row>
      <Col span={12}>
        <div className='m-2'>
          <Table
            size='small'
            dataSource={data}
            loading={loading}
            columns={shipperItemColumn}
    />
        </div>
      </Col>
    </Row>
  )
}
