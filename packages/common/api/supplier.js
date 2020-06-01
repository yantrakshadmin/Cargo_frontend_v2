import { loadAPI } from '../helpers/api';

export const postTruck =
  // eslint-disable-next-line camelcase
  ({ name, truck_type, origin, destination, total_trucks, scheduled_date, offered_price }) =>
    loadAPI(`post-truck/`, {
      method: 'POST',
      data: { name, truck_type, origin, destination, total_trucks, scheduled_date, offered_price },
    });
