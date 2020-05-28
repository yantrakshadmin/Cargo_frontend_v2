import React from 'react';

import { useSelector } from 'react-redux';
import { useProtected } from '../hooks/user';

export const Protected = ({ allowed, children }) => {
  const isAllowed = useProtected(allowed);

  if (isAllowed) return children;

  return null;
};

export const Authenticated = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (isAuthenticated) return children;

  return null;
};

export const NotAuthenticated = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (isAuthenticated) return null;

  return children;
};
