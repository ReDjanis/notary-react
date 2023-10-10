import React from 'react';
import styled from './index.module.scss';
import Header from './components/Header';
import HomeLayout from "./components/HomeLayout";
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
      <header className={styled.wrapper__header}>
        <div className={styled.wrapper__header_body}> 

          <Header />

        </div>
      </header>

      <main className={styled.wrapper__main}>

        <Outlet />

      </main>

      <footer className={styled.wrapper__footer}>

        <Footer />

      </footer>

    </div>

  );
}

export default MainPage;