import React, { useEffect, useState } from 'react';
import { useAPI } from '@app/common/hooks/api';
import { Tag, Button, notification } from 'antd';
import { loadAPI } from '@app/common/helpers/api';
import { yantraColors } from '../../helpers/yantraColors';
import { MasterHOC } from '../../hocs/Master.hoc';

const ViewBids = ({ id }) => {
  const { data, loading, reload } = useAPI(`/bids/${id}`, {});
  const [filteredData, setFilteredData] = useState([]);

  const filterTableData = (array) => {
    const filtered = [];
    array.forEach((i) => {
      if (
        filtered.some((item) => {
          return i.supplier.id === item.supplier.id;
        })
      ) {
        return null;
      }
      filtered.push(i);
      return null;
    });
    return filtered;
  };

  useEffect(() => {
    if (data) {
      if (data[0]) {
        setFilteredData(filterTableData(data));
      }
    }
  }, [data, loading]);

  const columns = [
    {
      title: 'Supplier Name',
      key: 'supplier name',
      render: (row) => (
        <div>
          {row.supplier.first_name} 
          {' '}
          {row.supplier.last_name}
        </div>
      ),
    },
    {
      title: 'Bid Amount',
      dataIndex: 'bid_amount',
      key: 'bid_amount',
    },

    {
      title: 'Comment',
      dataIndex: 'comments',
      key: 'comments',
    },
    {
      title: 'Status',
      dataIndex: 'is_confirmed',
      key: 'is_confirmed',
      render: (row) =>
        row ? (
          <Tag color={yantraColors.primary} key='Yes'>
            Confirmed
          </Tag>
        ) : (
          <Tag color={yantraColors.danger} key='No'>
            Not Confirmed
          </Tag>
        ),
    },
    {
      title: 'Action',
      key: 'action',
      width: 100,
      render: (row) => (
        <div className='row align-center justify-center'>
          <Button
            disabled={row.is_confirmed}
            type='primary'
            onClick={async () => {
              try {
                await loadAPI(`confirmbid/${row.id}/`, { method: 'PATCH' });
                reload();
                notification.success({ message: 'Bid Confirmed' });
              } catch (e) {
                notification.error({ message: 'Error in confirming', description: e.toString() });
              }
            }}>
            Confirm
          </Button>
        </div>
      ),
    },
  ];

  return (
    <MasterHOC
      title='View Bids'
      data={filteredData}
      columns={columns}
      hideRightButton
      refresh={reload}
      loading={loading}
    />
  );
};
export default ViewBids;
