import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import DetailPage from './pages/DetailPage';
import CruFormPage from './pages/CruFormPage';
import DetailGridPage from './pages/DetailGridPage';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/edit/:id" element={<CruFormPage/>}/>
          <Route path="/detail/:id" element={<DetailPage/>}/>
          <Route path="/detail-grid/:type" element={<DetailGridPage/>}/>
          <Route path="/new" element={<CruFormPage/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
