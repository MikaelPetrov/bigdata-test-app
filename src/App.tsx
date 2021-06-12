import React, { memo } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Layout from './components/layout';
import AppRoutes from './core/routes/AppRoutes';
import { useGetListMovies } from './hooks/useGetListMovies';

const App: React.FC = () => {
  const { page, limit, listMovies, setPage, setLimit } = useGetListMovies();

  console.log(page);
  console.log(limit);
  console.log(listMovies);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Layout>
            <AppRoutes />
          </Layout>
        </Switch>
      </Router>
    </div>
  );
};

export default memo(App);
