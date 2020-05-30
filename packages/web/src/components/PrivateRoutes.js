import { Router } from '@reach/router';
import React from 'react';

import { ScreenWrapper } from 'components/ScreenWrapper';

export const PrivateRoutes = ({ routes }) => {
  return (
    <ScreenWrapper routes={routes}>
      <Router>
        {routes.map((Route, index) => {
          return <Route.Component path={Route.path} key={index.toString()} />;
        })}
        {routes.map((Route) => {
          return Route.subMenu
            ? Route.subMenu.map((ChildRoute, ind) => (
              <ChildRoute.Component path={ChildRoute.path} key={ind.toString()} />
            ))
            : null;
        })}
      </Router>
    </ScreenWrapper>
  );
};
