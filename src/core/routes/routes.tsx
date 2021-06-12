import React from 'react';
import Home from '../../components/pages/Home';
import { Page, paths } from './constants';
import { TypeRoute } from './type';

export function getAppRoutes(): TypeRoute[] {
  return [
    {
      type: Page.HOME,
      path: paths[Page.HOME],
      component: <Home />,
      exact: true,
    },
  ];
}
