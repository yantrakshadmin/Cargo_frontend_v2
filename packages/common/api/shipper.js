import { loadAPI } from '../helpers/api';

export const createAddress =
  ({ name, company, email, phone, street, city, state, pin, country }) =>
    loadAPI(`create-address/`, {
      method: 'POST',
      data: { name, company, email, phone, street, city, state, pin, country },
    });

export const createVendor =
  ({ name, company, email, phone, street, city, state, pin, country }) =>
    loadAPI(`create-vendor/`, {
      method: 'POST',
      data: { name, company, email, phone, street, city, state, pin, country },
    });
