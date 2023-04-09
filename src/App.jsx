import React from 'react';
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Components/Header/Header';
import Footer from './Components/Header/Footer';

const App = () => {
  const loc = useLocation();
  // console.log(loc);
  if (loc.pathname === '/') {
    document.title = `Hero-Home`;
  }
  else {
    document.title = `Hero ${loc.pathname.replace('/', '-')}`
  }
  if (loc.state) {
    document.title = loc.state;
  }
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />

    </>
  );
};

export default App;