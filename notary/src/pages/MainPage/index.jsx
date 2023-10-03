import React from 'react';
import styled from './index.module.scss';
import Header from './components/Header';
import HomeLayout from "./components/HomeLayout";
import Footer from "./components/Footer";

function MainPage() {
    return (
      <div className={styled.wrapper}>
        <header className={styled.wrapper__header}>
            
          <Header />
         
        </header>
  
        <main className={styled.wrapper__main}>
          {/* <Outlet /> */}
          <HomeLayout />
        </main>
  
        <footer className={styled.wrapper__footer}>
          <Footer />
        </footer>
  
      </div>
  
  
  
    );
  }
  
  export default MainPage;