import React from 'react';
import {Route, Routes} from "react-router-dom";
import Pages from './pages';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Pages.Home />} />
      <Route path="/test" element={<Pages.Test />} />
    </Routes>
  );
}

export default Routing;