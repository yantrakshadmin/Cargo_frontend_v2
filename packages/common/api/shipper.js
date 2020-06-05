import { loadAPI } from '../helpers/api';

export const createOrders = ({
  order_id,
  shipment_type,
  sender_address,
  receiver_address,
  packages,
}) =>
  loadAPI(`create-order/`, {
    method: 'POST',
    data: { order_id, shipment_type, sender_address, receiver_address, package: packages },
  });
export const editOrders = (
  id,
  { order_id, shipment_type, sender_address, receiver_address, packages },
) =>
  loadAPI(`edit-order/${id}/`, {
    method: 'POST',
    data: { order_id, shipment_type, sender_address, receiver_address, package: packages },
  });
export const retrieveOrders = (id) => loadAPI(`edit-address/${id}/`);

export const createAddress = ({ name, company, email, phone, street, city, state, pin, country }) =>
  loadAPI(`create-address/`, {
    method: 'POST',
    data: { name, company, email, phone, street, city, state, pin, country },
  });

export const deleteAddress = (id) => loadAPI(`edit-address/${id}/`, { method: 'DELETE' });
export const retrieveAddress = (id) => loadAPI(`edit-address/${id}/`);
export const editAddress = (id, data) =>
  loadAPI(`edit-address/${id}/`, {
    method: 'PATCH',
    data,
  });

export const createVendor = ({
  name,
  company,
  email,
  primary_phone,
  secondary_phone,
  truck_type,
  ...address
}) =>
  loadAPI(`create-vendor/`, {
    method: 'POST',
    data: { name, company, email, primary_phone, secondary_phone, truck_type, ...address },
  });

export const deleteVendor = (id) => loadAPI(`edit-vendor/${id}/`, { method: 'DELETE' });
export const retrieveVendor = (id) => loadAPI(`edit-vendor/${id}/`);
export const editVendor = (id, data) =>
  loadAPI(`edit-vendor/${id}/`, {
    method: 'PATCH',
    data,
  });
