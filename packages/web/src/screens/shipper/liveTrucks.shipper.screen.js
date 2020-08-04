import React, { useEffect, useState } from 'react';
import { useAPI } from '@app/common/hooks/api';
import { shipperLiveTrucksColumn } from '@app/common/columns/shipperLiveTrucks.column';
import { Button, Descriptions, Modal, Tag } from 'antd';
import { dateFormatter } from '@app/common/helpers/dateFomatter';
import { MasterHOC } from '../../hocs/Master.hoc';

const { Item } = Descriptions;

const LiveTrucks = () => {
  const { data, loading, reload } = useAPI(`/live-trucks/`, {});
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState(0);
  useEffect(() => {
    if ( data && data[0]) {
      setId(data[0].id);
    }
  }, [data]);
  const columns = [
    ...shipperLiveTrucksColumn,
    {
      title: 'Scheduled Date',
      dataIndex: 'scheduled_date',
      key: 'scheduled_date',
      render: (row) => <div>{dateFormatter(row)}</div>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (row) => (
        <Button
          type='primary'
          onClick={() => {
            setId(row.id);
            setModalVisible(true);
          }}>
          Contact
        </Button>
      ),
    },
  ];

  return (
    <div>
      <Modal
        visible={modalVisible}
        header={null}
        onCancel={() => {
          setModalVisible(false);
        }}
        style={{ minWidth: '60vw' }}
        footer={null}>
        {data
          ? data.map((i) => {
            if (i.id === id) {
              return (
                <Descriptions title='Owner Details' key={i.id.toString()} layout='vertical'>
                  <Item label='Name'>
                    {i.owner.first_name}
                    {' '}
                    {i.owner.last_name}
                  </Item>
                  <Item label='Email'>xxxxxxxxxx@gmail.com</Item>
                  <Item label='Verified'>
                    {i.owner.verified ? (
                      <Tag color='success' key='yes'>
                        Verified
                      </Tag>
                    ) : (
                      <Tag color='error' key='no'>
                        Not Verified
                      </Tag>
                    )}
                  </Item>
                </Descriptions>
              );
            }
            return null;
          })
          : null}
      </Modal>
      <MasterHOC
        title='Live Trucks'
        data={data}
        columns={columns}
        hideRightButton
        refresh={reload}
        loading={loading}
      />
    </div>
  );
};
export default LiveTrucks;
