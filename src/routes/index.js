import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Routes, Route, Navigate } from 'react-router-dom';

// project imports
import { useRouter } from './routes.config';
import { getAuth } from 'service/Auth';

const PrivateRoute = ({ children }) => {
  const auth = getAuth();
  if (!auth?.token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node
};

const RouteList = () => {
  let routes = useRouter();
  return (
    <Routes>
      {routes.map(({ path, element, protect }) =>
        protect ? (
          <Route exact path={path} element={<PrivateRoute>{element}</PrivateRoute>} key={path} />
        ) : (
          <Route path={path} element={element} key={path} />
        )
      )}
    </Routes>
  );
};

const Router = () => {
  return (
    <Suspense fallback={<div>loading ...</div>}>
      <RouteList />
    </Suspense>
  );
};

export default Router;
