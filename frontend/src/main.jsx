import React from 'react';
import ReactDOM from 'react-dom/client';
import Routing from './routing';
import { BrowserRouter } from 'react-router-dom';
import {Link} from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <nav>
        <ul>
          <Link to="/" className="list">
            Home
          </Link>
          <Link to="/test" className="list">
            Test
          </Link>
          <Link to="/live" className="list">
            Live course
          </Link>
          <Link to="/contact" className="list">
            Contact
          </Link>
        </ul>
      </nav>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
    <Routing />
  </BrowserRouter>
);
