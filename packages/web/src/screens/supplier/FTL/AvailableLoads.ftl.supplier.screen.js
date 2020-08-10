import React, { useState } from 'react';
import { Button, Form, Modal, Row, Spin } from 'antd';

import { MasterHOC } from 'hocs/Master.hoc';
import { shipperSalesOrderColumn } from '@app/common/columns/shipperSalesOrder.column';
import { useAPI } from '@app/common/hooks/api';
import { createBid } from '@app/common/api/supplier';
import { bidCreateFormFields } from '@app/common/formsFields/bidCreate.fromFields';
import { formItem } from '../../../hocs/formItem.hoc';
import { useHandelForm } from '../../../hooks/form';

function AvailableLoadsFtlSupplierScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const { data, loading } = useAPI(`/available-orders/`);

  const [bid, setBiddingLoad] = useState({});
  const columns = [
    ...shipperSalesOrderColumn,
    {
      title: 'Action',
      width: 100,
      key: 'operation',
      render: (row) => (
        <div className='row align-center justify-center'>
          <Button
            type='primary'
            onClick={() => {
              setBiddingLoad(row);
              setModalVisible(true);
            }}>
            Bid Now
          </Button>
        </div>
      ),
    },
  ];
  const { form, submit, loading: loadingForm } = useHandelForm({
    create: async ({ bid_amount, comments }) =>
      // eslint-disable-next-line no-return-await
      await createBid({ bid_amount, comments, id: bid.id }),
    success: 'Bid created/edited successfully.',
    failure: 'Error in creating/editing order.',
    done: () => {
      setModalVisible(false);
    },
    close: () => {
      setModalVisible(false);
    },
  });

  return (
    <div>
      <MasterHOC
        title='View Available Loads'
        columns={columns}
        data={data}
        modalBody={() => {}}
        hideRightButton
        loading={loading}
      />
      <Modal
        visible={modalVisible}
        title='Bid Now'
        onCancel={() => {
          setModalVisible(false);
        }}
        footer={null}>
        <Spin spinning={loadingForm}>
          <Form form={form} layout='vertical' onFinish={submit} hideRequiredMark>
            {bidCreateFormFields.map((item) => (
              <div className='p-2'>
                {formItem(item.key, item.rules, item.kwargs, item.type, item.others, item.label)}
              </div>
            ))}
            <Row>
              <Button type='primary' htmlType='submit'>
                Save
              </Button>
              <div className='p-2' />
              <Button
                type='primary'
                onClick={() => {
                  setModalVisible(false);
                }}>
                Cancel
              </Button>
            </Row>
          </Form>
        </Spin>
      </Modal>
    </div>
  );
}

export default AvailableLoadsFtlSupplierScreen;
