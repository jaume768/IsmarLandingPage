import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import PaginaPrincipal from './components/PaginaPrincipal';
import PaginaContacto from './components/PaginaContacto';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<PaginaPrincipal />} />
        <Route path="regalo" element={<PaginaContacto />} />
      </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);
