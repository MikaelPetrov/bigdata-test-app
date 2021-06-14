import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Layout from './components/layout';
import AppRoutes from './core/routes/AppRoutes';

const App: React.FC = () => {
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

export default App;
