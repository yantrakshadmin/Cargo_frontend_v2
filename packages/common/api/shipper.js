import { loadAPI } from '../helpers/api';

export const createAddress = ({ name, company, email, phone, street, city, state, pin, country }) =>
  loadAPI(`create-address/`, {
    method: 'POST',
    data: { name, company, email, phone, street, city, state, pin, country },
  });

export const deleteAddress = (id) => loadAPI(`edit-address/${id}/`, { method: 'DELETE' });

export const createVendor =
  // eslint-disable-next-line camelcase
  ({
    name,
    company,
    email,
    primary_phone,
    secondary_phone,
    truck_type,
    street,
    city,
    state,
    pin,
    country,
  }) =>
    loadAPI(`create-vendor/`, {
      method: 'POST',
      data: {
        name,
        company,
        email,
        primary_phone,
        secondary_phone,
        truck_type,
        street,
        city,
        state,
        pin,
        country,
      },
    });

export const deleteVendor = (id) => loadAPI(`edit-vendor/${id}/`, { method: 'DELETE' });
