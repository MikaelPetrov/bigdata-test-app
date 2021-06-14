import { memo, ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { Page, paths } from '../../core/routes/constants';
import { actions } from '../../redux/reducers/moviesReducer';
import { DEFAULT_LIMIT, DEFAULT_PAGE, menuItems } from './constants';
import {
  LayoutContainer,
  LayoutContent,
  LayoutFooter,
  LayoutHeader,
  LayoutMenuItem,
} from './style';

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  function getPage(route: string): () => void {
    if (paths[Page.MOVIES] !== route) {
      return () => {
        history.push(route);
        dispatch(
          actions.setListMovies({
            movie_count: 1,
            movies: [],
          }),
        );
      };
    }

    return () =>
      history.push({
        pathname: route,
        search: `?page=${DEFAULT_PAGE}&limit=${DEFAULT_LIMIT}`,
      });
  }

  return (
    <LayoutContainer data-name="layout-container">
      <LayoutHeader data-name="layout-header">
        {menuItems.map((item) => (
          <LayoutMenuItem
            key={item.id}
            data-name="layout-menu-item"
            onClick={getPage(item.route)}
            color={item.route === location.pathname ? '#fff' : 'auto'}
            background={item.route === location.pathname ? '#909090' : 'auto'}
          >
            {item.name}
          </LayoutMenuItem>
        ))}
      </LayoutHeader>
      <LayoutContent data-name="layout-content">{props.children}</LayoutContent>
      <LayoutFooter data-name="layout-footer">Created by ...</LayoutFooter>
    </LayoutContainer>
  );
};

export default memo(Layout);
