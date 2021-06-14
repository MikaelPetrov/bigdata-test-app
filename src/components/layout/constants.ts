import { Page, paths } from '../../core/routes/constants';

export const DEFAULT_PAGE = 1;
export const DEFAULT_LIMIT = 20;

export const menuItems = [
  {
    id: 1,
    name: 'Home',
    route: paths[Page.HOME],
  },
  {
    id: 2,
    name: 'Movies',
    route: paths[Page.MOVIES],
  },
];
