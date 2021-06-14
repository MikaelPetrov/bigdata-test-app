import React from 'react';
import Home from '../../components/pages/Home';
import MovieContainer from '../../components/pages/Movie/MovieContainer';
import MoviesContainer from '../../components/pages/Movies/MoviesContainer';
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
    {
      type: Page.MOVIES,
      path: paths[Page.MOVIES],
      component: <MoviesContainer />,
      exact: true,
    },
    {
      type: Page.MOVIES_ROUTING,
      path: paths[Page.MOVIES_ROUTING],
      component: <MovieContainer />,
    },
  ];
}
