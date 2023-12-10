import React from 'react';
import styled from './index.module.scss';
import Header from './components/Header';
import Footer from "./components/Footer";
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function MainPage() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname]);

  return (
    <div className={styled.wrapper}>

      <Header />

      <Outlet />

      <Footer />

    </div>
  );
}

export default MainPage;