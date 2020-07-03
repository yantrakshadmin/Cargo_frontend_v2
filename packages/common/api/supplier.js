import { loadAPI } from '../helpers/api';

export const postTruck =
  // eslint-disable-next-line camelcase
  ({ name, truck_type, origin, destination, total_trucks, scheduled_date, offered_price }) =>
    loadAPI(`post-truck/`, {
      method: 'POST',
      data: { name, truck_type, origin, destination, total_trucks, scheduled_date, offered_price },
    });

export const createBid = ({ id, bid_amount, comments }) => {
  return loadAPI(`bid/${id}/`, {
    method: 'POST',
    data: {
      bid_amount,
      comments,
    },
  });
};
export const availableOrder = () => loadAPI(`/available-orders/`);

export const tripManagementCreate = (data) =>
  loadAPI(`/trip-management/`, {
    method: 'POST',
    data,
  });
export const tripManagementRetrieve = (id) => loadAPI(`/edit-trip/${id}/`);
export const tripManagementEdit = (id, data) =>
  loadAPI(`/edit-trip/${id}/`, {
    method: 'PATCH',
    data,
  });
export const deleteTripManagement = (id) => loadAPI(`/edit-trip/${id}/`, { method: 'DELETE' });

