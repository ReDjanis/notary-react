import React from 'react';
import { Route, Routes } from "react-router-dom";
import '../src/style/reset.scss';
import '../src/style/style.scss';
import MainPage from "./pages/MainPage";




function App() {
  return (
    // <>
    //   {/* <Routes> */}
    //     <Route index element={<MainPage />}></Route>
    //   {/* </Routes> */}
    // </>
<MainPage />

  );
}

export default App;
