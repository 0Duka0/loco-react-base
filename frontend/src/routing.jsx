import React from 'react';
import {
  RouterProvider,
  createHashRouter,
  NavLink,
  Outlet,
} from "react-router-dom";
import Pages from './pages';

const App = () => {
  return (
    <div>
      <div className="container">
        <nav>
          <ul>
            <NavLink to="/" className="list">
              Home
            </NavLink>
            <NavLink to="/test" className="list">
              Test
            </NavLink>
            <NavLink to="/live" className="list">
              Live course
            </NavLink>
            <NavLink to="/contact" className="list">
              Contact
            </NavLink>
          </ul>
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

const Routing = () => {
  const router = createHashRouter([
    {
      path: '/',
      element: <App />,
      children: [
        { path: '/', element: <Pages.Top /> },
        { path: '/test', element: <Pages.Test /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routing;
