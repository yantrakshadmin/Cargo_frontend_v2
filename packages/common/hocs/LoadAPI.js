import React from 'react';

import { useAPI } from '../hooks/api';

export const LoadAPI = ({ url, options = {}, loading: Loader, success: Success, error: Error }) => {
  const { loading: l, data: d, error: e, status: s } = useAPI(url, options);

  if (l && Loader) return <Loader />;
  if (l) return null;
  if (e) return <Error options={options} error={e} status={s} />;
  return <Success options={options} data={d} status={s} />;
};
