import React from 'react';
import {Outlet} from 'react-router-dom'
import Header from './Components/Header/Header';
import Footer from './Components/Header/Footer';
import Home from './Components/Header/Home/Home';

const App = () => {
  return (
    <>
  <Header/>
<div>
  <Outlet/>
</div>
  <Footer/>
  
    </>
  );
};

export default App;