import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../src/style/reset.scss';
import '../src/style/style.scss';
import MainPage from "./pages/MainPage";
import Contacts from './pages/MainPage/components/Contacts';
import HomeLayout from './pages/MainPage/components/HomeLayout';
import PhysicalPerson from './pages/MainPage/components/PhysicalPerson';
import JuridicalPerson from './pages/MainPage/components/JuridicalPerson';
import Heritage from './pages/MainPage/components/Heritage';

function App() {
  const root = document.querySelector('#root');
  root.style.height = '100%';

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />}>
          <Route index element={<HomeLayout />} />
          <Route path='physical' element={<PhysicalPerson />} />
          <Route path='juridical' element={<JuridicalPerson />} />
          <Route path='heritage' element={<Heritage />} />
          <Route path='contacts' element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
